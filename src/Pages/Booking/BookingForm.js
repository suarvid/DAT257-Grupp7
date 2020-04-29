import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css"
import TextInput from "./FormComponents/TextInput";
import PaymentInput from "./FormComponents/PaymentInput";
import { withRouter } from 'react-router-dom'
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {},
      activity: {},
      instructor: {},
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  //Required to resend all data even though only one field has changed, results in bad gateway otherwise
  onSubmit(event) {
    console.log('Form submitted!');
    axios.put(`http://localhost:8000/api/classes/${this.props.location.containerData.classID}/`, {
      id: this.props.location.classID,
      activity: this.props.location.containerData.activityID,
      description: this.props.location.containerData.description,
      instructor: this.props.location.containerData.instructor,
      date: this.props.location.containerData.date,
      start_time: this.props.location.containerData.start_time,
      end_time: this.props.location.containerData.end_time,
      location: this.props.location.containerData.location,
      max_attendees: this.props.location.containerData.max_attendees,
      registered_attendees: (this.props.location.containerData.registered_attendees + 1),
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
    axios.post('http://localhost:8000/api/bookings/', {
      Name: this.state.name,
      Email: this.state.email,
      phone_number: this.state.phone,
      classID: this.props.location.containerData.classID,
    })
  }



  //Data vi vill ha i formen:
  //Namn, mail, telefon, betalsätt verkar det som
  render() {
    return (
      <div align='center'>
        <h1>{this.state.name}</h1>
    <h1>{this.state.email}</h1>
    <h1>{this.state.phone}</h1>
    <h1>{this.props.location.containerData.classID}</h1>
        <div>
          <h1>{`${this.props.location.activityName}, ${this.props.location.containerData.location}`}</h1>
        </div>
        <div>
          <h3>
            {`${this.props.location.containerData.date},${this.props.location.containerData.start_time.substring(0, 5)}-${this.props.location.containerData.end_time.substring(0, 5)}`}
          </h3>
        </div>
        <p>{`${"Instruktör:"} ${this.props.location.instructorName}`}</p>
        <div className="formContainer" align="left">
          <form>
            <div className="formField">
              <TextInput
                label="Namn:"
                type="text"
                name="name"
                value={this.state.name}
                placeholder="Namn"
                handleChange={this.handleChange}
              />
              <br />
              <TextInput
                label='Email'
                type="email"
                name="email"
                value={this.state.email}
                placeholder="Mailadress"
                handleChange={this.handleChange}
              />
              <br />
              <TextInput
                label="Telefon:"
                type="value"
                name="phone"
                value={this.state.phone}
                placeholder="Telefonnummer"
                handleChange={this.handleChange}
              />
            </div>
            <PaymentInput
              label="Betalsätt:"
              name="payment"
              value={this.state.payment}
            />
          </form>
        </div>
        <button className="primary_button_large" onClick={this.onSubmit}>Godkänn</button>
      </div>

    );
  }
}

export default BookingForm;
