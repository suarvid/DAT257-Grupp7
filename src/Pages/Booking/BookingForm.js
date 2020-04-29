import React from "react";
import "../../../src/globalstyles.css";
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
  

  render() {
    return (
      <div align="center">
        <h1>{this.props.location.testValue}</h1>
    <h1>{this.props.location.activityName}</h1>
    <h1>{this.props.location.instructorName}</h1>
    <h1>{this.props.location.containerData.location}</h1>
    <h1>{this.props.location.containerData.start_time.substring(0,5)}</h1>
    <h1>{this.props.location.containerData.end_time.substring(0,5)}</h1>
    <h1>{this.props.location.containerData.date}</h1>
      </div>
    );
  }
}

export default BookingForm;
