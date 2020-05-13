import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css";
import TextInput from "./FormComponents/TextInput";
import RadioButton from "./FormComponents/RadioButton";
import { withRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    const data = this.props.location;
 
    this.state = {
      data: data,
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

  getPayment() {
    return this.state.payment;
  }
  getMessage() {

    // FIX ACTIVITYNAME, INSTRUCTORNAME, BOOKINGREFERENCE 
    let message =
      "Här kommer din bokningsbekräftelse!" +
      "\n\n" +
      "Vad roligt att du vill vara med och Hela Åsa dig själv med oss.\n\n" +
      "Du har bokat " +
      this.state.data.activityName +
      " klockan " +
      this.state.data.start_time +
      " " +
      this.state.data.date +
      " med våran " +
      this.state.data.instructor.name +
      ".\n" +
      "Din bokningsreferens är " +
      "INSERT BOOKINGREFERENCE" +
      "." +
      "\n\n" +
      "Om du skulle få förhinder, har du möjlighet att avboka ditt pass senast 30 minuter innan utstakad tid med full återbetalning. Om du avbokar efter det har vi tyvärr ingen möjlighet att betala tillbaka passets kostnad. För att avboka, ange din bokningsreferens och mejla till info@helaasa.se" +
      "\n\n" +
      "Vi ser fram emot att träffa dig!" +
      "\nMed vänliga hälsningar \nHela Åsa";

    console.log(message);
    return message;
  }
  //ska ha ett object med user_name ,user_email,message.
  sendEmail(data) {
    //data.preventDefault();

    emailjs
      .send(
        "noreeplyhelaasa123_gmail_com",
        "tack_f_r_din_bokning",
        data,
        "user_4V0rsm3ZnA12kUbHiHncB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  //Required to resend all data even though only one field has changed, results in bad gateway otherwise
  onSubmit(event) {
    // console.log("Form submitted!");
    // console.log(this.state.firstName);
    // console.log(this.state.mail);
    // console.log(this.state.phone);
    // console.log(this.props.location.containerData.activityID);
    console.log(this.state);

    axios
      .put(
        `http://localhost:8000/api/classes/${this.state.data.classID}/`,
        {
          id: this.state.data.classID,
          activity: this.state.data.activityID,
          description: this.state.data.description,
          instructor: this.state.data.instructor.id,
          date: this.state.data.date,
          start_time: this.state.data.start_time,
          end_time: this.state.data.end_time,
          location: this.state.data.location.id,
          max_attendees: this.state.data.max_attendees,
          registered_attendees:
            this.state.data.registered_attendees + 1,
        }
      )
      .then((response) => {
        console.log(response);
        this.props.history.push("/BookingConfirmation", [this.state]);
        //Uncomment this if u want confirmation mail
        // this.sendEmail({
        //   user_name: this.state.firstName,
        //   user_email: this.state.mail,
        //   message: this.getMessage(),
        // });
        //between this and above
        console.log(this.getMessage());
      })
      .catch((error) => {
        console.log(error);
      });
    axios.post("http://localhost:8000/api/bookings/", {
      name: this.state.firstName,
      email: this.state.mail,
      phone_number: this.state.phone,
      classID: this.state.data.classID,
    });
  }

  //Data vi vill ha i formen:
  //Namn, mail, telefon, betalsätt verkar det som
  render() {
    let activityName;
    console.log(activityName)
    const {
      date,
      end_time,
      start_time,
    } = this.props.location;
    console.log(this.props.location)
    console.log(date)
    console.log(end_time)
    console.log(start_time)

    const time = `${date}, ${start_time.substring(0, 5)} - ${end_time.substring(
      0,
      5
    )}`;
    
    console.log("this.state")
    console.log(this.state)
    return (
      <div align="center">
        <div className="headerText">
          <h2>{`${this.state.data.activity.name}, ${this.state.data.location.name}`}</h2>
          <h3>
            {`${
              this.state.data.date
            }, ${this.state.data.start_time.substring(
              0,
              5
            )} - ${this.state.data.end_time.substring(0, 5)}`}
          </h3>
        </div>
        <p>{`${"Instruktör:"} ${this.state.data.instructor.name}`}</p>
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
            <TextInput
              label="Telefon:"
              type="value"
              name="phone"
              value={this.state.phone}
              handleChange={this.handleChange}
              placeholder="Telefonnummer"
              parentText={() => this.state.phone}
            />
            <br />
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
          <NavLink
            to={{
              pathname: "/booking-confirmation",
              activityName : this.state.data.activity.name,
              time,
              mail: this.state.mail,
            }}
          >
            <button className="primary_button_large" onClick={this.onSubmit}>
              Boka
            </button>
          </NavLink>
        </withRouter>
      </div>
    );
  }
}

export default withRouter(BookingForm);
