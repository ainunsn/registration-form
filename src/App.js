import React from "react";
import FormA from "./components/FormA";
import FormB from "./components/FormB";
import Button from "./components/Button";
import Confirmation from "./components/Confirmation";

import "./App.css";
import Thanks from "./components/Thanks";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      firstname: "",
      lastname: "",
      jobdesc: [
        {
          id: Math.floor(Math.random() * 101).toString(),
          value: "",
          del: false,
        },
      ],
      gender: "Male",
      email: "",
      laptop: true,
      address: "",
      mobile_number: "",
      page: 1,
      errorMessage: "",
    };
  }

  saveToLocalStorage = () => {
    const {
      firstname,
      lastname,
      jobdesc,
      gender,
      email,
      laptop,
      address,
      mobile_number,
    } = this.state;

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("jobdesc", JSON.stringify(jobdesc));
    localStorage.setItem("gender", gender);
    localStorage.setItem("email", email);

    localStorage.setItem("laptop", laptop);
    localStorage.setItem("address", address);
    localStorage.setItem("mobile_number", mobile_number);
  };

  handleChange = (event, id) => {
    const { name, value } = event.target;
    if (name === "jobdesc") {
      const currentJobDesc = this.state.jobdesc;
      const index = currentJobDesc.findIndex((item) => item.id === id);

      currentJobDesc[index].value = value;

      this.setState({ jobdesc: currentJobDesc });
    } else if (name === "laptop") {
      this.setState({ laptop: !this.state.laptop });
    } else {
      this.setState({ [name]: value });
    }

    this.setState({ errorMessage: "" });
  };

  nextStep = () => {
    const validStep = this.stepValidation();
    if (validStep) {
      const { step } = this.state;
      this.setState({ step: step + 1 });
      this.saveToLocalStorage();
    } else {
      this.setState({ errorMessage: "Please fill the entire form" });
    }
  };

  back = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  addJobdesc = () => {
    const currentInput = this.state.jobdesc;
    const inputAddition = {
      id: Math.floor(Math.random() * 101).toString(),
      value: "",
      del: true,
    };
    currentInput.push(inputAddition);
    this.setState({ jobdesc: currentInput });
  };

  deleteJobDesc = (id) => {
    const currentInput = this.state.jobdesc;
    const index = currentInput.findIndex((item) => item.id === id);
    currentInput.splice(index, 1);
    this.setState({ jobdesc: currentInput });
  };

  submit = () => {
    this.setState(
      {
        page: 2,
      },
      () => {
        localStorage.removeItem("firstname");
        localStorage.removeItem("lastname");
        localStorage.removeItem("jobdesc");
        localStorage.removeItem("gender");
        localStorage.removeItem("email");
        localStorage.removeItem("laptop");
        localStorage.removeItem("address");
        localStorage.removeItem("mobile_number");
      }
    );
  };

  stepValidation = () => {
    const {
      step,
      firstname,
      lastname,
      jobdesc,
      gender,
      email,
      laptop,
      address,
      mobile_number,
    } = this.state;

    function jobVal() {
      for (let i = 0; i < jobdesc.length; i++) {
        if (!jobdesc[i].value.length) {
          return false;
        }
      }
      return true
    }

    if (step === 1) {
      if (
        firstname.length &&
        lastname.length &&
        gender.length &&
        email.length && jobVal()
      ) {
        return true;
      }
    } else if (step === 2) {
      if (address.length && mobile_number.length) {
        return true;
      }
    }
  };

  form = () => {
    const {
      step,
      firstname,
      lastname,
      jobdesc,
      gender,
      email,
      laptop,
      address,
      mobile_number,
    } = this.state;
    return (
      <div className="form-container">
        {step === 1 ? (
          <FormA
            firstname={firstname}
            lastname={lastname}
            jobdesc={jobdesc}
            gender={gender}
            email={email}
            handleChange={this.handleChange}
            addJobdesc={this.addJobdesc}
            deleteJobDesc={this.deleteJobDesc}
          />
        ) : step === 2 ? (
          <FormB
            laptop={laptop}
            address={address}
            mobile_number={mobile_number}
            handleChange={this.handleChange}
          />
        ) : (
          <Confirmation
            firstname={firstname}
            lastname={lastname}
            jobdesc={jobdesc}
            gender={gender}
            email={email}
            laptop={laptop}
            address={address}
            mobile_number={mobile_number}
          />
        )}

        <div className="button-container">
          {step === 1 ? null : (
            <Button steps={this.back} text={"Back"} step="back" />
          )}

          {step === 3 ? (
            <Button text={"Submit"} type={"submit"} steps={this.submit} />
          ) : (
            <Button steps={this.nextStep} text={"Next"} />
          )}
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="App">
        {this.state.errorMessage.length ? (
          <div className="error">
            <p>{this.state.errorMessage}</p>
          </div>
        ) : null}

        {this.state.page === 1 ? this.form() : <Thanks />}
      </div>
    );
  }
}

export default App;
