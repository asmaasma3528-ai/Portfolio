import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import "dotenv/config";

const app = express();

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const resend = new Resend(process.env.RESEND_API_KEY);

// 2. Middleware
app.use(cors({
  origin: "https://pavan-portfolio-smoky.vercel.app", 
  methods: ["POST", "GET", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

app.use(express.json());

// 3. Main Contact Route
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { error: dbError } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (dbError) throw dbError;

    res.status(200).json({ success: true, message: "Success! Message received." });

    resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.RECEIVER_EMAIL,
      subject: `New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    }).then(info => {
      console.log("✅ Email sent successfully:", info.data?.id);
    }).catch(mailErr => {
      console.error("❌ Email failed to send:", mailErr);
    });

  } catch (err) {
    console.error("Server Error:", err);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

// 4. Health Check / Status Route
app.get("/api/status", (req, res) => {
  res.json({ status: "Online", message: "Backend is running with Resend!" });
});

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));