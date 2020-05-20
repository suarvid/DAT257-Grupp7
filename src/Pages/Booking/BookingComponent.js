import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";
import {withRouter} from "react-router-dom";
import axios from "axios";

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      id: this.props.data.id,
      date: this.props.data.date,
      start_time: this.props.data.start_time,
      end_time: this.props.data.end_time,
      location: {},
      max_attendees: this.props.data.max_attendees,
      registered_attendees: this.props.data.registered_attendees,
      isBookable: false
    };
    this.goForward = this.goForward.bind(this);
  }

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/api/activities/${this.props.data.activity}`)
      .then(response => {
        this.setState({
          activity: response.data,
        })
      }).catch(error => { console.log(error) })

    axios.get(`http://127.0.0.1:8000/api/locations/${this.props.data.location}`)
      .then(response => {
        this.setState({
          location: response.data,
        })
      }).catch(error => { console.log(error) })

    const bookable = this.props.data.registered_attendees < this.props.data.max_attendees;
    this.setState({ isBookable: bookable })

  }

  goForward() {
    this.props.history.push({
      pathname: `../boka/${this.state.id}`,
      state: {
        ...this.state,
        instructor: this.props.instructor
      }
    }
    );
  }

  render() {
    if (!this.props.activity || !this.props.instructor) return null

    let buttonText;
    if (this.state.isBookable) {
      buttonText = "Boka"
    }
    else {
      buttonText = "Fullt"
    }

    const time = `${this.props.data.start_time.slice(0, 5)} - ${this.props.data.end_time.slice(0, 5)}`;
    const remainingSpots = `${this.props.data.max_attendees - this.props.data.registered_attendees} / ${this.props.data.max_attendees}`;

    console.log("booking component state ", this.state)

    return (
      <div className="bookingcomponent">
        <div>
          <div className="content">
            <h3 style={{ fontSize: 16 }}>
              {`${this.props.activity.name} ${this.state.date}  ${time}`}
            </h3>
          </div>
          <div style={{ height: 10 }}></div>
          <div className="content">
            <p>{`${"Instruktör:"} ${this.props.instructor.name}`}</p>
          </div>
          <div className="content">
            <p>{`${"Plats:"} ${this.state.location.name}`}</p>
          </div>
          <div className="content">
            <p>{`${"Lediga platser"} ${remainingSpots}`}</p>
          </div>
        </div>
        <div style={{ float: "right", marginRight: 0, marginBottom: 40 }}>
          <button
            className="primary_button_large"
            onClick={this.goForward}
            disabled={!this.state.isBookable}>
            {buttonText}
          </button>

        </div>
      </div>
    );
  }
}

export default withRouter(BookingComponent);