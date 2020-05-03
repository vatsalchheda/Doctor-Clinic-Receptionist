import React from "react";
import "./App.css";
import Nav from "./Components/nav";
import LeftSideBar from "./Components/LeftSideBar";
import Requests from "./Components/Requests";
import Schedule from "./Components/Schedule";
import RightSideBar from "./Components/RightSideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Receptionist2() {
  return (
    <div className="App">
      <Container fluid className="ContainerPadding">
        <Nav />
        <Row>
          <Col xs={12} md={2} className="Cellpadding">
            <LeftSideBar className1="defred"/>
          </Col>
          <Col xs={12} md={4} className="Cellpadding">
            <br></br>
            <Requests />
          </Col>
          <Col xs={12} md={4} className="Cellpadding">
            <br></br>
            <Schedule />
          </Col>
          <Col xs={12} md={2} className="Cellpadding">
            <RightSideBar
              time="18:00"
              date="24-03-20"
              day="Tuesday"
              queue="1"
              name="Samit Kapadia"
              docname="Dr. Hati"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Receptionist2;
