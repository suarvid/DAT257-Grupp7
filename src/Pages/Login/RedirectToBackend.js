import React, { Component } from "react";

export default class RedirectToBackend extends Component {
  componentDidMount() {
    window.location.replace("http://127.0.0.1:8000/admin");
  }

  render() {
    return <></>;
  }
}
