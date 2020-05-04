import React from "react";
import Home from "./Pages/Home/Home";
import Booking from "./Pages/Booking/Booking";
import Activities from "./Pages/Activities/Activities";
import About from "./Pages/About/About";
import Join from "./Pages/Join/Join";
import Login from "./Pages/Login/Login";
import ActivityDetail from "./Pages/Activities/ActivityDetailView";
import Banner from "./Components/Banner/BannerComponent";
import BookingForm from "./Pages/Booking/BookingForm";
import PostList from "./Pages/Home/PostListView";
import PostDetail from "./Pages/Home/PostDetailView";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const BaseRouter = () => (
  <div>
    <Router>
      {/* <Route exact path="/" component={Home} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/booking/:bookingID/" component={BookingForm} />

      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activities/:activityID/" component={ActivityDetail} />
      <Route exact path="/about" component={About} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/login/:userID" component={Booking} />
      <Route exact path="/post/:postID/" component={PostDetail} /> */}

      <Route exact path="/" component={Home} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/booking/:bookingID/" component={BookingForm} />

      <Route exact path="/activities" component={Activities} />
      <Route exact path="/activities/:activityID/" component={ActivityDetail} />
      <Route exact path="/about" component={About} />
      <Route exact path="/join" component={Join} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/login/:userID" component={Booking} />
      <Route exact path="/post/:postID/" component={PostDetail} />
    </Router>
  </div>
);

export default BaseRouter;
