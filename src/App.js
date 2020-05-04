import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Receptionist3 from "./receptionist3";
import Receptionis1 from "./receptionis1";
import Receptionist2 from "./receptionist2";
import patientprofile from "./patientprofile";
import Therapist1 from "./therapist1";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
class App extends React.Component {
  render = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Receptionis1} />
            <Route exact path="/appoinment" component={Receptionist2} />
            <Route exact path="/addpatient" component={Receptionist3} />
            <Route exact path="/profile" component={patientprofile} />
            <Route exact path="/therapist1" component={Therapist1} />
          </Switch>
        </div>
      </Router>
    );
  };
}

export default App;
