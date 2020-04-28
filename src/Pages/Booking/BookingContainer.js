import React from "react";
import BookingHeader from "../../Pages/Booking/BookingHeader";
import "../../../src/globalstyles.css";
import BookingComponent from "./BookingComponent";
import "../Booking/Booking.css";
import axios from 'axios';

export default class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      data: [
        {
          id: "1",
          date: new Date(),
          type: "Fotboll",
          location: "Åsaplatsen",
          instructor: "Åsa",
          capacity: 20,
          booked: 10,
          duration: 60,
          price: 100
        },
        {
          id: "2",
          date: new Date(),
          type: "Innebandy",
          location: "Åsaplatsen",
          instructor: "Ase",
          capacity: 20,
          booked: 21,
          duration: 60,
          price: 100

        },
        {
          id: "3",
          date: new Date(),
          type: "Yoga",
          location: "Asåplatsen",
          instructor: "Åsa",
          capacity: 20,
          booked: 5,
          duration: 60,
          price: 100

        },
        {
          id: "4",
          date: new Date(),
          type: "Fotboll",
          location: "Åsaplatsen",
          instructor: "Åsa",
          capacity: 20,
          booked: 1000,
          duration: 60,
          price: 100

        },
        {
          id: "5",
          date: new Date(),
          type: "Volleyboll",
          location: "Heden",
          instructor: "Arvid",
          capacity: 20,
          booked: 10,
          duration: 60,
          price: 100
        },
      ],
    }
  }

  componentDidMount() {
    console.log('Component mounted');
    axios.get('http://127.0.0.1:8000/api/classes/')
      .then(response => {
        this.state.classes = response.data;
        this.setState({
          classes: response.data,
        })
      }).catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Bokningar</h1>
        <BookingHeader></BookingHeader>

        {this.state.classes.map((item) => (
          <BookingComponent data={item} />
        ))}
      </div>
    );
  }
}

