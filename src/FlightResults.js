import React from 'react';
import { useEffect } from 'react'

function FlightResults() {

  let props;

  useEffect(() => { 
    fetch('https://63aac7f4fdc006ba604bb38c.mockapi.io/flightresult')
      .then(response => response.json())
      .then((response) => {
        // props = response;
        console.log(response)
      })
      .catch(err => console.error(err));
  }, [])

  return (
    <ul>
      {props.flightresult.map((item) => (
        <li key={item.id}>
          <p>Departure: {item.departureTime}</p>
          <p>Arrival: {item.arrivalTime}</p>
          <p>Price: {item.price}</p>
          <p>Airline: {item.airline}</p>
          <button onClick={() => props.onSelect(item)}>Select</button>
        </li>
      ))}
    </ul>
  );
}

export default FlightResults;
