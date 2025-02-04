import React, { useState } from "react";
import Details from "./Details";
import Display from "./Display";

function Main() {
  const [inputValue, setInputValue] = useState(""); // Holds user input
  const [searchCity, setSearchCity] = useState(""); // Holds searched city name
  const [data, setData] = useState(null); // Holds fetched weather data

  // Function to update `searchCity` and trigger a new API call
  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchCity(inputValue);
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input 
        type="text" 
        value={inputValue} 
        onChange={(e) => setInputValue(e.target.value)} 
        placeholder="Enter city name"
      />
      <button onClick={handleSearch}>Search</button>

      {/* Fetch data when `searchCity` updates */}
      {searchCity && <Details receivedValue={searchCity} onDataFetched={setData} />}

      {/* Display the weather data */}
      <Display data={data} />
    </div>
  );
}

export default Main;
