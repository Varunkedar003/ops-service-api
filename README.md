# Ops Service API - DevOps & AIOps Project

## Project Overview

Ops Service API is a Node.js and TypeScript based REST API developed to demonstrate modern DevOps and AIOps practices. The project includes containerization, CI/CD, monitoring, alerting, Kubernetes deployment manifests, and an AI-assisted incident analysis workflow.

---

# Features

* RESTful API using Express.js
* Health monitoring endpoint
* Process simulation endpoint
* Metrics endpoint using Prometheus
* Dockerized application
* Docker Compose orchestration
* GitHub Actions CI/CD pipeline
* Kubernetes deployment manifests
* Prometheus monitoring
* Grafana dashboards
* Prometheus alert rules
* AI-assisted incident summary generation
* Load testing script
* Root Cause Analysis (RCA) template

---

# Technology Stack

| Category         | Technology                                             |
| ---------------- | ------------------------------------------------------ |
| Backend          | Node.js, Express.js, TypeScript                        |
| Containerization | Docker, Docker Compose                                 |
| CI/CD            | GitHub Actions                                         |
| Orchestration    | Kubernetes (Deployment, Service, ConfigMap, Namespace) |
| Monitoring       | Prometheus                                             |
| Visualization    | Grafana                                                |
| AIOps            | Incident Summary Generator(LLM)                             |
| Testing          | Curl, Load Test Script                                 |

---

# Project Structure

```text
express-api-starter-ts/
├── .github/
│   └── workflows/
├── aiops/
├── grafana/
├── k8s/
├── scripts/
├── src/
├── templates/
├── test/
├── Dockerfile
├── docker-compose.yml
├── prometheus.yml
├── alert_rules.yml
└── README.md
```

---

# Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions (CI/CD)
    │
    ▼
Docker Image
    │
    ▼
Docker Compose / Kubernetes
    │
    ▼
Ops Service API
    │
    ├──────────────┐
    ▼              ▼
Prometheus      Health Endpoint
    │
    ▼
Grafana Dashboard
    │
    ▼
Alert Rules
    │
    ▼
AIOps Incident Summary
```

---

# API Endpoints

| Endpoint           | Method | Description           |
| ------------------ | ------ | --------------------- |
| `/api/v1/health`   | GET    | Service health status |
| `/api/v1/process`  | POST   | Process simulation    |
| `/api/v1/simulate` | POST   | Failure simulation    |
| `/api/v1/metrics`  | GET    | Prometheus metrics    |

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

---

# Docker

Build the image:

```bash
docker build -t ops-service:v1 .
```

Run the container:

```bash
docker run -d -p 3000:3000 --name ops-service-container ops-service:v1
```

---

# Docker Compose

```bash
docker compose up -d
```

This starts:

* Ops Service
* Prometheus
* Grafana

---

# CI/CD Pipeline

The GitHub Actions workflow performs:

* Source checkout
* Dependency installation
* Application build
* Unit tests
* Docker image build
* Simulated deployment

---

# Kubernetes

The project includes Kubernetes manifests for:

* Namespace
* ConfigMap
* Deployment
* Service

These manifests provide environment configuration, resource limits, and scalable deployment.

---

# Monitoring & Alerting

Monitoring is implemented using Prometheus and Grafana.

Metrics include:

* CPU Usage
* Resident Memory Usage
* Virtual Memory Usage
* Event Loop Lag

Alert Rule:

* OpsServiceDown

---

# AIOps Component

The project includes an AI-assisted incident summary workflow.

Input:

* Application logs
* Health information

Output:

* Incident Summary
* Root Cause
* Severity
* Recommended Action
* Preventive Measures

---

# Optional Enhancements

* Grafana dashboard export
* Load testing script
* Root Cause Analysis document

---

# Screenshots

The repository includes screenshots demonstrating:

* Docker containers
* GitHub Actions pipeline
* API health endpoint
* Prometheus targets
* Grafana dashboard
* Alert rules
* Load Tests
* AIOps incident summary
  
---

# Future Improvements

* Deploy to a managed Kubernetes cluster
* Integrate Docker Hub image publishing
* Add Helm charts
* Integrate OpenTelemetry
* Send alerts to Slack or Email
* Integrate a production LLM for intelligent incident analysis

---

# Conclusion

This project demonstrates a complete DevOps workflow from application development through deployment, monitoring, alerting, and AI-assisted operations. It showcases containerization, CI/CD, observability, Kubernetes readiness, and practical AIOps concepts in a single end-to-end implementation.
