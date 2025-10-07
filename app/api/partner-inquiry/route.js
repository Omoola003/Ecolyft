import { NextResponse } from "next/server";
import fetch from "node-fetch";
import nodemailer from "nodemailer";
import logger from "@/lib/logger"; // ✅ Import shared logger

export async function POST(req) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const body = await req.json();
    let { name, organization, email, phone, message } = body;

    // 🧹 Sanitize and trim inputs
    name = name?.trim();
    organization = organization?.trim();
    email = email?.trim();
    phone = phone?.trim();
    message = message?.trim();

    if (!name || !organization || !email || !message) {
      logger.warn("❌ Missing required fields in partner inquiry", { body });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheetdbUrl = `${process.env.SHEETDB_URL}?sheet=PartnerInquiry`;
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

    logger.info("🤝 New Partner Inquiry received", { name, organization, email });

    // ⚙️ Run all major tasks concurrently
    const tasks = [
      // 1️⃣ Save to Google Sheet (SheetDB)
      (async () => {
        try {
          await fetch(sheetdbUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: body }),
            signal: controller.signal,
          });
          logger.info("✅ Partner inquiry saved to SheetDB");
        } catch (err) {
          logger.error("SheetDB save failed", { error: err.message });
        }
      })(),

      // 2️⃣ Notify Admin via WhatsApp (SendChamp)
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
              message: `🤝 *New Partner Inquiry*\n\nName: ${name}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`,
            }),
            signal: controller.signal,
          });
          logger.info("✅ WhatsApp notification sent to admin");
        } catch (err) {
          logger.error("WhatsApp notification failed", { error: err.message });
        }
      })(),

      // 3️⃣ Send Email Notification to Admin (Zoho SMTP)
      (async () => {
        try {
          await transporter.sendMail({
            from: process.env.ZOHO_SMTP_USER,
            to: adminEmail,
            subject: "New Partner Inquiry Submission",
            text: `You have a new partner inquiry:\n\nName: ${name}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`,
          });
          logger.info("✅ Admin email sent successfully");
        } catch (err) {
          logger.error("Admin email failed", { error: err.message });
        }
      })(),

      // 4️⃣ Send Confirmation Email to Submitter
      (async () => {
        try {
          if (email) {
            await transporter.sendMail({
              from: process.env.ZOHO_SMTP_USER,
              to: email,
              subject: "We received your inquiry",
              text: `Hi ${name},\n\nThank you for reaching out to EcoLyft. We’ve received your partnership inquiry and our team will review it shortly.\n\nHere’s a copy of your submission:\nOrganization: ${organization}\nPhone: ${phone || "-"}\nMessage: ${message}\n\nWarm regards,\nEcoLyft Team`,
            });
            logger.info(`📧 Confirmation email sent to user (${email})`);
          }
        } catch (err) {
          logger.error("Confirmation email failed", { error: err.message });
        }
      })(),
    ];

    await Promise.allSettled(tasks);
    clearTimeout(timeout);

    logger.info("✅ Partner inquiry processed successfully", { name, organization });

    return NextResponse.json(
      { message: "Inquiry received", data: body },
      { status: 200 }
    );
  } catch (error) {
    clearTimeout(timeout);
    logger.error("❌ Partner Inquiry error", { error: error.message, stack: error.stack });
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
