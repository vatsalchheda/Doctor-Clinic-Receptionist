import React, { Component } from "react";
import { render } from "react-dom";
import Button from "@material-ui/core/Button";

class PatientInfo extends Component {
  render() {
    return (
      <div className="PContainer">
        <div className="PImage"></div>
        <div className="PInfo">
          <p>{this.props.name}</p>
          <p>{this.props.dname}</p>
          <p>
            lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
            dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit
            ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum
            dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet
          </p>
          <br></br>
          <Button variant="contained" color="secondary">
            Profile
          </Button>
        </div>
      </div>
    );
  }
}

export default PatientInfo;
