import React from 'react';

const Display = ({ data }) => {
  if (!data) {
    return <p>No data available.</p>; // Show this if data is null or empty
  }

  return (
    <div className="container">
      {/* Assuming data is an object returned from the weather API */}
      <p>City: {data.name}</p>
      <p>Temperature: {data.main.temp}°C</p>
      {/* Render more weather information here */}
    </div>
  );
};

export default Display;

