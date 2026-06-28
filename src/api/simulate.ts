import express from "express";

const router = express.Router();

// Simulate an application error
router.get("/error", (req, res) => {

  console.error("[ERROR] Simulated application failure triggered");

  res.status(500).json({
    status: "error",
    message: "Simulated application failure",
    timestamp: new Date().toISOString(),
  });

});

// Simulate slow processing
router.get("/delay", async (req, res) => {

  console.warn("[WARNING] Simulating 5 second delay");

  await new Promise(resolve => setTimeout(resolve,5000));

  res.json({
      status:"success",
      message:"Response after simulated delay",
      delay:"5000ms",
      timestamp:new Date().toISOString()
  });

});

export default router;