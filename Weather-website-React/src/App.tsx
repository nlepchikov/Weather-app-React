import "./App.css";
import { Header } from "./components/Header/Header.tsx";
import { SearchSection } from "./components/SearchSection/SearchSection.tsx";

function App() {

  return (
    <>
    <Header />
    <SearchSection />

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
