import { NextResponse } from "next/server";
import fetch from "node-fetch";
import nodemailer from "nodemailer";
import logger from "@/lib/logger";

export async function POST(req) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const body = await req.json();
    let { name, organization, email, phone, message } = body;

    // 🧹 Basic sanitization
    name = name?.trim();
    organization = organization?.trim();
    email = email?.trim();
    phone = phone?.trim();
    message = message?.trim();

    if (!name || !email || !phone || !message) {
      logger.warn("❌ Missing required fields", { body });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheetdbUrl = `${process.env.SHEETDB_URL}?sheet=ContactForm`;
    const sendchampApiKey = process.env.SENDCHAMP_API_KEY;
    const adminPhone = process.env.ADMIN_WHATSAPP;
    const adminEmail = process.env.ADMIN_EMAIL;

    // 🧠 Shared email transporter (Zoho)
    const transporter = nodemailer.createTransport({
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.ZOHO_SMTP_USER,
        pass: process.env.ZOHO_SMTP_PASS,
      },
    });

    logger.info("📩 New contact form submission received", { name, email });

    // 🧩 Run independent actions in parallel
    const tasks = [
      // 1️⃣ Save to Google Sheet
      (async () => {
        try {
          await fetch(sheetdbUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ data: body }),
            signal: controller.signal,
          });
          logger.info("✅ Saved to SheetDB successfully");
        } catch (err) {
          logger.error("SheetDB failed", { error: err.message });
        }
      })(),

      // 2️⃣ Notify Admin via WhatsApp
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
              message: `📩 *New Contact Form Submission*\n\nName: ${name}\nOrg: ${organization || "-"}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            }),
            signal: controller.signal,
          });
          logger.info("✅ WhatsApp notification sent to admin");
        } catch (err) {
          logger.error("WhatsApp alert failed", { error: err.message });
        }
      })(),

      // 3️⃣ Email Admin
      (async () => {
        try {
          await transporter.sendMail({
            from: process.env.ZOHO_SMTP_USER,
            to: adminEmail,
            subject: "New Contact Form Submission",
            text: `You have a new contact form submission:\n\nName: ${name}\nOrganization: ${organization || "-"}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
          });
          logger.info("✅ Admin email sent successfully");
        } catch (err) {
          logger.error("Admin email failed", { error: err.message });
        }
      })(),

      // 4️⃣ Email User (acknowledgement)
      (async () => {
        try {
          if (email) {
            await transporter.sendMail({
              from: process.env.ZOHO_SMTP_USER,
              to: email,
              subject: "We received your message",
              text: `Hi ${name},\n\nThank you for contacting EcoLyft. We’ve received your message and our team will get back to you shortly.\n\nHere’s a copy of your submission:\nOrganization: ${organization || "-"}\nPhone: ${phone}\nMessage: ${message}\n\nBest regards,\nEcoLyft Team`,
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

    logger.info("✅ Contact form processing completed successfully", { name });

    return NextResponse.json(
      { message: "Message received", data: body },
      { status: 200 }
    );
  } catch (error) {
    clearTimeout(timeout);
    logger.error("❌ Contact form error", { error: error.message, stack: error.stack });
    return NextResponse.json(
      { error: "Failed to process form" },
      { status: 500 }
    );
  }
}
