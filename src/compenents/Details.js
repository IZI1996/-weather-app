import React, { useState, useEffect } from 'react';

function Details() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('https://api.restful-api.dev/objects')
      .then((response) => { response.json()})
      .then((data) => {
        setData(data);
      })

  }, []);


  return (
    <div>
      <h1>Objects</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h2>{item.name}</h2>
   
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Details;