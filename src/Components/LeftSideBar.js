import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class LeftSideBar extends Component {
  render() {
    return (
      <div className="LeftContainer">
        <div>
          <img
            src="https://cdn2.iconfinder.com/data/icons/user-people-4/48/6-512.png"
            className="LImage"
          ></img>
        </div>
        <Button variant="contained" color="secondary">
          Patients
        </Button>
        <br></br>
        <br></br>
        <Button variant="contained">Appointments</Button>
        <br></br>
        <br></br>
        <Button variant="contained">New Patients</Button>
      </div>
    );
  }
}
export default LeftSideBar;
