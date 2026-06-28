import express from "express";

import type MessageResponse from "../interfaces/message-response.js";

import emojis from "./emojis.js";

import health from "./health.js";

import processRoute from "./process.js";

import simulate from "./simulate.js"

import metrics from "./metrics.js";

const router = express.Router();

router.get<object, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/health", health);
router.use("/process", processRoute)
router.use("/simulate", simulate)
router.use("/metrics", metrics);
export default router;
