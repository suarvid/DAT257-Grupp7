import React from "react";
import "./Prices.css";
import PriceComponent from "./PriceComponent";
import '../../globalstyles.css';

//Detta ska då simulera data som kommer från en en databas eller liknande, men nu hårdkodar jag detta utan att veta varken vilken data som finns eller om vi vi kommer ha
//denna data i databasen eller inte.
// Så detta är förmodligen något en skulle behöva göra om om vi stoppade in det i databasen på riktigt, men det är en  start.
//Bytte även ut x och y mot "riktiga priser" bara för att det ska gå se senare, detta går såklart också lägga variabler för, men vet inte hur detta kommer se ut i framtiden.
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
      {/* här skapar jag komponenter utifrån datan i stället för att skriva datan direkt i koden, det gör det enklare för mig om jag skulle lägga till flera typer
              av pass och priskategorier senare. Så som sagt tidigare så antar jag vilka datafält som kan vara intressanta.*/}
      <h2> Hela Åsas priser Sommaren 2020</h2>
      {/* Förstår om ni inte förstår detta, men det map-funktionen gör är typ samma sak som en for-loop, och det "item" som står där är den informationen som finns
      på varje index i data-listan som jag definierade ovan. Så tänk detta som en for-loop som tar varje index och skickar informationen till pricecomponent. */}
      {data.map((item) => (
        <div>
        <hr style = {{border:"1px solid gray"}}></hr>
        <PriceComponent data={item} />
        </div>
      ))}
    </div>
  );
}

/*
getPrice() {
    return this.state.price;
  }
*/

export default Prices;
/*Class Prices extends react.component{}
  constructor(props){
        super(props);
        this.state = {
          activity: {},
          instructor: {},
          price: {},
        };

    }
}*/
