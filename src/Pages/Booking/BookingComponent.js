import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";
import {
  withRouter,
  Link,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import PostDetailView from "../../Pages/Home/PostDetailView";
import axios from "axios";

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity:{},
      instructor: {},
      id: this.props.data.id,
      date: this.props.data.date,
      start_time: this.props.data.start_time,
      end_time: this.props.data.end_time,
      location:{},
      max_attendees: this.props.data.max_attendees,
      registered_attendees: this.props.data.registered_attendees,
    };
  }

  componentDidMount() {
    console.log('Component Mounted')
    axios.get(`http://127.0.0.1:8000/api/instructors/instructors/${this.props.data.instructor}`)
      .then(response => {
        this.setState({
          instructor: response.data,
        })
      }).catch(error => {console.log(error)})

    axios.get(`http://127.0.0.1:8000/api/activities/${this.props.data.activity}`)
      .then(response => {
        this.setState({
          activity: response.data,
        })
      }).catch(error => {console.log(error)})
  


      axios.get(`http://127.0.0.1:8000/api/locations/${this.props.data.location}`)
      .then(response => {
        this.setState({
          location: response.data,
        })
      }).catch(error => {console.log(error)})
  
  }
  render() {
    console.log("ACTIVITY NAME ", this.props.activity)
    if (!this.props.activity) return null

    let button;
    if (this.props.data.registered_attendees < this.props.data.max_attendees) {
    button = (
      <Link
        className="primary_button_large" 
        to={{
          pathname: `booking/${this.props.data.id}/`,
          containerData: {
            location: this.state.location,
            start_time: this.props.data.start_time,
            end_time: this.props.data.end_time,
            date: this.props.data.date,
            classID: this.props.data.id,
            activityID: this.props.data.activity,
            description: this.props.data.description,
            instructor: this.state.instructor,
            max_attendees: this.props.data.max_attendees,
            registered_attendees: this.props.data.registered_attendees,
          },
          activityName: this.state.activity.name,
          instructorName: this.state.instructor.name,
        }}
      >
        {console.log(this.state)}
        Boka
      </Link>
    );}
    else{
      button = (
        <h1
          className="primary_button_large"
          style={{ display: "inline-block", backgroundColor: "grey" }}
        >
          Fullt
        </h1>
      );
    }

    const time = `${this.props.data.start_time.slice(
      0,
      5
    )} - ${this.props.data.end_time.slice(0, 5)}`;
    const remainingSpots = `${
      this.props.data.max_attendees - this.props.data.registered_attendees
    } / ${this.props.data.max_attendees}`;

    return (
      <withRouter>
        <div className="bookingcomponent">
          <div>
            <div className="content">
              <h3 style={{ fontSize: 16 }}>
                {`${this.state.activity.name} ${this.state.date}  ${time}`}
              </h3>
            </div>
            <div style={{ height: 10 }}></div>
            <div className="content">
              <p>{`${"Instruktör:"} ${this.state.instructor.name}`}</p>
            </div>
            <div className="content">
              <p>{`${"Plats:"} ${this.state.location.name}`}</p>
            </div>
            <div className="content">
              <p>{`${"Lediga platser"} ${remainingSpots}`}</p>
            </div>
          </div>
          <div style={{ float: "right", marginRight: 0, marginBottom: 40 }}>
            {button}
            <Route
              path={`post/${this.props.data.id}/`}
              component={PostDetailView}
            />
          </div>
        </div>
      </withRouter>
    );
  }
}

export default withRouter(BookingComponent);
