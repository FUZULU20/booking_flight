import React from 'react';
import './FlightSearchForm.css';
import { Link } from 'react-router-dom'

function FlightSearchForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="departure">Departure Airport:</label>
      <input type="text" id="departure" name="departure" />
      <br />
      <label htmlFor="arrival">Arrival Airport:</label>
      <input type="text" id="arrival" name="arrival" />
      <br />
      <label htmlFor="departureDate">Departure Date:</label>
      <input type="date" id="departureDate" name="departureDate" />
      <br />
      <label htmlFor="returnDate">Return Date:</label>
      <input type="date" id="returnDate" name="returnDate" />
      <br />
      <label htmlFor="travelers">Number of Travelers:</label>
      <input type="number" id="travelers" name="travelers" min="1" />
      <br />
      <Link to="/flight"><button type="submit">Search</button></Link>
    </form>
  );
}

export default FlightSearchForm;