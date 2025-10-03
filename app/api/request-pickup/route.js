// app/api/request-pickup/route.js
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, address, wasteType, quantity, date, time, email } = body;

    // Validate required fields
    if (!name || !address || !wasteType || !quantity || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ----------------------------
    // 1️⃣ Save to Google Sheet via SheetDB
    // ----------------------------
    const sheetdbUrl = `${process.env.SHEETDB_URL}?sheet=RequestPickup`;
    await fetch(sheetdbUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: body }),
    });

    // ----------------------------
    // 2️⃣ Notify Admin via WhatsApp (SendChamp)
    // ----------------------------
    const sendchampApiKey = process.env.SENDCHAMP_API_KEY;
    const adminPhone = process.env.ADMIN_WHATSAPP;
    await fetch("https://api.sendchamp.com/v1/whatsapp/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sendchampApiKey}`,
      },
      body: JSON.stringify({
        to: adminPhone,
        message: `New Pickup Request:\nName: ${name}\nAddress: ${address}\nWaste Type: ${wasteType}\nQuantity: ${quantity}\nPickup Date: ${date}\nPickup Time: ${time}`,
      }),
    });

    // ----------------------------
    // 3️⃣ Send Email Notification to Admin (Zoho SMTP)
    // ----------------------------
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.ZOHO_SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "New Pickup Request",
      text: `You have a new pickup request:\n\nName: ${name}\nAddress: ${address}\nWaste Type: ${wasteType}\nQuantity: ${quantity}\nPickup Date: ${date}\nPickup Time: ${time}`,
    });

    // ----------------------------
    // 4️⃣ Send Confirmation Email to Submitter
    // ----------------------------
    if (email) {
      await transporter.sendMail({
        from: process.env.ZOHO_SMTP_USER,
        to: email,
        subject: "Pickup Request Received",
        text: `Hi ${name},\n\nThank you for submitting your pickup request. Here are your details:\nAddress: ${address}\nWaste Type: ${wasteType}\nQuantity: ${quantity}\nPickup Date: ${date}\nPickup Time: ${time}\n\nWe will contact you shortly.\n\nBest regards,\nEcoLyft Team`,
      });
    }

    return NextResponse.json(
      { message: "Pickup request received", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to process pickup request" },
      { status: 500 }
    );
  }
}
