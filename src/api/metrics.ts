import { Router } from "express";
import client from "prom-client";

const router = Router();

// Collect default Node.js metrics
client.collectDefaultMetrics();

// Create a registry
const register = client.register;

router.get("/", async (_req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

export default router;
