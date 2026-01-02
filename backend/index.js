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

index.use(cors({ origin: "http://localhost:5173" }));
index.use(express.json());

index.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { error } = await supabase
      .from("contacts")
      .insert([{ name, email, message }]);

    if (error) throw error;

    // 2. Set up the Emailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "asmaasma3528@gmail.com",
        pass: "qzlldseqwboskzgv",
      },
    });

    const mailOptions = {
      from: `"Portfolio contact" <asmaasma3528@gmail.com>`,
      to: "asmaasma3528@gmail.com",
      subject: `New Portfolio Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // 4. Send the Email
    await transporter.sendMail(mailOptions);

    res
      .status(200)
      .json({ success: true, message: "Message sent & Email received!" });
  } catch (err) {
    console.error("Error details:", err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

index.get("/api/status", async (req, res) => {
  try {
    const { data, error } = await supabase.from("projects").select("*");
    if (error) throw error;
    res.json({ message: "Success!! Database connected.", status: "Online" });
  } catch (err) {
    res.status(500).json({ message: "Connection failed.", error: err.message });
  }
});

const PORT = 5000;
index.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
