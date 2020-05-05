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
      activity: {},
      instructor: {},
      id: this.props.data.id,
      date: this.props.data.date,
      start_time: this.props.data.start_time,
      end_time: this.props.data.end_time,
      location: this.props.data.location,
      max_attendees: this.props.data.max_attendees,
      registered_attendees: this.props.data.registered_attendees
    }
    console.log(this.props)
  }

  componentDidMount() {
    console.log('Component Mounted')
    axios.get(`http://127.0.0.1:8000/api/user/${this.props.data.instructor}`)
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
  }

  render() {
    let buttonText;
    if (this.props.data.registered_attendees < this.props.data.max_attendees || this.props.data.max_attendees === 0) {
      buttonText = "Boka";
    } else {
      buttonText = "Fullt";
    }
    const button = (
      <Link
        className="primary_button_large" 
        to={{
          pathname: `booking/${this.state.id}/`,
          containerData: {
            location: this.state.location,
            start_time: this.state.start_time,
            end_time: this.state.end_time,
            date: this.state.date,
            classID: this.state.id,
            activityID: this.state.activity,
            description: this.state.description,
            instructor: this.state.instructor,
            max_attendees: this.state.max_attendees,
            registered_attendees: this.state.registered_attendees,
          },
          activityName: this.state.activity.name,
          instructorName: this.state.instructor.name,
        }}
      >
        {buttonText}
      </Link>
    );
    
    const time = `${this.props.data.start_time.slice(0,5)} - ${this.props.data.end_time.slice(0,5)}` ;
    const remainingSpots = `${this.props.data.max_attendees-this.props.data.registered_attendees} / ${this.props.data.max_attendees}`;
    

    return (
      <withRouter>
        <div className = "bookingcomponent">
          <div>
          <div className="content" >
            <h3>
            {`${ this.state.activity.name} ${this.state.date}  ${time}`}
            </h3>
          </div>
          <div style = {{height:10}}>
          </div>
          <div className="content">
            <p>
            {`${"Instruktör:"} ${this.state.instructor.name}`}
            </p>
          </div>
          <div className="content">
            <p>
              {`${"Plats:"} ${this.state.location}`}
            </p>
          </div>
          <div className = "content">
            <p>{`${"Lediga platser"} ${remainingSpots}`}</p>
          </div>
          </div>
          <div style={{float:"right", marginRight:0, marginBottom:40}}>
              {button}
          </div>
        </div>
        <Route
            path={`post/${this.props.data.id}/`}
            component={PostDetailView}
          />
      </withRouter>
    );
  }
}

export default withRouter(BookingComponent);

