import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";
import axios from "axios";
import Filter from "./Filter/FilterPanel";
import FilterItem from "./Filter/FilterItem";
import BookingItem from "./BookingItem";
import { withRouter } from "react-router-dom";

class BookingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
      activeFilters: {
        activity: this.props.location.filter, //presets activity filter if redirected from activity page
        instructor: null,
      },
      activities: [],
      instructors: [],
      locations: [],
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

    axios
      .get(`http://127.0.0.1:8000/api/locations/`)
      .then((response) => {
        this.setState({
          ...this.state,
          locations: response.data,
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

  onBookingItemSelected(
    classID,
    activityName,
    locationName,
    instructorName,
    date,
    start_time,
    end_time,
    time
  ) {
    this.props.history.push({
      pathname: `../boka/${classID}`,
      state: {
        id: classID,
        activity: {
          name: activityName,
        },
        location: {
          name: locationName,
        },
        instructor: {
          name: instructorName,
        },
        start_time,
        date,
        end_time,
        time
      },
    });
  }

  extractName(list, id) {
    return list.filter((i) => i.id === id)[0].name;
  }

  render() {
    const { classes, activities, instructors, locations } = this.state;
    const { activity, instructor } = this.state.activeFilters;

    if (
      activities.length === 0 ||
      instructors.length === 0 ||
      locations.length === 0
    )
      return null;

    let filteredClasses = classes;

    //Filtering is done below by first filtering out all classes whos starttime and date has already passed.
    //Next, depending on what activity/instructor is chosen, it filters the same classes again on the other properties.
    let now = new Date();
    filteredClasses = filteredClasses.filter(
      (c) => now.getTime() <= new Date(c.date + " " + c.start_time).getTime()
    );
    if (activity) {
      filteredClasses = filteredClasses.filter((c) => c.activity === activity);
    }
    if (instructor) {
      filteredClasses = filteredClasses.filter(
        (c) => c.instructor === instructor
      );
    }

    let mainContent;
    if (filteredClasses.length === 0) {
      mainContent = <h2>Filtereringen gav inga träffar. Försök igen.</h2>;
    } else {
      mainContent = filteredClasses.map((item) => {
        const instructorName = this.extractName(instructors, item.instructor)
        const activityName = this.extractName(activities, item.activity)
        const locationName = this.extractName(locations, item.location)
        const time = `${item.start_time.slice(0, 5)} - ${item.end_time.slice(0, 5)}`

        return (
          <BookingItem
            key={item.id}
            activityName={activityName}
            instructorName={instructorName}
            date={item.date}
            time={time}
            locationName={locationName}
            remainingSpots={`${
              item.max_attendees - item.registered_attendees
            } / ${item.max_attendees}`}
            isBookable={item.registered_attendees < item.max_attendees}
            onClick={() =>
              this.onBookingItemSelected(
                item.id,
                activityName,
                locationName,
                instructorName,
                item.date,
                item.start_time,
                item.end_time,
                time
              )
            }
          />
        );
      });
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

export default withRouter(BookingContainer);
