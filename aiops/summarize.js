const fs = require("fs");

const logs = fs.readFileSync("aiops/sample_logs.txt", "utf8");

let severity = "Low";
let rootCause = "No issues detected.";
let recommendation = "No action required.";
let preventive = "Continue monitoring.";
let incident = "Application Healthy";

if (logs.includes("500")) {
  incident = "HTTP 500 Error Spike";
  severity = "High";
  rootCause = "Multiple internal server errors detected.";
  recommendation = "Inspect application logs, restart the service if necessary, and investigate the failing endpoint.";
  preventive = "Add health checks, alerting, and automated monitoring for repeated 5xx errors.";
}

if (logs.includes("Health check failed")) {
  incident = "Service Health Degradation";
  severity = "Critical";
  rootCause = "Application failed health checks and became unavailable.";
  recommendation = "Restart the application immediately and investigate dependencies.";
  preventive = "Configure Kubernetes liveness/readiness probes and auto-remediation.";
}

const report = `
================ INCIDENT SUMMARY ================

Incident:
${incident}

Likely Root Cause:
${rootCause}

Severity:
${severity}

Recommended Action:
${recommendation}

Preventive Measure:
${preventive}

==================================================
`;

fs.writeFileSync("aiops/incident_summary.md", report);

console.log(report);
