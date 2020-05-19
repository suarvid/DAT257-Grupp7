import React from "react";
import "./BookingConfirmation.css";
import "./../../globalstyles.css"

export default class BookingConfirmation extends React.Component {
  constructor(props){
    super(props);
    const data = this.props.location
    this.state = {
      data: data
    }
    this.goBack = this.goBack.bind(this);
  }

  goBack(){
    this.props.history.push({
      pathname: "./",
      state: this.state.data
    })
  }

  render(){
  const { activityName, location, time, mail } = this.state.data;
  return (
    <div className="confirmation-container">
      <h2>Tack för din bokning.</h2>
      <h3>{`Du har gjort en bokning av aktivitet ${activityName}. Plats: ${location},
       ${time}`}</h3>
      <p>{`En bokningsbekräftelse har skickats till ${mail}`}</p>
      <button 
      className = "primary_button_large"
      style = {{marginTop:40}}
      onClick = {this.goBack}>
        Tillbaka till start</button>
    </div>
  );
  }
}
