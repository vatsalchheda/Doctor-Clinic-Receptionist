import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Button from "@material-ui/core/Button";

export default class Schedule extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    // const url = "http://127.0.0.1:8000/book-appointment/";
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data.results[0], loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }
    const Therapists = [{ title: this.state.person.name.first }];
    const Patients = [{ title: this.state.person.name.last }];
    const Type = [{ title: "X-ray" }, { title: "ENT" }, { title: "General" }];

    const Dates = [
      { title: "25th March" },
      { title: "26th March" },
      { title: "27th March" },
    ];

    const Slots = [
      { title: "5:30-6:30" },
      { title: "6:30-7:30" },
      { title: "7:30-8:30" },
    ];
    return (
      <div class="ScheduleContainer ">
        <div>{this.state.person.name.first}</div>
        <div className="MainPara">
          <span className="span1">SCHEDULE APPOINTMENTS</span>
          <br></br>
          <br></br>
          <br></br>
          <div className="defgrey appointmentbox">
            <p>PATIENT:</p>
            <Autocomplete
              id="combo-box-demo"
              options={Patients}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Patient" variant="outlined" />
              )}
            />
            <br></br>
            <p>THERAPIST:</p>
            <Autocomplete
              id="combo-box-demo"
              options={Therapists}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Therapist" variant="outlined" />
              )}
            />
            <br></br>

            <p>TYPE OF APPOINTMENT:</p>
            <Autocomplete
              id="combo-box-demo"
              options={Type}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Type" variant="outlined" />
              )}
            />
            <br></br>
            <div style={{ float: "left" }}>
              <p>DATE:</p>
              <Autocomplete
                id="combo-box-demo"
                options={Dates}
                getOptionLabel={(option) => option.title}
                style={{ width: 150 }}
                renderInput={(params) => (
                  <TextField {...params} label="Date" variant="outlined" />
                )}
              />
            </div>
            <div style={{ float: "right", marginRight: "45px" }}>
              <p>SLOT:</p>
              <Autocomplete
                id="combo-box-demo"
                options={Slots}
                getOptionLabel={(option) => option.title}
                style={{ width: 150 }}
                renderInput={(params) => (
                  <TextField {...params} label="Slot" variant="outlined" />
                )}
              />
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button
              variant="contained"
              color="secondary"
              className="defred "
              style={{ marginLeft: "35%" }}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
