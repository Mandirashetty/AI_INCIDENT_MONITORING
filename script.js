const { useEffect, useState } = React;

function App() {

  const [incident, setIncident] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  useEffect(() => {

    const ctx = document.getElementById("incidentChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        datasets: [{
          label: "Incidents",
          data: [3, 7, 4, 9, 6, 12],
          borderWidth: 0,
          borderRadius: 14,
          backgroundColor: [
            "#22D3EE",
            "#22D3EE",
            "#22D3EE",
            "#22D3EE",
            "#22D3EE",
            "#22D3EE"
          ]
        }]
      },
      options: {
        plugins: {
          legend: {
            labels: {
              color: "white"
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: "#94A3B8"
            }
          },
          y: {
            ticks: {
              color: "#94A3B8"
            }
          }
        }
      }
    });

  }, []);

  const analyzeIncident = async () => {

    if (!incident) {
      alert("Please enter incident");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch(
        "http://127.0.0.1:8000/analyze",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            incident: incident
          })
        }
      );

      const data = await response.json();

      console.log(data);

      setResult(data);

    } catch (error) {

      console.log(error);

      alert("Backend connection failed");

    }

    setLoading(false);
  };

  return (

    <div className="dashboard">

      {/* ===== TOPBAR ===== */}

      <div className="topbar">

        <div className="logo">
          Incident Intelligence OS
        </div>

        <div className="top-actions">

          <i className="fa-solid fa-bell"></i>

          <i className="fa-solid fa-gear"></i>

          <div className="profile"></div>

        </div>

      </div>

      {/* ===== SIDEBAR ===== */}

      <div className="sidebar">

        <h2>Navigation</h2>

        <div className="menu-item active">
          <i className="fa-solid fa-chart-line"></i>
          Dashboard
        </div>

        <div className="menu-item">
          <i className="fa-solid fa-triangle-exclamation"></i>
          Incidents
        </div>

        <div className="menu-item">
          <i className="fa-solid fa-brain"></i>
          AI Analysis
        </div>

      </div>

      {/* ===== MAIN ===== */}

      <div className="main">

        <h1 className="section-title">
          AI Incident Monitoring Dashboard
        </h1>

        {/* ===== METRICS ===== */}

        <div className="metrics">

          <div className="metric-card">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h2>{result ? result.risk : "--"}</h2>
            <p>Risk Score</p>
          </div>

          <div className="metric-card">
            <i className="fa-solid fa-shield-halved"></i>
            <h2>{result ? result.severity : "--"}</h2>
            <p>Severity</p>
          </div>

          <div className="metric-card">
            <i className="fa-solid fa-server"></i>
            <h2>{result ? result.systems_affected.length : "--"}</h2>
            <p>Systems Impacted</p>
          </div>

          <div className="metric-card">
            <i className="fa-solid fa-brain"></i>
            <h2>98%</h2>
            <p>AI Confidence</p>
          </div>

        </div>

        {/* ===== ANALYZE ===== */}

        <div className="card">

          <h2>Analyze Incident</h2>

          <textarea
          placeholder="Enter incident..."
          value={incident}
          onChange={(e)=>setIncident(e.target.value)}
          />

          <button
          className="analyze-btn"
          onClick={analyzeIncident}
          >

            {
              loading
              ?
              "Analyzing..."
              :
              "Analyze Incident"
            }

          </button>

        </div>

        {/* ===== PIPELINE ===== */}

        <div className="card">

          <h2>Incident Cascade Flow</h2>

          <div className="pipeline">

            {
              result
              ?
              result.cascade.map((item,index)=>(

                <div className="step" key={index}>
                  {item}
                </div>

              ))
              :
              <div className="step">
                Awaiting Analysis...
              </div>
            }

          </div>

        </div>

        {/* ===== CHART ===== */}

        <div className="card">

          <h2>Incident Trends</h2>

          <canvas id="incidentChart"></canvas>

        </div>

      </div>

      {/* ===== RIGHT PANEL ===== */}

      <div className="right-panel">

        <div className="ai-box">

          <h2>AI Insights</h2>

          <p
          style={{
            marginTop:"15px",
            color:"#94A3B8",
            lineHeight:"1.7"
          }}
          >

            {
              result
              ?
              result.root_cause
              :
              "AI waiting for analysis..."
            }

          </p>

          <span className="badge">

            {
              result
              ?
              result.severity
              :
              "Monitoring"
            }

          </span>

        </div>

        <div className="ai-box">

          <h2>Recommendations</h2>

          {
            result
            ?
            result.recommendations.map((item,index)=>(

              <p
              key={index}
              style={{
                marginTop:"12px",
                color:"#94A3B8"
              }}
              >
                • {item}
              </p>

            ))
            :
            <p style={{marginTop:"12px"}}>
              Waiting for recommendations...
            </p>
          }

        </div>

      </div>

    </div>
  );
}

ReactDOM
.createRoot(document.getElementById("root"))
.render(<App />);