import React from "react";
import "./Prices.css";

function Prices() {
    return (
            <div className="price-container">
                <h2> Hela Åsas priser Sommaren 2020</h2>
                <div className="activity">
                  <h4>Yoga</h4>
                  <p>En timmes pass av Ying yoga eller Yang yoga. </p>
                  <p>Ett pass this.props.price:-</p>
                  <p>Klippkort 10 ggr yoga Y:-</p>

                </div>
                <div className="activity">
                  <h4>Dans</h4>
                  <p>En timmes dans av typen Zumba. </p>
                  <p>Ett pass X :-</p>
                  <p>Klippkort 10 ggr yoga Y:-</p>
                </div>

              

            </div>
    ) 
}

/*
getPrice() {
    return this.state.price;
  }
*/ 
export default Prices
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