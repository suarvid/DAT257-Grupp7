import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css";
import RadioButton from "./FormComponents/RadioButton";
import {withRouter} from "react-router-dom";
import axios from "axios";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
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
      disablesubmit: true
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.getPayment = this.getPayment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
    this.validate = this.validate.bind(this);
    this.getMessage = this.getMessage.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  //Called every time a value is changed in the form. Updates state, validates if the text input fields not all are empty
  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    }, () => {this.validate()});
  }

  componentDidMount() {
    const data = this.props.location.state;
    this.setState({
      booking: data
    });
  }

  getPayment() {
    return this.state.payment;
  }
  //redirect to booking-confirmation, passing information about the booking
  redirect() {
    const { location, date, start_time, end_time } = this.props.location.containerData
    this.props.history.push({
      pathname: '/booking-confirmation',
      activityName: this.state.activityName,
      location: location,
      time: `${date}, ${start_time.substring(0, 5)} - ${end_time.substring(0, 5)}`,
      mail: this.state.mail
    });

  }

  //enables submit button if form is valid
  validate = () => {
    this.form.isFormValid(true).then(isValid => {
      this.setState({ disablesubmit: !isValid })
    });
    
  }

  getMessage() {
    // FIX ACTIVITYNAME, INSTRUCTORNAME, BOOKINGREFERENCE
    let message =
      "Här kommer din bokningsbekräftelse!" +
      "\n\n" +
      "Vad roligt att du vill vara med och Hela Åsa dig själv med oss.\n\n" +
      "Du har bokat " +
      this.state.data.activity.name +
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
  onSubmit() {
    this.validate();
    this.form.isFormValid(false).then(isValid => {
      if (isValid) {
        axios.post(`http://localhost:8000/api/bookings/`,
            {
          name: this.state.firstName,
          email: this.state.mail,
          phone_number: this.state.phone,
          classID: this.state.data.classID,
          }).catch((error) => {
            console.log(error);})
          .then((response) => {
            //Uncomment if u want to send mail
            //this.sendEmail({
             // user_name: this.state.firstName,
             // user_email:this.state.mail,
             // message: this.getMessage(),
            //});
            //until here
            //redirects to next page
            this.redirect();
          });
        }
      });
  }

  render() {
    const { date, end_time, start_time } = this.props.location;

    const time = `${start_time.substring(0, 5)} - ${end_time.substring(0, 5)}`

    return (
      <div align="center">
        <div className="headerText">
          <h2>{`${this.state.data.activity.name}, ${this.state.data.location.name}`}</h2>
          <h3>
            {`${date}, ${time}`}
          </h3>
        </div>
        <p>{`${"Instruktör:"} ${this.state.data.instructor.name}`}</p>
        <div className="formContainer" align="center">
          <ValidatorForm
            ref={(r) => { this.form = r; }}
            instantValidate="false"
            onChange={this.validate}>
            <p style ={{marginBottom:10}}>Fyll i bokningsinformation</p>
            <TextValidator
              id="name"
              variant="outlined"
              fullWidth={true}
              label="Namn"
              onChange={this.handleChange}
              name="name"
              defaultValue="Namn"
              value={this.state.name}
              validators={['required']}
              errorMessages={['Ange ditt namn']}
            />
            <div style = {{with:"100%", height:20}}></div>
            <TextValidator
              id="mail"
              variant="outlined"
              fullWidth={true}
              label="E-post"
              onChange={this.handleChange}
              name="mail"
              defaultValue="epostadress"
              value={this.state.mail}
              validators={['required', 'isEmail']}
              errorMessages={['Ange e-postadress', 'Ogiltig e-postadress']}
            />
            <div style = {{with:"100%", height:20}}></div>
            <TextValidator
              id="phone"
              variant="outlined"
              fullWidth={true}
              label="Telefonnummer"
              onChange={this.handleChange}
              name="phone"
              defaultValue="Telefonnummer"
              value={this.state.phone}
              validators={['required', 'matchRegexp:^[0-9]{10}$']}
              errorMessages={['Ange telefonnummer', 'Måste anges med 10 siffror']}
            />
            <div style = {{with:"100%", height:20}}></div>
            <p>Välj betalsätt</p>
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
            <button
              ref={(r) => { this.submitbutton = r; }}
              className="primary_button_large"
              disabled={this.state.disablesubmit}
              onClick={this.onSubmit}>
              Boka
            </button>
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);

