import React from "react";
import BookingContainer from "../../Pages/Booking/BookingContainer";
import '../../../src/globalstyles.css'

function Booking() {
    const data = {
        title : "Alla aktiviteter v. ",
        week : 14
    }
  return (
    <div align = 'center'>

      
      <BookingContainer data = {data}></BookingContainer>
    </div>
  );
}

export default Booking;
