import React from "react";
import "./Radiobutton.css";

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: props.value,
      text: props.text,
      handleChange: props.handleChange,
      initialCheck: props.initialCheck,
      parentPayment: props.parentPayment,
    };
  }
  render() {

    return (
      <div>
        <label className="container">
          {this.state.text}
          <input
            type="radio"
            name = {this.state.name}
            value = {this.state.value}
            onChange={this.state.handleChange}
            checked={this.state.parentPayment() === this.state.value}
          />
          <span class="checkmark"></span>
        </label>
      </div>
    );
  }
}
