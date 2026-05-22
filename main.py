from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import random

app = FastAPI()

# ===== CORS =====
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ===== MODEL =====
class Incident(BaseModel):
    incident: str

# ===== HOME =====
@app.get("/")
def home():
    return {
        "message": "Incident Intelligence OS Running"
    }

# ===== ANALYZE =====
@app.post("/analyze")
def analyze(data: Incident):

    return {

        "incident": data.incident,

        "risk": random.randint(85, 99),

        "severity": "Critical",

        "cascade": [
            "Traffic Spike",
            "API Gateway Overload",
            "Authentication Delays",
            "Database Exhaustion",
            "Retry Storm",
            "System Failure"
        ],

        "steps": [
            "Traffic spike detected",
            "API latency increased",
            "Authentication service delayed",
            "Database overloaded",
            "Retry storm amplified requests",
            "System degradation observed"
        ],

        "root_cause":
        "Database connection pool exhaustion triggered cascading failures.",

        "systems_affected": [
            "API Gateway",
            "Authentication Service",
            "Billing Service",
            "Database Cluster"
        ],

        "recommendations": [
            "Enable autoscaling",
            "Increase DB pool size",
            "Add circuit breakers",
            "Improve monitoring"
        ]
    }