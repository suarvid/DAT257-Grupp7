import React from "react";
import BookingHeader from "../../Pages/Booking/BookingHeader";
import '../../../src/globalstyles.css'
import BookingComponent from "./BookingComponent";


function BookingContainer(props) {
  return (
    <div>
      <h1>{props.data.title}</h1>
      <BookingHeader></BookingHeader>
      <BookingComponent></BookingComponent>
    </div>
  )
}

export default BookingContainer;
