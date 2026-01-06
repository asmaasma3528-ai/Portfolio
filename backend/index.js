import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend"; // Use Resend instead of Google/Nodemailer
import "dotenv/config";

const app = express();

// 1. Clients Setup
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Middleware
app.use(cors({
 origin: [
    "http://localhost:5173", 
    "https://pavan-portfolio-smoky.vercel.app"
  ],
  credentials: true
}));
app.use(express.json());

// 3. Contact Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // A. Save to Supabase
    await supabase.from("contacts").insert([{ name, email, message }]);

    // B. Send Email via Resend API (Not SMTP!)
    // This will NOT timeout because it uses an API call, not a mail port
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: process.env.RECEIVER_EMAIL, 
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });

    res.status(200).json({ success: true, message: "Success!" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server live on port ${PORT}`));