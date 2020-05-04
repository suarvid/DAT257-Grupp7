import React from "react";
import axios from 'axios';

export default class InstructorDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            imageurl: '',
            activities: [],
            id: {},
        }
        this.getActivities = this.getActivities.bind(this);
    }


    componentDidMount() {
        console.log("Component Mounted");

        this.setState({
            name: this.props.data.name,
            email: this.props.data.email,
            imageurl: this.props.data.image,
            id: this.props.data.id,
        });

        this.getActivities();
    }

    //Avert your eyes, ugly code below!
    //Nested axios-requests make it hard to read!
    getActivities() {
        let allActivities = [];
        let instructorActivities = [];
        let instructorActivityNames = [];
        axios.get('http://127.0.0.1:8000/api/instructors/activities')
            .then(response => {
                allActivities =Array.from(response.data);
                for (let j = 0; j < allActivities.length; j++) {
                    if (allActivities[j].instructorID == this.state.id) {
                        instructorActivities.push(allActivities[j].activityID)
                    }
                }
                for (let i = 0; i < instructorActivities.length; i++) {
                    axios.get(`http://localhost:8000/api/activities/${instructorActivities[i]}`)
                        .then(response => {
                            instructorActivityNames.push(response.data.name);
                            this.setState({
                                activities: instructorActivityNames
                            })
                        })
                        .catch(error => {
                            console.log(error);
                        })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        console.log(this.state)
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h1>{this.state.email}</h1>
                {this.state.activities.map((item) => <h1>{item}</h1>)}
                <img src={this.state.imageurl} />
            </div>
        )
    }
}