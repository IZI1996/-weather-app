import React from "react";

const Display = ({ data }) => {
  if (!data || !data.main) {
    return <p>No data available. Try searching for a valid city.</p>;
  }

  return (
    <div className="container">
      <h2>Weather Details</h2>
      <p><strong>City:</strong> {data.name}</p>
      <p><strong>Temperature:</strong> {data.main.temp}°C</p>
      <p><strong>Weather:</strong> {data.weather[0].description}</p>
    </div>
  );
};

export default Display;
