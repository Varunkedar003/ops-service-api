import express from "express";

const router = express.Router();

router.post("/", (req, res) => {
  const { jobName } = req.body;

  console.log(`[INFO] Received job: ${jobName}`);

  const processingTimeMs = Math.floor(Math.random() * 200) + 100;

  const jobId = `job-${Date.now()}`;

  console.log(`[INFO] Processing Job ID: ${jobId}`);

  console.log(`[INFO] Job completed successfully`);

  res.status(200).json({
    jobId,
    jobName: jobName || "default-job",
    status: "completed",
    processingTimeMs,
    timestamp: new Date().toISOString(),
  });
});

export default router;