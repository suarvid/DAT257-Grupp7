import React from "react";
import Home from "./Pages/Home/Home";
import BookingContainer from "./Pages/Booking/BookingContainer";
import Activities from "./Pages/Activities/Activities";
import About from "./Pages/About/About";
import Join from "./Pages/Join/Join";
import ActivityDetail from "./Pages/Activities/ActivityDetailView";
import BookingForm from "./Pages/Booking/BookingForm";
import PostDetail from "./Pages/Home/PostDetailView";
import Instructors from "./Pages/Instructors/Instructors";
import Prices from './Pages/Prices/Prices';
import Schema from './Pages/Schema/schema';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookingConfirmation from "./Pages/BookingConfirmation/BookingConfirmation";
import RedirectToBackend from "./Pages/Login/RedirectToBackend";
import Föreläsningar from './Pages/Lectures/Lectures';
import Erbjudanden from './Pages/Offers/Offers';
import Workshops from './Pages/Workshops/Workshops';

const BaseRouter = () => (
  <div style={{paddingTop:'260px'}}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/boka" component={BookingContainer} />
      <Route exact path="/boka/:bookingID/" component={BookingForm} />
      <Route exact path="/boka/:bookingID/bokningsbekräftelse/" component={BookingConfirmation} />
      <Route exact path="/aktiviteter" component={Activities} />
      <Route exact path="/aktiviteter/:activityID/" component={ActivityDetail} />
      <Route exact path="/om oss" component={About} />
      <Route exact path="/gå med" component={Join} />
      <Route exact path="/admin" component={RedirectToBackend} />
      <Route exact path="/admin/:userID" component={BookingContainer} />
      <Route exact path="/inlägg/:postID/" component={PostDetail} />
      <Route exact path="/inspiratörer" component={Instructors} />
      <Route exact path="/priser" component={Prices} />
      <Route exact path="/schema" component={Schema} />
      <Route exact path="/booking-confirmation" component={BookingConfirmation} />
      <Route exact path="/erbjudanden" component={Erbjudanden} />
      <Route exact path="/föreläsningar" component={Föreläsningar} />
      <Route exact path="/workshops" component={Workshops} />
    </Router>
  </div>
);

export default BaseRouter;
