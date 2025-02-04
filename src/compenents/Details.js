import { useState, useEffect } from "react";

function Details({ onDataFetched, receivedValue }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!receivedValue) return;

    setLoading(true);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${receivedValue}&appid=1c8c73209e3b5cc4a0d9e68fd500a122`)
      .then((response) => response.json())
      .then((res) => {
        if (res.cod === 200) {
          onDataFetched(res); // Send fetched data to parent
        } else {
          onDataFetched(null); // Reset data if API call fails
        }
      })
      .catch(() => {
        onDataFetched(null); // Handle fetch error
      })
      .finally(() => {
        setLoading(false);
      });
  }, [receivedValue]);

  return <div>{loading && <p>Loading...</p>}</div>;
}

export default Details;
