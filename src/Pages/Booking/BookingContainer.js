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
    this.sortData = this.sortData.bind(this);
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
    let data;
    console.log('Component mounted');
    axios.get('http://127.0.0.1:8000/api/classes/')
      .then(response => {
        data = response.data;
        this.setState({
          classes: this.sortData(data),
        })
      }).catch(error => {
        console.log(error);
      });
  }

  sortData(data) {
   return data.sort((a, b) => a.date > b.date);
  }


  render() {

    return (
      <div align="center">
        {this.state.classes.map((item) =>
          <BookingComponent data={item} />
        )}
      </div>
    );
  }
}

