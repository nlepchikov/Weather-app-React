import './Header.css';

export function Header() {
  return (
  <div className="header-container">
      <img src="../src/assets/images/logo.svg" alt="Weather App Logo" width="140px"  />
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
  )
}
