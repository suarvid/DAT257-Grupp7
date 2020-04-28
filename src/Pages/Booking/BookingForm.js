import React from "react";
import "../../../src/globalstyles.css";
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
    const data = this.props.location.state;
    this.setState({
      booking: data,
    });
  }

  render() {
    let newTime = 10;
    // let newTime = new Date(
    //   this.props.location.state.date.getTime() +
    //     this.props.location.state.duration * 60 * 1000
    // );
    return (
      <div align="center">
        <h1>
          {this.props.location.state.type} {this.props.location.state.location}{" "}
          {this.props.location.state.start_time} :
          {/* {this.props.location.state.date.getMinutes()} -{newTime.getHours()} :
          {newTime.getMinutes()} */}
        </h1>
        Pris : {this.props.location.state.price} kr
        <form>
          <input
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder="Namn"
          />
          <br />
          <input
            name="mail"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <br />
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            placeholder="Telefonnummer"
          />
          <br />
          <button className = "primary_button_large">Godkänn</button>
        </form>
      </div>
    );
  }
}

export default BookingForm;
