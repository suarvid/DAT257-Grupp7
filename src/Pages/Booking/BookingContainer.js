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
      price : 100,
      week :14
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
      price : 100,
      week :14

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
      price : 100,
      week :14

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
      price : 100,
      week :14

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
      price : 100,
      week :14

    },
  ];
  return (
    <div>
      <h1>{props.data.title} {props.data.week}</h1>
      <h2>Nästa vecka ></h2>
      <BookingHeader></BookingHeader>

      {data.map((item) => (
        item.week === this.week ?
        <BookingComponent data={item} /> : <div>bajs</div>
      ))}
    </div>
  );
}

export default BookingContainer;
