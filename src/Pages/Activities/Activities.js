import React, { Component } from 'react'
import Activity from './Activity/Activity'
import './Activities.css'
import './../../globalstyles.css'
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
    let activities = this.state.activities.map(activity => (
      <Activity
        key={activity.name}
        activityType={activity.name}
        imageUrl={activity.image}
        description={activity.description}
        id={activity.id} />
    ));

    return (
      <div>
        <h2 className="actvitiesHeader">Träning</h2>
        <div className="activitiesContainer">
          {activities}
        </div>
      </div>
    );
  }
}
/*
render() {

    return (
      <div>
        <h2 className = "actvitiesHeader">Träning</h2>
        <div className="activitiesContainer">
          {this.state.activities.map(activity => {
            return (
              <div>
                <withRouter>
                  <div style={{margin:"-30px 0"}}>
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
  */