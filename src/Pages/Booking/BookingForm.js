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
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    let newTime = new Date(
      this.props.location.state.date.getTime() +
        this.props.location.state.duration * 60 * 1000
    );
    return (
      <div align="center">
        <h1>
          {this.props.location.state.type} {this.props.location.state.location}{" "}
          {this.props.location.state.date.getHours()} :
          {this.props.location.state.date.getMinutes()} -{newTime.getHours()} :
          {newTime.getMinutes()}
        </h1>
        
        Pris : {this.props.location.state.price} kr
        <div className = "formContainer" align="left">
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
              <TextInput 
                label="Telefon:"
                type="value"
                name="phone"
                value={this.state.phone}
                handleChange={this.handleChange}
                placeholder="Telefonnummer"/>
              </div>
              <PaymentInput
               label="Betalsätt:"
               name="payment"
               value={this.state.payment}
               handleChange={this.handleChange}
              />
              </div>
              <button className = "primary_button_large">Godkänn</button>
      </div>

    );
  }
}

export default BookingForm;
