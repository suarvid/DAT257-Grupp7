import React from "react";
import BookingHeader from "./BookingHeader";
import "../../../src/globalstyles.css";
import BookingComponent from "./BookingComponent";
import "../Booking/Booking.css";
import axios from "axios";

export default class BookingContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: []
    }
    this.sortData = this.sortData.bind(this);
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
      <div align="center" className ="component-container">
        {this.state.classes.map((item) =>
          <BookingComponent data={item} />
        )}
      </div>
    );
  }
}
