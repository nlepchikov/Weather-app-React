import {useState} from 'react';
import {fetchObservation, type Observation} from '../weather.ts';
import './SearchSection.css';

export function SearchSection() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<Observation | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      setData(await fetchObservation(query));
    } catch (err) {
      setError((err instanceof Error) ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }
  
  return (
    
      <div className="search-container">
        <h1>How's the sky looking today?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Search for a place..." value={query} onChange={(e) => setQuery(e.target.value)} />
          <button type="submit" disabled={loading}>Search</button>
        </form>
        
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <section>
          <p>Temperature: {data.tempC}°C / {data.tempF}°F</p>
          <p>Humidity: {data.humidity}%</p>
          <p>Weather: {data.weather}</p>
          <p>Wind Speed: {data.windSpeedKPH} KPH</p>
          <p>Precipitation: {data.precipMM} mm</p>  
        </section>
      )}
      </div>
  );
}
