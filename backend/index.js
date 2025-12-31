import express from "express";
import cors from "cors";
import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

const index = express();

// Combined CORS into one block for simplicity
index.use(cors({
  origin: "http://localhost:5173",
}));
index.use(express.json());

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

const PORT = 5000; 

index.get("/", (req, res) => {
  res.send("This is my hubby's portfolio");
});

index.get("/api/status", async (req, res) => {
  try {
    const { data, error } = await supabase.from("projects").select("*");

    if (error) {
      console.error("Supabase Error:", error.message);
      return res.status(200).json({
        message: "Connected to Supabase, but there is a table issue.",
        error: error.message,
        status: "Table Error",
      });
    }

    res.json({
      message: "Success!! Database connected.",
      db_count: data ? data.length : 0,
      status: "Online",
    });
  } catch (err) {
    res.status(500).json({
      message: "Backend is UP but the database connection crashed.",
      error: err.message,
    });
  }
});

index.listen(PORT, () => {
  console.log(`🚀 The app is listening on the port ${PORT}`);
});