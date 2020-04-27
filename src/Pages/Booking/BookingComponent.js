import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";
import { Button } from "antd";
import {
  withRouter,
  Redirect,
  Link,
  NavLink,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import PostDetailView from "../../Pages/Home/PostDetailView";

class BookingComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let button;
    if(this.props.data.capacity <= this.props.data.booked){
      button = <Link
      className="primary_button_large" style = {{display: 'inline-block'}}
      to={{
        pathname: `booking/${this.props.data.id}/`,
        state: this.props.data,
      }}
    >
      Boka
    </Link>
    }else{
      button = <h1 className =  "primary_button_large" style = {{display: 'inline-block'}}>Fullt</h1>
    }
    return (
      <withRouter>
        <div className="component-container">
          <div className="component">
            <h2 className="component-headlines">
              {this.props.data.date.getDate()} /{" "}
              {this.props.data.date.getMonth() + 1}
            </h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">
              {this.props.data.date.getHours()}:
              {this.props.data.date.getMinutes()}
            </h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">{this.props.data.type}</h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">{this.props.data.location}</h2>
          </div>
          <div className="component">
            <h2 className="component-headlines">
              {this.props.data.instructor}
            </h2>
          </div>

          {button}

          <Route
            path={`post/${this.props.data.id}/`}
            component={PostDetailView}
          />
        </div>
      </withRouter>
    );
  }
}

export default withRouter(BookingComponent);
