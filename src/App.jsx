import "./App.scss";
import Header from "./components/header";
import Weather from "./components/pages/weather"

function App() {
  return (
    <div className="App">
      <main className="weather-container" role="main">
        <div className="search-weather shadow bg-night">
          <Header />
          <Weather />
        </div>
      </main>
    </div>
  );
}

export default App;
