import React, { useState } from 'react';
import Details from './Details'; // Child component for fetching data
import Display from './Display'; // Child component to display the data

function Main() {
  const [data, setData] = useState(null); // Store data fetched from Details

  // Function to set data from Details component
  const handleData = (data) => {
    setData(data); // Set the fetched data from Details
  };

  return (
    <div>
      <h1>Main Page (Parent)</h1>
      <Details onDataFetched={handleData} /> {/* Pass the function to Details */}
      {data ? <Display data={data} /> : <p>No data available.</p>} {/* Conditionally display data */}
    </div>
  );
}

export default Main;
