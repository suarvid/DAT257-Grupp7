import React from "react";
import "./BookingConfirmation.css";

export default function BookingConfirmation(props) {
  const { activityName, location, date, mail } = props.location;
  return (
    <div className="confirmation-container">
      <h2>Tack för din bokning.</h2>
      <h3>{`Du har gjort en bokning av aktivitet ${activityName}. Plats: ${location},
      ${"datum:"} ${date}`}</h3>
      <p>{`En bokningsbekräftelse har skickats till ${mail}`}</p>
    </div>
  );
}
