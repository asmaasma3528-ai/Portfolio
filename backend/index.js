import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";
import nodemailer from "nodemailer";

const index = express();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

// UPDATED: Open CORS so your Vercel site can connect
index.use(cors()); 
index.use(express.json());

index.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) throw error;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Portfolio Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent & Email received!" });
  } catch (err) {
    console.error("Error details:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

index.get("/api/status", async (req, res) => {
  try {
    const { data, error } = await supabase.from("contacts").select("*").limit(1);
    if (error) throw error;
    res.json({ message: "Success!! Database connected.", status: "Online" });
  } catch (err) {
    res.status(500).json({ message: "Connection failed.", error: err.message });
  }
});

// UPDATED: Use Render's dynamic port
const PORT = process.env.PORT || 5000; 
index.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});