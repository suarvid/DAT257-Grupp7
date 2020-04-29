import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css";
import TextInput from "./FormComponents/TextInput";
import RadioButton from "./FormComponents/RadioButton";
import { withRouter, Link, Route } from 'react-router-dom'
import { Form, Input, InputNumber, Button } from 'antd';
import axios from 'axios';

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {},
      activity: {},
      instructor: {},
      firstName: "",
      mail: "",
      phone: "",
      payment: "swish",
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getPayment = this.getPayment.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState(() => ({
      [name]: value,
    }));
  }

  componentDidMount() {
    const data = this.props.location.state;
    this.setState({
      booking: data,
    });
  }

  getPayment() {
    return this.state.payment;
  }

  //Required to resend all data even though only one field has changed, results in bad gateway otherwise
  onSubmit(event) {
    console.log("Form submitted!");
    console.log(this.state.firstName)
    console.log(this.state.mail)
    console.log(this.state.phone)
    console.log(this.props.location.containerData.classID)
    axios
      .put(
        `http://localhost:8000/api/classes/${this.props.location.containerData.classID}/`,
        {
          id: this.props.location.classID,
          activity: this.props.location.containerData.activityID,
          description: this.props.location.containerData.description,
          instructor: this.props.location.containerData.instructor,
          date: this.props.location.containerData.date,
          start_time: this.props.location.containerData.start_time,
          end_time: this.props.location.containerData.end_time,
          location: this.props.location.containerData.location,
          max_attendees: this.props.location.containerData.max_attendees,
          registered_attendees:
            this.props.location.containerData.registered_attendees + 1,
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    axios.post('http://localhost:8000/api/bookings/', {
      name: this.state.firstName,
      email: this.state.mail,
      phone_number: this.state.phone,
      classID: this.props.location.containerData.classID,
    })
  }

  //Data vi vill ha i formen:
  //Namn, mail, telefon, betalsätt verkar det som
  render() {
    return (
      <div align='center'>
        <div>
          <h1>{`${this.props.location.activityName}, ${this.props.location.containerData.location}`}</h1>
        </div>
        <div align='center'>
          <h3>
            {`${this.props.location.containerData.date}, ${this.props.location.containerData.start_time.substring(0, 5)} - ${this.props.location.containerData.end_time.substring(0, 5)}`}
          </h3>
        </div>
        <p>{`${"Instruktör:"} ${this.props.location.instructorName}`}</p>
        <div className="formContainer" align="center">
          <div className="formField">
            <TextInput
              label="Namn:"
              type="text"
              name="firstName"
              value={this.state.firstName}
              handleChange={this.handleChange}
              placeholder="Namn"
              parentText={() => this.state.firstName}
            />
            <br />
            <TextInput
              label="Mailadress:"
              type="email"
              name="mail"
              value={this.state.mail}
              handleChange={this.handleChange}
              placeholder="Mailadress"
              parentText={() => this.state.mail}

            />
            <br />
            <label>
              <input value={this.state.mail} />
            </label>
            <TextInput
              label="Telefon:"
              type="value"
              name="phone"
              value={this.state.phone}
              handleChange={this.handleChange}
              placeholder="Telefonnummer"
              parentText={() => this.state.phone}

            />
          </div>
          <div className="formField">
            <h3>Betalning</h3>
            <div className="paymentContainer">
              <RadioButton
                name="payment"
                text="Betala direkt med swish"
                value="swish"
                initialCheck={true}
                parentPayment={this.getPayment}
                handleChange={this.handleChange}
              />
              <RadioButton
                name="payment"
                text="Betala på plats"
                value="cash"
                initialCheck={false}
                parentPayment={this.getPayment}
                handleChange={this.handleChange}

              />
            </div>
          </div>
        </div>
        <withRouter>
          <Link to={{
            pathname: '/'
          }}>
            <button className="primary_button_large" onClick={this.onSubmit}>Boka</button>
          </Link>
          <Route
            path={'/'}
          />
        </withRouter>
      </div>
    );
  }
}

export default BookingForm;