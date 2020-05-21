import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";

export default function BookingItem(props) {
  const {
    activityName,
    date,
    time,
    instructorName,
    locationName,
    remainingSpots,
    isBookable,
    onClick,
  } = props;

  return (
    <div className="bookingcomponent">
      <div>
        <div className="content">
          <h3 style={{ fontSize: 16, marginLeft: 0, paddingLeft: 0, marginBottom: 10 }}>{`${activityName} ${date} ${time}`}</h3>
        </div>
        <div className="content">
          <p>{`${"Instruktör:"} ${instructorName}`}</p>
        </div>
        <div className="content">
          <p>{`${"Plats:"} ${locationName}`}</p>
        </div>
        <div className="content">
          <p>{`${"Lediga platser"} ${remainingSpots}`}</p>
        </div>
      </div>
      <div style={{ float: "right", marginRight: 0, marginBottom: 40 }}>
        <button
          className="primary_button_large"
          onClick={onClick}
          disabled={!isBookable}
        >
          {isBookable ? "Boka" : "Fullt"}
        </button>
      </div>
    </div>
  );
}
