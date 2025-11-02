import express from "express";
import Contact from "../models/Contact.js";
import { getGmailTransporter } from "../config/gmailTransporter.js";

const router = express.Router();

router.post("/submit", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, projectType, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const contact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      projectType,
      projectDetails: message,
    });

    await contact.save();

    // ✅ Gmail API transporter
    const transporter = await getGmailTransporter();

    // Admin mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Project Type:</strong> ${projectType || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // User confirmation mail
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your inquiry",
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${firstName},</p>
        <p>We have received your inquiry and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Structural Engineering Team</p>
      `,
    });

    res.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.get("/all", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
