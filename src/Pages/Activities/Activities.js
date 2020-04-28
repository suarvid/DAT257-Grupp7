import React, { Component } from 'react'
import Activity from './Activity/Activity'
import ActivityModel from './ActivityModel'
import './Activities.css'
import { NavLink } from "react-router-dom";


export default class Activities extends Component {
    render() {
      const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum risus eros, non consequat sapien mattis sed. Cras orci justo, tempor et sollicitudin ac, congue id dolor. Nunc consequat iaculis nulla sit amet euismod. Maecenas est arcu, gravida sed posuere quis, pretium et ex. Maecenas dictum, quam ultrices tincidunt fringilla, urna lorem elementum justo, ut hendrerit dolor metus in erat. Vestibulum tempor enim odio, nec aliquet sapien consequat et. Cras congue turpis sit amet iaculis malesuada. Maecenas vestibulum enim purus. Sed efficitur posuere lectus. Nulla imperdiet in neque eu auctor. Fusce interdum suscipit' +
      'Integer vitae porttitor leo, sit amet suscipit lorem. Sed in sapien vulputate lacus dictum tincidunt bibendum at ante. Aliquam sit amet blandit tellus, quis tristique neque. Ut facilisis bibendum augue vitae dignissim. Vivamus nec sollicitudin ligula, in sagittis libero. Pellentesque lacinia ut quam at varius. Proin pretium lacus in quam fringilla, in porta ex feugiat. Sed eget magna blandit, sodales arcu vel, lobortis urna. Vivamus rutrum vel dui sit amet feugiat. Etiam feugiat quam sed orci aliquet efficitur vel sed ipsum. Suspendisse id velit et massa pellentesque fringilla. Proin mauris felis, fermentum a velit at, pretium efficitur neque.'
     const testTags = ['Styrka', 'Konditon', 'Rörlighet', 'Andning', 'Nybörjarvänligt']
     const testInstructors = ['Yogamamman', 'Yogamamman', 'Yogasonen', 'Yogadottern', 'Ickebinära yogabarnet']
        const activities = [
            new ActivityModel("Yoga", "https://www.helloyogagarden.com/uploads/5/3/5/1/53517303/yoga_orig.jpg", lorem, [], testInstructors, testTags),
            new ActivityModel("Surf", "https://ssl.quiksilver.com/static/QS/default/category-assets/marketing-landing/landing/build/img/surf/tiles/surf_featured_1.jpg", lorem, [], testInstructors, testTags),
            new ActivityModel("Fotboll", "https://www.norrkoping.se/images/18.6bf40d04169c2cece8f46fe/1559737638877/fotboll.jpg", lorem, [], testInstructors, testTags),
            new ActivityModel("Dans", "https://lh3.googleusercontent.com/proxy/uveHsOdxwwCErekDu8Ps84B4PHChNFWRSUSGmkGa-jyCsstq-JOSWtY9CeVrCBDwkax4bW_ti3ET0AtwnHhIZBbZInRRAMJ85u5A8akXbtaBnXt0Safb255TpRNQ", lorem, [], testInstructors, testTags),
            new ActivityModel("Jogging", "https://tyngre.se/wp-content/uploads/tyngre/88bbceb487dc61bf7ca99fa9c5be00ca98a1231f.jpg", lorem, [], testInstructors,testTags),
            new ActivityModel("Meditation", "https://manlighälsa.se/wp-content/uploads/2018/10/mindfulness-meditation-1.jpg", lorem, [], testInstructors, testTags)
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
                            <NavLink to = {{
                              pathname: `/activities/${activity.activity}/`,
                              state: activity
                              }}>
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
