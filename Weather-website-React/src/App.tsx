import './App.css'

function App() {

  return (
    <>
    <div className="logo">
      <img src="../public/assets/images/logo.svg" alt="Weather App Logo" />
      <details>
        <summary>Units</summary>
        <ul>
          <li>Switch to Imperial/Metric</li>
          <li>Temperature: Celsius (°C) / Fahrenheit (°F)</li>
          <li>Wind Speed: km/h / mph</li>
          <li>Precipitation: Millimeters (mm) / Inches (in)</li>
        </ul>
      </details>
    </div>

    <h1>How's the sky looking today?</h1>
    
    <form>
      <input type="search" placeholder="Search for a place..." />
      <button type="submit">Search</button>
    </form>

    <section className="weather-grid">
    </section>

    <section className="weather-list-section">
    </section>
    <section className="bottom-weather-section">
    </section>
     </>
  )
}

export default App
