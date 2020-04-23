import React from "react";
import "./Activities.css";
import MattesComponent from "../../Components/MattesComponent/MattesComponent";
import { NavLink } from "react-router-dom";

function Activities() {
  //TODO
  // This should probably be be a state, and const props is temporary and
  //should be fetched from a database. Also not my prettiest creation mvh Isak
  const props = {
    data: {
      activities: ["Yoga", "Dans"],
    },
  };
  return (
    <withRouter>
      <div className="test">
        <h1>Alla aktiviteter</h1>
        {props.data.activities.map((activity) => (
          <NavLink to={`/activities/${activity}/`}>
            {activity}
            <br />
          </NavLink>
        ))}
      </div>
    </withRouter>
  );
}

export default Activities;
