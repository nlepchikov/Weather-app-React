import './SearchSection.css';

export function SearchSection() {
  return (
      <div className="search-container">
        <h1>How's the sky looking today?</h1>
        <form>
          <input type="search" placeholder="Search for a place..." />
          <button type="submit">Search</button>
        </form>
      </div>
  );
}
