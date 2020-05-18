import React from "react";
import BookingHeader from "./BookingHeader";
import "../../../src/globalstyles.css";
import BookingComponent from "./BookingComponent";
import "../Booking/Booking.css";
import axios from "axios";
import Filter from "./Filter/FilterPanel";
import FilterItem from "./Filter/FilterItem";

export default class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      activeFilters: {
        activity: null,
        instructor: null,
      },
      activities: [],
      instructors: [],
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

    axios
      .get(`http://127.0.0.1:8000/api/activities/`)
      .then((response) => {
        const activities = response.data.map(
          (activity) => new FilterItem(activity.id, activity.name)
        );
        this.setState({
          ...this.state,
          activities,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://127.0.0.1:8000/api/instructors/instructors")
      .then((response) => {
        const instructors = response.data.map(
          (instructor) => new FilterItem(instructor.id, instructor.name)
        );
        this.setState({
          ...this.state,
          instructors,
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
  }

  render() {
    const { classes, activities, instructors } = this.state;
    const { activity, instructor } = this.state.activeFilters;
    console.log("DO I GET AN AACTIVITY" + activity)

    let filteredClasses = classes;
    if (activity) {
      filteredClasses = filteredClasses.filter((c) => c.activity === activity);
    }
    if (instructor) {
      filteredClasses = filteredClasses.filter((c) => c.instructor === instructor);
    }

    let mainContent;
    if (filteredClasses.length === 0) {
      mainContent = <h2>Filtereringen gav inga träffar. Försök igen.</h2>;
    } else {
      mainContent = filteredClasses.map((item) => (
        <BookingComponent
          activity={activities.filter((a) => a.id === item.activity)[0]}
          data={item}
        />
      ));
    }

    return (
      <div align="center" className="component-container">
        <Filter
          activities={activities}
          instructors={instructors}
          selectedActivity={activity}
          selectedInstructor={instructor}
          onFilterStateChanged={(selectedActivity, selectedInstructor) =>
            this.onFilterStateChanged(selectedActivity, selectedInstructor)
          }
        />
        {mainContent}
      </div>
    );
  }
}
