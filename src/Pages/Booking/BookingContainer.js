import React from "react";
import BookingHeader from "./BookingHeader";
import "../../../src/globalstyles.css";
import BookingComponent from "./BookingComponent";
import "../Booking/Booking.css";
import axios from "axios";
import Filter from "./Filter/FilterPanel";

export default class BookingContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      classes: [],
      activeFilters: {
        activity: "",
        instructor: "",
      },
    };
    this.sortData = this.sortData.bind(this);
  }

  componentDidMount() {
    let data;
    console.log("Component mounted");
    axios
      .get("http://127.0.0.1:8000/api/classes/")
      .then((response) => {
        data = response.data;
        this.setState({
          classes: this.sortData(data),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  sortData(data) {
    return data.sort((a, b) => a.date > b.date);
  }

  onFilterStateChanged(selectedActivity, selectedInstructor) {
    this.setState({
      ...this.state,
      activeFilters: {
        activity: selectedActivity,
        instructor: selectedInstructor,
      },
    });
    console.log("Selected ", selectedActivity);
  }

  render() {
    const { activity, instructor } = this.state.activeFilters;

    return (
      <div align="center" className="component-container">
        <Filter
          selectedActivity={activity}
          selectedInstructor={instructor}
          onFilterStateChanged={(selectedActivity, selectedInstructor) =>
            this.onFilterStateChanged(selectedActivity, selectedInstructor)
          }
        />
        {this.state.classes.map((item) => (
          <BookingComponent data={item} />
        ))}
      </div>
    );
  }
}
