import React from "react"
import "./TextField.css"

export default class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      type: props.type,
      value: props.value,
      label: props.label,
      placeholder: props.placeholder,
      handleChange: props.handleChange
    }

  }
  render() {
    return (
      <div>
        <label>
          {this.state.label}
          <div className="field">
          <input
            type={this.state.type}
            name={this.state.name}
            value={this.state.value}
            placeholder={this.state.placeholder}
            onChange={this.state.handleChange}
          />
          </div>
        </label>
      </div>
    )
  }
}


