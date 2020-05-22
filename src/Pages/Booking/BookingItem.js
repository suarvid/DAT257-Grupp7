import React from "react";
import "../../../src/globalstyles.css";
import "../Booking/Booking.css";
import CardWrapper from "../../CardWrapper/CardWrapper";

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
    <CardWrapper>
      <div className="bookingcomponent" style={{ position: 'relative' }}>
        <div>
          <div className="content" style={{marginBottom: 14}}>
            <h3
              style={{
                fontSize: 18,
                marginLeft: 0,
                paddingLeft: 0,
                marginBottom: '12 !important',
              }}
            >{`${activityName}`}</h3>
          </div>
          <div className="content">
            <p>{`${"Tid:"} ${date} ${time}`}</p>
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
        <div style={{ position: 'absolute', right: 20, bottom: 20 }}>
          <button
            className="primary_button_large"
            onClick={onClick}
            disabled={!isBookable}
          >
            {isBookable ? "Boka" : "Fullt"}
          </button>
        </div>
      </div>
    </CardWrapper>
  );
}
