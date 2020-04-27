import React from "react";
import "./Booking.css";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";

function BookingHeader(props) {
  return (
    <div className="header">
      <h3 className="header-headlines">Dag</h3>
      <h3 className="header-headlines">Tid</h3>
      <h3 className="header-headlines">Typ</h3>
      <h3 className="header-headlines">Lokal</h3>
      <h3 className="header-headlines">Instruktör</h3>
    </div>
  );
}

export default BookingHeader;
