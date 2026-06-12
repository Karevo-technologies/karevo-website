import express from "express";
import cors from "cors";
import Database from "better-sqlite3";


import { z } from "zod";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

// Ensure data directory exists
const dataDir = path.join(__dirname, "data");
if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

const dbPath =
  process.env.SQLITE_PATH || path.join(dataDir, "karevo_waitlist.sqlite");
const db = new Database(dbPath);

// Schema
db.exec(`
  CREATE TABLE IF NOT EXISTS waitlist_entries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    role TEXT NOT NULL,
    name TEXT,
    email TEXT,
    hospitalName TEXT,
    location TEXT,
    organizationEmail TEXT,
    createdAt TEXT NOT NULL
  );

  -- Avoid duplicates for user waitlist by email
  CREATE UNIQUE INDEX IF NOT EXISTS uq_waitlist_user_email
    ON waitlist_entries(email)
    WHERE role = 'user' AND email IS NOT NULL;

  -- Avoid duplicates for hospital waitlist by organizationEmail
  CREATE UNIQUE INDEX IF NOT EXISTS uq_waitlist_hospital_org_email
    ON waitlist_entries(organizationEmail)
    WHERE role = 'hospital' AND organizationEmail IS NOT NULL;
`);

const app = express();
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  }),
);
app.use(express.json({ limit: "200kb" }));

const WaitlistSchema = z
  .object({
    role: z.enum(["user", "hospital"]),
    name: z.string().min(1).optional(),
    email: z.string().email().optional(),
    hospitalName: z.string().min(1).optional(),
    location: z.string().min(1).optional(),
    organizationEmail: z.string().email().optional(),
  })
  .superRefine((val, ctx) => {
    if (val.role === "user") {
      if (!val.name)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "name is required for user",
          path: ["name"],
        });
      if (!val.email)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "email is required for user",
          path: ["email"],
        });
    }
    if (val.role === "hospital") {
      if (!val.hospitalName)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "hospitalName is required for hospital",
          path: ["hospitalName"],
        });
      if (!val.location)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "location is required for hospital",
          path: ["location"],
        });
      if (!val.organizationEmail)
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "organizationEmail is required for hospital",
          path: ["organizationEmail"],
        });
    }
  });

app.get("/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/waitlist", (req, res) => {
  const parsed = WaitlistSchema.safeParse(req.body);
  if (!parsed.success) {
    return res
      .status(400)
      .json({
        ok: false,
        error: "Validation failed",
        details: parsed.error.flatten(),
      });
  }

  const { role } = parsed.data;
  const payload = {
    role,
    name: role === "user" ? parsed.data.name : null,
    email: role === "user" ? parsed.data.email : null,
    hospitalName: role === "hospital" ? parsed.data.hospitalName : null,
    location: role === "hospital" ? parsed.data.location : null,
    organizationEmail:
      role === "hospital" ? parsed.data.organizationEmail : null,
    createdAt: new Date().toISOString(),
  };

  try {
    const stmt = db.prepare(
      `INSERT INTO waitlist_entries
        (role, name, email, hospitalName, location, organizationEmail, createdAt)
       VALUES
        (@role, @name, @email, @hospitalName, @location, @organizationEmail, @createdAt)`,
    );

    const info = stmt.run(payload);
    return res.status(201).json({ ok: true, id: info.lastInsertRowid });
  } catch (err) {
    const msg = String(err && err.message ? err.message : err);
    if (msg.includes("UNIQUE")) {
      return res
        .status(409)
        .json({ ok: false, error: "Already joined (duplicate)" });
    }

    console.error("DB error:", err);
    return res.status(500).json({ ok: false, error: "Server error" });
  }
});

app.use((req, res) => {
  res.status(404).json({ ok: false, error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Karevo backend listening on http://localhost:${PORT}`);
});
