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

index.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // 1. Save to Supabase FIRST
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) throw error;

    // 2. CREATE THE TRANSPORTER (This is the function you are missing)
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // Use SSL for Port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Your 16-digit App Password
      },
    });

    // 3. DEFINE THE EMAIL CONTENT
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // 4. SEND THE EMAIL
    await transporter.sendMail(mailOptions);

    // 5. RESPOND TO FRONTEND
    res.status(200).json({ success: true, message: "Message sent!" });

  } catch (err) {
    console.error("Backend Error:", err);
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