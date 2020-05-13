import React from "react";
import "../../../src/globalstyles.css";
import "./BookingForm.css";
import RadioButton from "./FormComponents/RadioButton";
import { withRouter, Link, Route, Switch, NavLink } from "react-router-dom";
import axios from "axios";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button'

class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booking: {},
      activityName: this.props.location.activityName,
      instructorName: this.props.location.instructorName,
      name: "",
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
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState(() => ({
      [name]: value,
    }));
    if(this.state.mail !== "" && this.state.name !== "" && this.state.phone !== "")
      this.validate();
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
  redirect() {
    const { location, date, start_time, end_time } = this.props.location.containerData
    this.props.history.push({
      pathname: '/booking-confirmation',
      activityName: this.state.activityName,
      location: location,
      date: date,
      mail: this.state.mail
    });

  }

  //enables submit button if valid
  validate = () => {
    this.form.isFormValid(false).then(isValid => {
      if (isValid) {
       this.setState({ disablesubmit: !isValid });
      }
    });
  }


  //Required to resend all data even though only one field has changed, results in bad gateway otherwise
  onSubmit() {
    this.form.isFormValid(false).then(isValid => {
      if (isValid) {
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
            this.redirect();
          })
          .catch((error) => {
            console.log(error);
          });
        axios.post("http://localhost:8000/api/bookings/", {
          name: this.state.name,
          email: this.state.mail,
          phone_number: this.state.phone,
          classID: this.props.location.containerData.classID,
        });
      }
    });
  }

  handleSubmit = (event) => {
    this.setState({ disablesubmit: true }, () => {
      setTimeout(() => this.setState({ disablesubmit: false }), 5000);
    });
    event.preventDefault();
    //state changing logic here
  }

  //Data vi vill ha i formen:
  //Namn, mail, telefon, betalsätt verkar det som
  render() {
    const { activityName, instructorName } = this.props.location
    const { location, date, start_time, end_time } = this.props.location.containerData
    const time = `${date}, ${start_time.substring(0, 5)} - ${end_time.substring(0, 5)}`

    return (
      <div align="center">
        <div className="headerText">
          <h2>{`${this.props.location.activityName}, ${this.props.location.containerData.location}`}</h2>
          <h3>
            {`${this.props.location.containerData.date}, ${this.props.location.containerData.start_time.substring(0, 5)} - ${this.props.location.containerData.end_time.substring(0, 5)}`}
          </h3>
        </div>
        <p>{`${"Instruktör:"} ${instructorName}`}</p>
        <div className="formContainer" align="center">
          <ValidatorForm
            ref={(r) => { this.form = r; }}
            instantValidate="false">

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
            <br />
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
            <br />
            <TextValidator
              id="phone"
              variant="outlined"
              fullWidth={true}
              label="Telefonnummer"
              onChange={this.handleChange}
              name="phone"
              defaultValue="Telefonnummer"
              value={this.state.phone}
              validators={['required', 'isNumber']}
              errorMessages={['Ange telefonnummer', 'Måste anges med siffror']}
            />
            <br />
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
            <Button
              type="submit"
              className='primary_button_large'
              disabled={this.state.disablesubmit}
              onClick={this.onSubmit}>
              Boka
            </Button>
          </ValidatorForm>
        </div>
      </div>
    );
  }
}

export default withRouter(BookingForm);


/*
<TextInput
              label="Namn:"
              type="text"
              name="name"
              value={this.state.name}
              handleChange={this.handleChange}
              placeholder="Namn"
              parentText={() => this.state.name}
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
            <br/>
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
*/
/*

<withRouter>
<NavLink
  to={{
    pathname: "/booking-confirmation",
    activityName,
    time,
    mail: this.state.mail
  }}>
  <Button
    type="submit"
    className="primary-button-large"
    disabled={this.state.disablesubmit}
    onClick={this.onSubmit}>
    Boka
  </Button>
    </NavLink>
</withRouter>
*/