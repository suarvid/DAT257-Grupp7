import React from 'react'
import './Activity.css'
import { withRouter } from "react-router-dom";

class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: this.props.imageUrl,
            activityType: this.props.activityType,
            description: this.props.description,
            activityID:this.props.id
        }
        this.goToActivity = this.goToActivity.bind(this);
    }

    //redirects to activity detail view
    goToActivity() {
        this.props.history.push({
            pathname: `/aktiviteter/${this.state.activityType}/`,
            state: this.state
        });
    }

    render() {
        return (
            <div className="activityCard hover" onClick={this.goToActivity}>
                <div id="cardImageContainer">
                    <img className="cardImage" src={this.state.imageUrl} alt={this.state.activityType}></img>
                </div>
                <div className="descriptionPreview">
                    <h2 style={{ textDecoration: "none" }}>{this.state.activityType}</h2>
                    <p>{this.state.description}</p>
                </div>
            </div>
        );
    }
}
export default withRouter(Activity);
