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
      layout: {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      },
      tailLayout: {
        wrapperCol: { offset: 8, span: 16 },
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(event) {

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
  }



  //Data vi vill ha i formen:
  //Namn, mail, telefon, betalsätt verkar det som
  render() {
    return (
      <div align='center'>
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
        <div className = "formContainer" align="left">
          <div className = "formField">
            <TextInput
                label="Namn:"
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="Namn"/>
              <br/>
             <TextInput 
                label= "Mailadress:"
                type="email"
                name="mail"
                value={this.state.mail}
                placeholder="Mailadress"/>
              <br/>
              <TextInput 
                label="Telefon:"
                type="value"
                name="phone"
                value={this.state.phone}
                placeholder="Telefonnummer"/>
              </div>
              <PaymentInput
               label="Betalsätt:"
               name="payment"
               value={this.state.payment}
              />
              </div>
        <button className="primary_button_large" onClick={this.onSubmit}>Godkänn</button>
      </div>

    );
  }
}

export default BookingForm;
