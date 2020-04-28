import React from "react";
import BookingHeader from "../../Pages/Booking/BookingHeader";
import "../../../src/globalstyles.css";
import BookingComponent from "./BookingComponent";
import "../Booking/Booking.css";

function BookingContainer(props) {
  const data = [
    {
      id: "1",
      date: new Date(),
      type: "Fotboll",
      location: "Åsaplatsen",
      instructor: "Åsa",
      capacity: 20,
      booked : 10,
      duration : 60,
      price : 100
    },
    {
      id: "2",
      date: new Date(),
      type: "Innebandy",
      location: "Åsaplatsen",
      instructor: "Ase",
      capacity: 20,
      booked : 21,
      duration : 60,
      price : 100

    },
    {
      id: "3",
      date: new Date(),
      type: "Yoga",
      location: "Asåplatsen",
      instructor: "Åsa",
      capacity: 20,
      booked : 5,
      duration : 60,
      price : 100

    },
    {
      id: "4",
      date: new Date(),
      type: "Fotboll",
      location: "Åsaplatsen",
      instructor: "Åsa",
      capacity: 20,
      booked : 1000,
      duration : 60,
      price : 100

    },
    {
      id: "5",
      date: new Date(),
      type: "Volleyboll",
      location: "Heden",
      instructor: "Arvid",
      capacity: 20,
      booked : 10,
      duration : 60,
      price : 100

    },
  ];
  return (
    <div>
      <h1>{props.data.title}</h1>
      <BookingHeader></BookingHeader>

      {data.map((item) => (
        <BookingComponent data={item} />
      ))}
    </div>
  );
}

export default BookingContainer;
