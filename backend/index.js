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

index.use(cors({
  origin: "https://pavan-portfolio-smoky.vercel.app", 
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
index.use(express.json());

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Port 465 uses SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 10000, 
  greetingTimeout: 5000,
  socketTimeout: 10000,
});

index.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { error } = await supabase.from("contacts").insert([{ name, email, message }]);
    if (error) throw error;

    res.status(200).json({ success: true, message: "Message sent!" });

    transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }).catch(mailErr => {
      console.error("Email failed in background, but data was saved:", mailErr);
    });

  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ success: false, error: err.message });
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