import React from "react";
import "./Prices.css";
//Nedan ser ni att pricecomponent tar emot props i sin function, vilket innebär att vi kan skicka information till den.
//Sedan plockar vi bara ut den informationen vi vet är skickad/ vi förväntar oss ska komma.
function PriceComponent(props) {
  return (
    <div className="activity">
      <h4>{props.data.title}</h4>
      <p>{props.data.description}</p>
      <p>{props.data.price}</p>
      <p>{props.data.multicard}</p>
    </div>
  );
}

export default PriceComponent;
