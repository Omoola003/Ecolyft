// app/api/partner-inquiry/route.js
import { NextResponse } from "next/server";
import fetch from "node-fetch";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, organization, email, phone, message } = body;

    // Validate required fields
    if (!name || !organization || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ----------------------------
    // 1️⃣ Save to Google Sheet via SheetDB
    // ----------------------------
    const sheetdbUrl = `${process.env.SHEETDB_URL}?sheet=PartnerInquiry`;
    await fetch(sheetdbUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: body }),
    });

    // ----------------------------
    // 2️⃣ Notify Admin via WhatsApp (SendChamp)
    // ----------------------------
    const sendchampApiKey = process.env.SENDCHAMP_API_KEY;
    const adminPhone = process.env.ADMIN_WHATSAPP; // e.g., "+2348071116369"
    await fetch("https://api.sendchamp.com/v1/whatsapp/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sendchampApiKey}`,
      },
      body: JSON.stringify({
        to: adminPhone,
        message: `New Partner Inquiry Submission:\nName: ${name}\nOrg: ${organization}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`,
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
      subject: "New Partner Inquiry Submission",
      text: `You have a new partner inquiry:\n\nName: ${name}\nOrganization: ${organization}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`,
    });

    // ----------------------------
    // 4️⃣ Send Confirmation Email to Submitter
    // ----------------------------
    if (email) {
      await transporter.sendMail({
        from: process.env.ZOHO_SMTP_USER,
        to: email,
        subject: "We received your inquiry",
        text: `Hi ${name},\n\nThank you for your inquiry. Our team will review your request and get back to you shortly.\n\nHere’s a copy of your submission:\nOrganization: ${organization}\nPhone: ${phone || "-"}\nMessage: ${message}\n\nBest regards,\nEcoLyft Team`,
      });
    }

    return NextResponse.json(
      { message: "Inquiry received", data: body },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to process inquiry" },
      { status: 500 }
    );
  }
}
