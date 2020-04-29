import React from "react";
import BookingContainer from "../../Pages/Booking/BookingContainer";
import '../../../src/globalstyles.css'

function Booking() {
    const data = {
        title : "Alla aktiviteter v. ",
        currentWeek : 14,
        displayWeek : 14
    }
  return (
    <div align = 'center'>

        <h1>Bokningssidan</h1>
        <p> lägga in sidor mm, men inte 100 att det ska heta booking längre, återkommer</p>
        <BookingContainer data = {data}>
        </BookingContainer>
    </div>
  );
}

export default Booking;
