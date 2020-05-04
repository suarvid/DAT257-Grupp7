import React from "react";
import axios from 'axios';
import './instructor.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
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
                allActivities = Array.from(response.data);
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
            <Card>
            <div className='itemContainer'>
                <div className='imageContainer'>
                    <img src={this.state.imageurl} className='instructorImage' />
                </div>
                <div className='infoContainer'>
                    <h3>{this.state.name}</h3>
                    <p>{this.state.email}</p>
                    <p>Aktiviteter: 
                    <ul>
                        {this.state.activities.map((item) =>
                            <li>{item}</li>
                        )}
                    </ul>
                    </p>
                </div>
            </div>
            </Card>
        )
    }
}