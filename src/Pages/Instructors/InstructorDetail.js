import React from "react";
import axios from "axios";
import "./instructor.css";
import Card from "@material-ui/core/Card";
export default class InstructorDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      imageurl: "",
      activities: [],
      id: {},
    };
    this.getActivities = this.getActivities.bind(this);
    this.filterActivities = this.filterActivities.bind(this);
    this.addActivityName = this.addActivityName.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.props.data.name,
      email: this.props.data.email,
      imageurl: this.props.data.image,
      id: this.props.data.id,
    });
    this.getActivities();
  }

  getActivities() {
    let allActivities = [];
    axios
      .get("http://127.0.0.1:8000/api/instructors/activities")
      .then((response) => {
        allActivities = Array.from(response.data);
        this.filterActivities(allActivities);
      });
  }

  filterActivities(activityList) {
    let instructorActivities = [];
    for (let i = 0; i < activityList.length; i++) {
      if (activityList[i].instructorID === this.state.id) {
        instructorActivities.push(activityList[i].activityID);
      }
    }
    for (let j = 0; j < instructorActivities.length; j++) {
      this.addActivityName(instructorActivities[j]);
    }
  }

  addActivityName(instructorId) {
    let activityNames = [];
    axios
      .get(`http://localhost:8000/api/activities/${instructorId}`)
      .then((response) => {
        activityNames.push(response.data.name);
        this.setState({
          activities: this.state.activities.concat(activityNames),
        });
      });
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="cardImageContainer">
          <img src={this.state.imageurl} className="cardImage" alt="" />
        </div>
        <div className="cardInfo">
          <h3 className="cardHeading">{this.state.name}</h3>
          <p>{this.state.email}</p>
          <p style={{ paddingTop: "5px" }}>
            <strong>Aktiviteter:</strong>
            <ul>
              {this.state.activities.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    );
  }
}
