import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";
import { Button } from "antd";
import {
  withRouter,
  Redirect,
  Link,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import PostDetailView from "../../Pages/Home/PostDetailView";
import axios from "axios";

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activity: {},
      instructor: {},
    }
  }

  componentDidMount() {
    console.log('Component Mounted')
    axios.get(`http://127.0.0.1:8000/api/user/${this.props.data.instructor}`)
      .then(response => {
        this.state.instructor = response.data;
        this.setState({
          instructor: response.data,
        })
      }).catch(error => {console.log(error)})

    axios.get(`http://127.0.0.1:8000/api/activities/${this.props.data.activity}`)
      .then(response => {
        this.state.activity = response.data;
        this.setState({
          activity: response.data,
        })
      }).catch(error => {console.log(error)})
  }

  render() {
    let button;
    console.log('registered ' + this.props.data.registered_attendees)
    console.log('max: ' + this.props.data.max_attendees)
    if (this.props.data.registered_attendees < this.props.data.max_attendees || this.props.data.max_attendees == 0) {
      button = (
        <Link
          className="primary_button_large"
          style={{ display: "inline-block" }}
          to={{
            pathname: `booking/${this.props.data.id}/`,
            containerData: {
              location: this.props.data.location,
              start_time: this.props.data.start_time,
              end_time: this.props.data.end_time,
              date: this.props.data.date,
              classID: this.props.data.id,
              activityID: this.props.data.activity,
              description: this.props.data.description,
              instructor: this.props.data.instructor,
              max_attendees: this.props.data.max_attendees,
              registered_attendees: this.props.data.registered_attendees,
            },
            activityName: this.state.activity.name,
            instructorName: this.state.instructor.name,
          }}
        >
          Boka
        </Link>
      );
    } else {
      button = (
        <h1
          className="primary_button_large"
          style={{ display: "inline-block" }}
        >
          Fullt
        </h1>
      );
    }

    return (
      <withRouter>
        <div className="component-container">
          <div className="component">
            <h2 className="component-headlines">
              {this.props.data.date}
            </h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">
              {this.props.data.start_time.substring(0,5)}
              <br/>
                -
              <br/>
              {this.props.data.end_time.substring(0, 5)}
            </h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">{this.state.activity.name}</h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">{this.props.data.location}</h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">
              {this.state.instructor.name}
            </h2>
          </div>

          {button}

          <Route
            path={`post/${this.props.data.id}/`}
            component={PostDetailView}
          />
        </div>
      </withRouter>
    );
  }
}

export default withRouter(BookingComponent);