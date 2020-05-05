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
      title: props.data.title,
      currentWeek: props.data.currentWeek,
      displayWeek: props.data.displayWeek,
      classes: []
    }
    this.decrementWeek = this.decrementWeek.bind(this);
    this.incrementWeek = this.incrementWeek.bind(this);
  }

  decrementWeek() {
    this.setState((state) => ({
      displayWeek: state.displayWeek - 1,
    }));
  }

  incrementWeek() {
    this.setState((state) => ({
      displayWeek: state.displayWeek + 1,
    }));
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
    let weekText;
    this.state.currentWeek < this.state.displayWeek
      ? (weekText = "Föregående vecka")
      : (weekText = "Nästa vecka");
    console.log(this.state);
    return (
      <div text-align="center">
        <h1>
          {this.state.title} {this.state.displayWeek}
        </h1>
        {this.state.currentWeek < this.state.displayWeek ? (
          <h2 onClick={this.decrementWeek} style={{ display: "inline-block" }}>
            {" "}
            {"<"}{" "}
          </h2>
        ) : (
            <div />
          )}
        <h2 style={{ display: "inline-block" }}>{weekText}</h2>
        {this.state.currentWeek < this.state.displayWeek ? (
          <div />
        ) : (
            <h2 onClick={this.incrementWeek} style={{ display: "inline-block" }}>
              {">"}{" "}
            </h2>
          )}
        <BookingHeader></BookingHeader>

        {this.state.classes.map((item) =>
          <BookingComponent data={item} />
        )}
      </div>
    );
  }
}

