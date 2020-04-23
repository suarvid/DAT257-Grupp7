import React, { Component } from 'react'
import Activity from './Activity/Activity'
import ActivityModel from './ActivityModel'
import './Activities.css'
import { NavLink } from "react-router-dom";

export default class Activities extends Component {
    render() {
        const activities = [
            new ActivityModel("yoga", "https://www.helloyogagarden.com/uploads/5/3/5/1/53517303/yoga_orig.jpg"),
            new ActivityModel("surf", "https://ssl.quiksilver.com/static/QS/default/category-assets/marketing-landing/landing/build/img/surf/tiles/surf_featured_1.jpg"),
            new ActivityModel("fotboll", "https://www.norrkoping.se/images/18.6bf40d04169c2cece8f46fe/1559737638877/fotboll.jpg"),
            new ActivityModel("dans", "https://lh3.googleusercontent.com/proxy/uveHsOdxwwCErekDu8Ps84B4PHChNFWRSUSGmkGa-jyCsstq-JOSWtY9CeVrCBDwkax4bW_ti3ET0AtwnHhIZBbZInRRAMJ85u5A8akXbtaBnXt0Safb255TpRNQ"),
            new ActivityModel("jogging", "https://tyngre.se/wp-content/uploads/tyngre/88bbceb487dc61bf7ca99fa9c5be00ca98a1231f.jpg"),
            new ActivityModel("meditation", "https://manlighälsa.se/wp-content/uploads/2018/10/mindfulness-meditation-1.jpg")
        ]
        return (
            <div>
                <h1>Alla aktiviteter</h1>
                <div className="activitiesContainer">
                    {activities.map(activity => {
                        return(
                        <div>    
                        <withRouter>
                            <div>
                            <NavLink to = {`/activities/${activity.activity}/`}>
                                 <Activity key={activity.activity} activityType={activity.activity} imageUrl={activity.imageUrl} />
                                 <br />
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

/*
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
}*/
