import React from "react";
import "./Activity.css";
import { withRouter } from "react-router-dom";
import CardWrapper from "../../../CardWrapper/CardWrapper";

class Activity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: this.props.imageUrl,
      activityType: this.props.activityType,
      description: this.props.description,
      activityID: this.props.id,
    };
    this.goToActivity = this.goToActivity.bind(this);
  }

  //redirects to activity detail view
  goToActivity() {
    this.props.history.push({
      pathname: `/aktiviteter/${this.state.activityType}/`,
      state: this.state,
    });
  }

  render() {
    return (
      <CardWrapper>
        <div className="activityCard hover" onClick={this.goToActivity}>
          <div id="cardImageContainer">
            <img
              className="cardImage"
              src={this.state.imageUrl}
              alt={this.state.activityType}
            ></img>
          </div>
          <div className="descriptionPreview">
            <h2 style={{ marginBottom: 12 }}>{this.state.activityType}</h2>
            <p style={{ paddingTop: 0 }}>{this.state.description}</p>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
export default withRouter(Activity);
