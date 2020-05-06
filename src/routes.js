import React from "react";
import Home from "./Pages/Home/Home";
import BookingContainer from "./Pages/Booking/BookingContainer";
import Activities from "./Pages/Activities/Activities";
import About from "./Pages/About/About";
import Join from "./Pages/Join/Join";
import Login from "./Pages/Login/Login";
import ActivityDetail from "./Pages/Activities/ActivityDetailView";
import BookingForm from "./Pages/Booking/BookingForm";
import PostDetail from "./Pages/Home/PostDetailView";
import Instructors from "./Pages/Instructors/Instructors";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const BaseRouter = () => (
  <div style={{paddingTop:'260px'}}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/booking" component={BookingContainer} />
      <Route exact path="/booking/:bookingID/" component={BookingForm} />
      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activities/:activityID/" component={ActivityDetail} />
      <Route exact path="/about" component={About} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/login/:userID" component={BookingContainer} />
      <Route exact path="/post/:postID/" component={PostDetail} />
      <Route exact path="/inspiratörer" component={Instructors} />
    </Router>
  </div>
);

export default BaseRouter;
