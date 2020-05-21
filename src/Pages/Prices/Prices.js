import React from "react";
import "./Prices.css";
import PriceComponent from "./PriceComponent";
import '../../globalstyles.css';

//Temporary data due to us not knowing what should be here.
//Should be replaced with some kind of database preferrably, and a fetch, but it's simulated with a constant atm.
const data = [
  {
    title: "Yoga",
    description: "En timmes Yinyoga eller Yoga för dig som tränar.",
    price: "Ett pass: 99:-",
    multicard: "Klippkort 10 gånger yoga: 900:-",
  },
  {
    title: "Dans",
    description: "En timmes Niadans. ",
    price: "Ett pass: 78:-",
    multicard: "Klippkort 10 gånger dans: 700:-",
  },
];

function Prices() {
  return (
    <div className="textPageContainer">
      <h2> Hela Åsas priser Sommaren 2020</h2>
      {data.map((item) => (
        <div>
        <hr style = {{border:"1px solid gray"}}></hr>
        <PriceComponent data={item} />
        </div>
      ))}
    </div>
  );
}

export default Prices;