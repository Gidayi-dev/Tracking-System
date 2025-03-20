import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import pg from "pg";

dotenv.config();

// Log environment variables to debug
console.log("Environment variables:", {
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
});

const { Pool } = pg;

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Test database connection
pool.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
  } else {
    console.log("Database connected successfully");
  }
});

app.get("/", (req, res) => {
  res.send("Job Tracker API is running...");
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}....`);
});