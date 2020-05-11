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
import Prices from './Pages/Prices/Prices';
import Schema from './Pages/Schema/schema';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookingConfirmation from "./Pages/BookingConfirmation/BookingConfirmation";

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
      <Route exact path="/priser" component={Prices} />
      <Route exact path="/schema" component={Schema} />
      <Route exact path="/booking-confirmation" component={BookingConfirmation} />
    </Router>
  </div>
);

export default BaseRouter;
