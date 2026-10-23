import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();


import blogRoutes from './routes/blogRoutes.js';
import consultationRoutes from './routes/consultationRoutes.js';
import aiChatRoutes from './routes/aiChatRoutes.js';
import caseStudyRoutes from './routes/caseStudyRoutes.js';
import sitemapRoutes from './routes/sitemapRoutes.js';
import liveChatRoutes from './routes/liveChatRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import { startKnowledgeSchedule } from './services/aiKnowledgeService.js';
import { createPageMiddleware } from './middleware/frontendPages.js';
import { fileURLToPath } from 'node:url';









const app = express();

// const allowedOrigins = process.env.CORS_ORIGIN
//   ? process.env.CORS_ORIGIN.split(",").map(o => o.trim())
//   : ["*", "http://localhost:5174"
//     ,"https://apicourse.manovaidya.com", "https://course.manovaidya.com",
//     "https://admincourse.manovaidya.com", "https://www.course.manovaidya.com"
//   ];
// app.use(cors({ origin: allowedOrigins, credentials: true }));
// app.use(cors({ origin: (origin, cb) => !origin || allowedOrigins.includes(origin) ? cb(null, true) : cb(new Error("Not allowed by CORS")), credentials: true }));
app.use(cors({ origin: "*", credentials: true }));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGODB_URI)
  .then(() => { console.log("✅ MongoDB Connected"); startKnowledgeSchedule(); })
  .catch(err => console.error("❌ MongoDB Error:", err.message));

//use routes


app.use('/api', blogRoutes);
app.use('/api', consultationRoutes);
app.use('/api', aiChatRoutes);
app.use('/api', caseStudyRoutes);
app.use('/api', sitemapRoutes);
app.use('/api', liveChatRoutes);
app.use('/api', videoRoutes);
app.use('/', sitemapRoutes);











app.get("/api/health", (req, res) => res.json({ status: "OK", mongodb: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected" }));
app.use('/api', (req, res) => res.status(404).json({ success: false, message: 'API endpoint not found.' }));
app.use(createPageMiddleware({ distDir: process.env.FRONTEND_DIST || fileURLToPath(new URL('../frontend/dist/', import.meta.url)) }));

app.use((err, req, res, next) => {
  console.error('[http] request failed', { code: err.code || err.type || err.name });
  const status = err.type === 'entity.parse.failed' ? 400 : err.type === 'entity.too.large' ? 413 : 500;
  res.status(status).json({ success: false, message: status === 400 ? 'Invalid JSON request body.' : status === 413 ? 'Request body is too large.' : 'The service is temporarily unavailable. Please retry.' });
});

const PORT = process.env.PORT || 5012;
app.listen(PORT, () => console.log(`🚀 Backend running on http://localhost:${PORT}`));
