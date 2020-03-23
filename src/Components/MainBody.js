import React, { Component } from "react";
import PatientInfo from "./PatientInfo";
import Button from "@material-ui/core/Button";

class MainBody extends Component {
  render() {
    return (
      <div className="MainContainer">
        <p className="MainPara">
          <span className="span1">Patients</span>
          <input
            type="text"
            placeholder="Search.."
            className="SearchBar"
          ></input>
        </p>
        <PatientInfo name="VAtsal CHheda" dname="Dr Asthana" />
        <PatientInfo name="VAtsal CHheda" dname="Dr Asthana" />
        <PatientInfo name="VAtsal CHheda" dname="Dr Asthana" />
      </div>
    );
  }
}
export default MainBody;
