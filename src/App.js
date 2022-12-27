import BookingForm from "./BookingForm";
import FlightResults from "./FlightResults";
import FlightSearchForm from "./FlightSearchForm";
import React from "react";
import { Route, Routes } from "react-router-dom"
function App() {




  
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FlightSearchForm />} />
        <Route path="/flight" element={<FlightResults />} />
        <Route path="/booking" element={<BookingForm />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
