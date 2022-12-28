import React from 'react';
import "./BookingForm.css";
import {Link} from "react-router-dom"

function BookingForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" />
      <br />
      <label htmlFor="cardNumber">Card Number:</label>
      <input type="number" id='cardNumber' name='cardNumber' />
      <Link to="/info"><button type='submit'>Submit</button></Link>
      </form>
      )
  }

  export default BookingForm;
