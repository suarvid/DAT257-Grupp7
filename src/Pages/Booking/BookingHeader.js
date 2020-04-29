import React from "react";
import "./Booking.css";
import "../Booking/Booking.css";

function BookingHeader(props) {
  return (
    <div className="header">
      <h2 className="header-headlines1">Dag</h2>
      <h2 className="header-headlines2">Tid</h2>
      <h2 className="header-headlines3">Typ</h2>
      <h2 className="header-headlines4">Lokal</h2>
      <h2 className="header-headlines5">Instruktör</h2>
    </div>
  );
}

export default BookingHeader;
