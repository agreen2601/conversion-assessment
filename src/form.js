import React, { useState, useEffect } from "react";
import apiManager from "./data";

const Form = (props) => {
  const showForm=props.showForm
  const handleShowFormChange = props.handleShowFormChange
  const handleModeChange = props.handleModeChange;
  const [driver, setDriver] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    city: "",
    state: "",
  });

  // Update state of driver upon form field change
  const handleDriverChange = (e) => {
    const stateToChange = { ...driver };
    stateToChange[e.target.id] = e.target.value;
    setDriver(stateToChange);
  };

  // Get all drivers, check if driver already in system, post if not
  const handleSubmit = (e) => {
    e.preventDefault();
    apiManager.getType("drivers").then((allDrivers) => {
      const driverA = allDrivers.find(
        (driverA) =>
          driverA.firstName === driver.firstName &&
          driverA.lastName === driver.lastName &&
          driverA.email === driver.email
      );
      if (driverA === undefined) {
        apiManager.addDriver(driver);
      } else {
        alert("Driver already in database.");
      }
    });
    setTimeout(() => {
      handleModeChange();
    }, 100);
  };

  const [states, setStates] = useState([]);

  const getStates = () => {
    apiManager.getType("states").then((r) => {
      r.sort((a, b) => a.name.localeCompare(b.name));
      setStates(r);
    });
  };

  useEffect(() => {
    getStates();
  }, []);

  return (
    <>
      {showForm === true ? (
        <>
          <i
            id="arrow"
            onClick={handleShowFormChange}
            className="fas fa-chevron-up"
          ></i>
          <form onSubmit={handleSubmit}>
            <div className="formHeader">
              King of the road, money in the bank. Learn more!
            </div>
            <div className="inputsContainer">
              <div>
                <input
                  id="firstName"
                  placeholder="First Name"
                  onChange={handleDriverChange}
                  required
                />
                <input
                  id="lastName"
                  placeholder="Last Name"
                  onChange={handleDriverChange}
                  required
                />
              </div>
              <div>
                <input
                  id="phoneNumber"
                  placeholder="Phone Number"
                  onChange={handleDriverChange}
                  required
                />
                <input
                  id="email"
                  placeholder="Email"
                  onChange={handleDriverChange}
                  required
                />
              </div>
              <div>
                <input
                  id="city"
                  placeholder="City"
                  onChange={handleDriverChange}
                  required
                />
                <select id="state" onChange={handleDriverChange} required>
                  <option aria-label="None" value="" data-name="">
                    State
                  </option>
                  {states ? (
                    states.map((state) => (
                      <option key={state.abbreviation} value={state.name}>
                        {state.name}
                      </option>
                    ))
                  ) : (
                    <></>
                  )}
                </select>
                <div className="submitDiv">
                  <button className="submitButton" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : (
        <i
          id="arrow"
          onClick={handleShowFormChange}
          className="fas fa-chevron-down"
        ></i>
      )}
    </>
  );
};

export default Form;
