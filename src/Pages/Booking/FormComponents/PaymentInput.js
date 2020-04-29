import React from "react"
import RadioButton from "./RadioButton";
import "./PaymentInput.css"


export default class PaymentInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: props.name,
          type: props.type,
          value: props.value,
          label: props.label,
          handleChange: props.handleChange
        }
    
      }
      render() {
        return (
          <div className = "container">
            <label>
              {this.state.label}
            </label>
            <RadioButton
               name="Betala med swish"
               value="false"
               onChange={this.state.handleChange}
              />
            <RadioButton 
               name="Betala på plats"
               value="true"
               onChange={this.state.handleChange}
            />
           
          </div>
        )
      }
    }
    
    