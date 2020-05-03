import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class AppointmentDay extends Component {

    render(){

        return(
            <div class="AppointmentContainer">
                <p class="Para">
                <span className="span3">APPOINTMENT OF THE DAY</span>
                </p>
                <br></br>
                <br></br>
                <div class="PContainer1">
                <p class="text">Patient Name:</p>
                <p class="text">Time:</p>
                <Button variant="contained" color="secondary" id="TButton">
                        View Profile
                </Button>
                <br></br>
                <br></br>
                <p class="text">Patient Name:</p>
                <p class="text">Time:</p>
                <Button variant="contained" color="secondary" id="TButton">
                        View Profile
                </Button>
            </div>
            </div>
           
        )
    }

}

export default AppointmentDay;