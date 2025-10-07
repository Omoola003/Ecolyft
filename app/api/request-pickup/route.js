// app/api/request-pickup/route.js
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import nodemailer from "nodemailer";

export async function POST(req) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const body = await req.json();
    let { name, address, wasteType, quantity, date, time, email } = body;

    // 🧹 Trim + validate
    name = name?.trim();
    address = address?.trim();
    wasteType = wasteType?.trim();
    quantity = quantity?.trim();
    date = date?.trim();
    time = time?.trim();
    email = email?.trim();

    if (!name || !address || !wasteType || !quantity || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheetdbUrl = `${process.env.SHEETDB_URL}?sheet=RequestPickup`;
    const sendchampApiKey = process.env.SENDCHAMP_API_KEY;
    const adminPhone = process.env.ADMIN_WHATSAPP;
    const adminEmail = process.env.ADMIN_EMAIL;

    // ✉️ Email setup (Zoho)
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    // ⚙️ Parallelized + fault-tolerant
    const tasks = [
      // 1️⃣ Save to SheetDB
      (async () => {
        try {
          await fetch(sheetdbUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: body }),
            signal: controller.signal,
          });
        } catch (err) {
          console.warn("SheetDB failed:", err.message);
        }
      })(),

      // 2️⃣ WhatsApp admin alert
      (async () => {
        try {
          await fetch("https://api.sendchamp.com/v1/whatsapp/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${sendchampApiKey}`,
            },
            body: JSON.stringify({
              to: adminPhone,
              message: `🚛 *New Pickup Request*\n\nName: ${name}\nAddress: ${address}\nWaste Type: ${wasteType}\nQuantity: ${quantity}\nPickup Date: ${date}\nPickup Time: ${time}`,
            }),
            signal: controller.signal,
          });
        } catch (err) {
          console.warn("WhatsApp notification failed:", err.message);
        }
      })(),

      // 3️⃣ Admin email
      (async () => {
        try {
          await transporter.sendMail({
            from: process.env.ZOHO_SMTP_USER,
            to: adminEmail,
            subject: "New Pickup Request",
            text: `You have a new pickup request:\n\nName: ${name}\nAddress: ${address}\nWaste Type: ${wasteType}\nQuantity: ${quantity}\nPickup Date: ${date}\nPickup Time: ${time}`,
          });
        } catch (err) {
          console.warn("Admin email failed:", err.message);
        }
      })(),

      // 4️⃣ User confirmation email
      (async () => {
        try {
          if (email) {
            await transporter.sendMail({
              from: process.env.ZOHO_SMTP_USER,
              to: email,
              subject: "Pickup Request Received",
              text: `Hi ${name},\n\nThank you for submitting your pickup request. Here are your details:\nAddress: ${address}\nWaste Type: ${wasteType}\nQuantity: ${quantity}\nPickup Date: ${date}\nPickup Time: ${time}\n\nOur team will contact you shortly.\n\nBest regards,\nEcoLyft Team`,
            });
          }
        } catch (err) {
          console.warn("Confirmation email failed:", err.message);
        }
      })(),
    ];

    await Promise.allSettled(tasks);
    clearTimeout(timeout);

    return NextResponse.json(
      { message: "Pickup request received", data: body },
      { status: 200 }
    );
  } catch (error) {
    clearTimeout(timeout);
    console.error("Pickup Request error:", error);
    return NextResponse.json(
      { error: "Failed to process pickup request" },
      { status: 500 }
    );
  }
}
