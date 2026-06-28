import request from "supertest";
import { describe, it, expect } from "vitest";

import app from "../src/app.js";

describe("GET /api/v1", () => {
  it("responds with a json message", () =>
    request(app)
      .get("/api/v1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, {
        message: "API - 👋🌎🌍🌏",
      }));
});

describe("GET /api/v1/emojis", () => {
  it("responds with a json message", () =>
    request(app)
      .get("/api/v1/emojis")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, ["😀", "😳", "🙄"]));
});

describe("GET /api/v1/health", () => {
  it("should return healthy status", () =>
    request(app)
      .get("/api/v1/health")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.status).toBe("healthy");
      }));
});

describe("POST /api/v1/process", () => {
  it("should process a job", () =>
    request(app)
      .post("/api/v1/process")
      .send({
        jobName: "daily-backup",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body.status).toBe("completed");
        expect(response.body.jobId).toBeDefined();
        expect(response.body.jobName).toBe("daily-backup");
      }));
});

