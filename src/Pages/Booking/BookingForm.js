import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css"
import TextInput from "./FormComponents/TextInput";
import RadioButton from "./FormComponents/RadioButton";
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
    });
  }
  componentDidMount() {
    const { handle } = this.props.match.params;
    const data = this.props.location.state;
    this.setState({
      booking: data,
    });
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
        <h1>{}</h1>
        <h1>{this.props.location.containerData.activity}</h1>
        <h1>class ID:{this.props.location.containerData.classID}</h1>
        <h1>{this.props.location.containerData.activityID}</h1>
        <h1>{this.props.location.containerData.description}</h1>
        <h1>{this.props.location.containerData.instructor}</h1>
        <div className = "formContainer" align="center">
          <div className = "formField">
            <TextInput
                label="Namn:"
                type="text"
                name="firstName"
                value={this.state.firstName}
                handleChange={this.handleChange}
                placeholder="Namn"/>
              <br/>
             <TextInput
                label= "Mailadress:"
                type="email"
                name="mail"
                value={this.state.mail}
                handleChange={this.handleChange}
                placeholder="Mailadress"/>
              <br/>
              <label><input value = {this.state.mail}/></label>
              <TextInput 
                label="Telefon:"
                type="value"
                name="phone"
                value={this.state.phone}
                handleChange={this.handleChange}
                placeholder="Telefonnummer"/>
            </div>
            <div className = "formField">
            <h3>Betalning</h3>
              <div className = "paymentContainer">
                <RadioButton
                  name="Betala direkt med swish"
                  value="true"
                 />
                 <RadioButton
                  name="Betala på plats"
                  value="false"
                />
              </div>
            </div>
          </div>
        <button className="primary_button_large" onClick={this.onSubmit}>Boka</button>
      </div>

    );
  }
}

export default BookingForm;
