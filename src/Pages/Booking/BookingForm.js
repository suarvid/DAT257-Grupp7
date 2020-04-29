import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css"
import TextInput from "./FormComponents/TextInput";
import PaymentInput from "./FormComponents/PaymentInput";
import { withRouter } from 'react-router-dom'


class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {},
      activity: {},
      instructor: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {

  }

  //Data vi vill ha i formen:
  //Namn, mail, telefon, betalsätt verkar det som
  render() {
    return (
      <div align="center">
        <h1>{this.props.location.testValue}</h1>
        <h1>{this.props.location.activityName}</h1>
        <h1>{this.props.location.instructorName}</h1>
        <h1>{this.props.location.containerData.location}</h1>
        <h1>{this.props.location.containerData.start_time.substring(0, 5)}</h1>
        <h1>{this.props.location.containerData.end_time.substring(0, 5)}</h1>
        <h1>{this.props.location.containerData.date}</h1>
        <button className="primary_button_large">Godkänn</button>
      </div>

    );
  }
}

export default BookingForm;
