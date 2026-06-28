# Root Cause Analysis (RCA)

## Incident Summary

The Ops Service became unavailable due to repeated HTTP 500 errors and failed health checks. Prometheus detected the issue and triggered the `OpsServiceDown` alert.

---

## Detection

- Monitoring Tool: Prometheus
- Dashboard: Grafana
- Alert: OpsServiceDown
- Detection Method: Health check and service availability monitoring

---

## Impact

- API endpoints became unavailable.
- Clients received HTTP 500 responses.
- Health endpoint reported the service as unhealthy.

---

## Root Cause

The incident was caused by an application failure that resulted in repeated internal server errors, leading to failed health checks and service unavailability.

---

## Resolution

- Restarted the application container.
- Verified `/api/v1/health` returned HTTP 200.
- Confirmed Prometheus target status changed to **UP**.
- Verified Grafana metrics were updating normally.

---

## Preventive Actions

- Configure automated alerts for service downtime.
- Add Kubernetes liveness and readiness probes.
- Perform regular load testing.
- Use CI/CD pipelines to validate builds before deployment.
- Enhance AIOps incident summarization for faster troubleshooting.

---

## Lessons Learned

- Continuous monitoring enables faster incident detection.
- Health checks are essential for service reliability.
- Automated alerting reduces Mean Time To Detect (MTTD).
- Structured incident summaries simplify troubleshooting and post-incident analysis.
