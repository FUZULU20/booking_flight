import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./FlightResults.css"

function FlightResults() {

 const [flight , setFlight] = useState([])

  useEffect((flight) => { 
    fetch('https://63aac7f4fdc006ba604bb38c.mockapi.io/flightresult')
      .then((response) => response.json())
      .then((data) => setFlight(data))
      .catch((err) => console.error(err));
  }, [])

  return (
    <ul>
      {flight.map((item) => (
        <li key={item.id}>
          <p>Departure: {item.departureTime}</p>
          <p>Arrival: {item.arrivalTime}</p>
          <p>Price: {item.price}</p>
          <p>Airline: {item.airlane}</p>
         <Link to="/booking"><button onClick={() => flight.onSelect(item)}>Select</button></Link>
        </li>
      ))}
    </ul>
  );
}

export default FlightResults;
