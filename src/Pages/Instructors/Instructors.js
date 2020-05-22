import React from "react";
import axios from "axios";
import InstructorDetail from "./InstructorDetail";
import "./instructor.css";
import "../../globalstyles.css";
export default class Instructors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/api/instructors/instructors")
      .then((response) => {
        this.state.instructors = response.data;
        this.setState({
          instructors: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="list">
        <div className="textPageContainer">
          <h2>Våra inspiratörer</h2>
        </div>
        {this.state.instructors.map((item) => (
          <InstructorDetail data={item} />
        ))}
      </div>
    );
  }
}
