import React from "react";
import "./App.css";
import Nav from "./Components/nav";
import LeftSideBarTherapist from "./Components/LeftSideBarTherapist";
import AppointmentDay from "./Components/AppointmentDay";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Therapist1() {
  return (
    <div className="App">
      <Container fluid className="ContainerPadding">
        <Nav />
        <Row>
          <Col xs={12} md={2} className="Cellpadding">
            <LeftSideBarTherapist />
          </Col>
          <Col xs={12} md={8} className="Cellpadding">
            <AppointmentDay />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Therapist1;
