import { useState, useEffect } from "react";
import Display from "./Display";

function Details({ onDataFetched }) {
  const [loading, setLoading] = useState(true); // Track loading state
  const [data, setData] = useState(null); // Store the fetched data (use null initially)

  useEffect(() => {

    setLoading(true); // Set loading to true before fetching

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=1c8c73209e3b5cc4a0d9e68fd500a122`)
      .then(response => response.json()) // Parse response to JSON
      .then(res => {
        console.log(res)
        setData(res); 
        onDataFetched(res);// Set the fetched data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setData(null); // Reset data in case of error
      })
      .finally(() => {
        setLoading(false); // Set loading to false once fetching is done
      });
  }, []); // Empty dependency array to run once when the component mounts

  return (
    <div>
    </div>
  );
}

export default Details;
