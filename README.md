# AI_INCIDENT_MONITORING
AI-powered incident monitoring and analysis dashboard built with React, FastAPI, and Chart.js. The system detects cascading failures, analyzes infrastructure incidents, visualizes risk metrics, and provides intelligent recommendations through a modern enterprise-grade UI.


---

## Features

- AI-powered incident analysis
- Dynamic risk scoring
- Cascade flow visualization
- Real-time dashboard metrics
- Interactive analytics charts
- AI insights & recommendations
- Glassmorphism enterprise UI
- Responsive dashboard layout
- FastAPI backend integration
- Modern React frontend

---

## Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- JavaScript
- Chart.js
- Font Awesome

### Backend
- FastAPI
- Python
- Pydantic

---

## Project Structure

```bash
project-folder/
│
├── backend/
│   ├── __pycache__/
│   └── main.py
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   ├── style.css
│   └── README.md
```

---

## Functionalities

- Analyze infrastructure incidents
- Detect cascading service failures
- Generate AI-based recommendations
- Display severity and risk scores
- Monitor affected services
- Visualize incident trends
- Display AI insights dynamically
- Simulate enterprise incident workflows

---

## Sample Incident

```text
Critical outage occurred after a sudden traffic spike overloaded the API Gateway and exhausted database connections causing cascading failures across billing and authentication services.
```

---

## Run Backend

Open terminal inside backend folder:

```bash
uvicorn main:app --reload
```

Backend runs on:

```text
http://127.0.0.1:8000
```

---

## Run Frontend

Open:

```text
frontend/index.html
```

using Live Server in VS Code.

---

## API Endpoint

### Analyze Incident

```http
POST /analyze
```

### Request Body

```json
{
  "incident": "Critical API outage caused by database overload"
}
```

### Response

```json
{
  "risk": 96,
  "severity": "Critical",
  "cascade": [
    "Traffic Spike",
    "API Gateway Overload",
    "Database Exhaustion"
  ]
}
```

---

## Future Improvements

- Real AI/LLM integration
- Database integration
- Authentication system
- Real-time monitoring
- WebSocket live logs
- Docker deployment
- Kubernetes monitoring
- Advanced analytics dashboard

---

## Author

Developed as an AI Operations & Incident Intelligence Dashboard project using React and FastAPI.
