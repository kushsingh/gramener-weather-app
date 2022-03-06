import { useState } from "react";

import WeatherDetails from '../weatherDetails/'

const SearchWeather = () => {
  const [city, setCity] = useState('');
  const [error, setError] = useState(false);
  const [responseObj, setResponseObj] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const uriEncodedCity = encodeURIComponent(city);

  const getWeatherForcast = (e) => {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});
    setIsLoading(true);

    // weather data fetch function will go here
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${uriEncodedCity}&appid=f18af886ac54b1dfa35b90bda23a89c1`, {
        "method": "GET",
    })
    .then(response => response.json())
    .then(response => {
        if (response.cod !== 200) {
            throw new Error()
        }
        setResponseObj(response)
    })
    .catch(err => {
        setError(true);
        setIsLoading(false);
        console.log(err.message)
    });
  };

  return (
    <>
      <form onSubmit={getWeatherForcast}>  
        <div className="form-floating mb-4">
          <input
            type="text"
            maxLength = "50"
            id="cityName"
            value = {city}
            className="form-control"
            placeholder="Enter City Name"
            autoComplete="off"
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="cityName">Enter City Name</label>
          <button className="search-btn" type="submit">
            <i className="bi bi-search"></i>  
          </button>
        </div>
      </form>
      <WeatherDetails responseObj={responseObj} error={error} loading={isLoading} />
    </>
  )
}

export default SearchWeather;