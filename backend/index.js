import { config } from "dotenv";
import express, { json } from "express";
import { connect } from "mongoose";
import {
  assessmentsRouter,
  submissionsRouter,
  templateRouter,
} from "./routes/index.js";
import { errorHandler } from "./utils/errorHandler.js";
import cors from "cors";
import cron from "node-cron";
import { checkSubmissions } from "./cron/checkSubmissions.js";

config();

const app = express();

app.use(json());
app.use(cors());

// MongoDB connection
connect(process.env.MONGODB_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.use("/api/templates", templateRouter);
app.use("/api/assessments", assessmentsRouter);
app.use("/api/submissions", submissionsRouter);

app.use(errorHandler);

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Quizzy API is up." });
});

// CRON JOBs
cron.schedule("* * * * *", checkSubmissions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port http://localhost:${PORT}`),
);
