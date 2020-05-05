import React from "react";
import "./BookingConfirmation.css";

export default function BookingConfirmation(props) {
  const { activityName, time, mail } = props.location;
  return (
    <div className="confirmation-container">
      <h2>Tack för din bokning.</h2>
      <h3>{`Du har gjort en bokning av aktivitet ${activityName} vid ${time}.`}</h3>
      <p>{`En bokningsbekräftelse har skickats till ${mail}`}</p>
    </div>
  );
}
