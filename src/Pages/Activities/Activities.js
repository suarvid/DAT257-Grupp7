import React, { Component } from 'react'
import Activity from './Activity/Activity'
import ActivityModel from './ActivityModel'
import './Activities.css'
import './../../globalstyles.css'
import { NavLink } from "react-router-dom";
import axios from 'axios';


export default class Activities extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activities: [],
    }
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/activities/')
      .then(response => {
        this.setState({
          activities: response.data,
        })
      }).catch(error => {
        console.log(error);
      });
  }

  

  render() {

    return (
      <div>
        <h2 className = "actvitiesHeader">Träning</h2>
        <div className="activitiesContainer">
          {this.state.activities.map(activity => {
            return (
              <div>
                <withRouter>
                  <div>
                    <NavLink to={{
                      pathname: `/activities/${activity.name}/`,
                      state: activity,
                    }}>
                      <Activity key={activity.name} activityType={activity.name} imageUrl={activity.image} description={activity.description}/>
                    </NavLink>
                  </div>
                </withRouter>
              </div>)
          })}
        </div>
      </div>
    )
  }
}

