import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    service: "operations-processing-api",
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

export default router;