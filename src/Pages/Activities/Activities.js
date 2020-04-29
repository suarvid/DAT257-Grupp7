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
      activites: [],
      models: []
    }
  }

  componentDidMount() {
    console.log('Component mounted')
    axios.get('http://127.0.0.1:8000/api/activities/')
      .then(response => {
        this.state.activites = response.data;
        this.setState({
          activities: response.data,
          models: this.createModels(),
        })
      }).catch(error => {
        console.log(error);
      });
  }

  //Change this to include tags, prerequisites, instructors or whatever info we want to add to the specific activities
  createModels = () => {
    let tempArray = [];
    for (let i = 0; i < this.state.activites.length; i++) {
      let currentActivity = this.state.activites[i]
      console.log("current activity image: " + currentActivity.imageUrl)
      let newModel = new ActivityModel(currentActivity.name, currentActivity.image, currentActivity.description, [], [], []);
      tempArray.push(newModel);
    }
    return tempArray;
  }

  

  render() {
    console.log(this.state.activites.length)
    console.log(this.state.models.length)
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum risus eros, non consequat sapien mattis sed. Cras orci justo, tempor et sollicitudin ac, congue id dolor. Nunc consequat iaculis nulla sit amet euismod. Maecenas est arcu, gravida sed posuere quis, pretium et ex. Maecenas dictum, quam ultrices tincidunt fringilla, urna lorem elementum justo, ut hendrerit dolor metus in erat. Vestibulum tempor enim odio, nec aliquet sapien consequat et. Cras congue turpis sit amet iaculis malesuada. Maecenas vestibulum enim purus. Sed efficitur posuere lectus. Nulla imperdiet in neque eu auctor. Fusce interdum suscipit' +
      'Integer vitae porttitor leo, sit amet suscipit lorem. Sed in sapien vulputate lacus dictum tincidunt bibendum at ante. Aliquam sit amet blandit tellus, quis tristique neque. Ut facilisis bibendum augue vitae dignissim. Vivamus nec sollicitudin ligula, in sagittis libero. Pellentesque lacinia ut quam at varius. Proin pretium lacus in quam fringilla, in porta ex feugiat. Sed eget magna blandit, sodales arcu vel, lobortis urna. Vivamus rutrum vel dui sit amet feugiat. Etiam feugiat quam sed orci aliquet efficitur vel sed ipsum. Suspendisse id velit et massa pellentesque fringilla. Proin mauris felis, fermentum a velit at, pretium efficitur neque.'
    const testTags = ['Styrka', 'Konditon', 'Rörlighet', 'Andning', 'Nybörjarvänligt']
    const testInstructors = ['Yogamamman', 'Yogamamman', 'Yogasonen', 'Yogadottern', 'Ickebinära yogabarnet']
    const activities = [
      new ActivityModel("Yoga", "https://www.helloyogagarden.com/uploads/5/3/5/1/53517303/yoga_orig.jpg", lorem, [], testInstructors, testTags),
      new ActivityModel("Surf", "https://ssl.quiksilver.com/static/QS/default/category-assets/marketing-landing/landing/build/img/surf/tiles/surf_featured_1.jpg", lorem, [], testInstructors, testTags),
      new ActivityModel("Fotboll", "https://www.norrkoping.se/images/18.6bf40d04169c2cece8f46fe/1559737638877/fotboll.jpg", lorem, [], testInstructors, testTags),
      new ActivityModel("Dans","https://kulimalmo.se/wordpress/wp-content/uploads/2017/10/moderna_hl17_1170-1024x567.jpg", lorem, [], testInstructors, testTags),
      new ActivityModel("Jogging", "https://tyngre.se/wp-content/uploads/tyngre/88bbceb487dc61bf7ca99fa9c5be00ca98a1231f.jpg", lorem, [], testInstructors, testTags),
      new ActivityModel("Meditation", "https://manlighälsa.se/wp-content/uploads/2018/10/mindfulness-meditation-1.jpg", lorem, [], testInstructors, testTags)
    ]
    return (
      <div>
        <h1>Alla aktiviteter</h1>
        <div className="activitiesContainer">
          {activities.map(activity => {
            return (
              <div>
                <withRouter>
                  <div>
                    <NavLink to={{
                      pathname: `/activities/${activity.activity}/`,
                      state: activity
                    }}>
                      {console.log("image url: " + activity.imageUrl)}
                      <Activity key={activity.activity} activityType={activity.activity} imageUrl={activity.imageUrl} description={activity.description}/>
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

