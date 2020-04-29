import React from "react"
import "./Radiobutton.css"

export default class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: props.value,
      handleChange: props.handleChange
    }

  }
  render() {
    return (
      <div >
        <label className="container">
          {this.state.name}
          <input
            type = "checkbox"
            defaultChecked = {this.state.value}
            onChange={this.state.handleChange}
          />
          <span class="checkmark"></span>
        </label>
      </div>
    )
  }
}


