const BASE_URL = 'https://data/api/xweather.com'

export type Observation = { 
  tempC: number;
  tempF: number;
  humidity: number;
  weather: string;
  windSpeedKPH: number;
  precipMM: number;
}

type ObservationsResponse = {
  success: boolean;
  error: {code: string, description: string} | null;
  response: {ob: Observation};
}

export async function fetchObservation(
  place: string,
  signal?: AbortSignal
): Promise<Observation> {

  const params = new URLSearchParams({
    client_id: import.meta.env.VITE_XWEATHER_ID,
    client_secret: import.meta.env.VITE_XWEATHER_CLIENT_SECRET,
    place: place
  });

  const res = await fetch(`${BASE_URL}/ovservations/${encodeURIComponent(place)}?${params}`,
    { signal }
  );

  if(!res.ok) throw new Error(`FAILED TO FETCH OBSERVATION: ${res.status} ${res.statusText}`);

  const json: ObservationsResponse = await res.json();

  if(!json.success) {
    throw new Error(json.error?.description && 'FAILED TO FETCH OBSERVATION');
  }

  return json.response.ob;

}