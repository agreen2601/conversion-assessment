import "./App.css";
import React, { useState } from "react";
import background from "./IMG/background.jpg";
import logo from "./IMG/logo.png";
import trucker from "./IMG/trucker.jpg";
import Form from "./form";
import Navbar from "./navbar";
import DriverList from "./driverList";

function App(props) {
  // Create 2 modes for different views
  const [mode, setMode] = useState(false);
  const handleModeChange = () => {
    setMode(!mode);
  };

  // Hide and unhide form
  var [showForm, setShowForm] = useState(false);
  const handleShowFormChange = () => {
    setShowForm(!showForm);
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <>
      <Navbar
        mode={mode}
        handleModeChange={handleModeChange}
        {...props}
      ></Navbar>
      <img className="background" src={background} alt="background" />
      <img className="logo" src={logo} alt="logo" />
      <div className="header">
        FORGET EVERYTHING YOU THOUGHT YOU KNEW ABOUT TRUCKING
        <div>
          <button className="quickForm">
            QUICK FORM <i className="far fa-thumbs-up"></i>
          </button>
        </div>
      </div>
      {mode === false ? (
        <>
          <div className="middle">
            <div className="upperMiddle">
              <div className="upperLeft">
                Wanna party this weekend? Work with us, drive like a boss, live
                the good life!
              </div>
              <div className="upperRight">
                <button className="applyButton" onClick={handleShowFormChange}>
                  APPLY NOW <i className="fas fa-external-link-square-alt"></i>
                </button>
                <button className="phoneButton">
                  866-913-1352 <i className="fas fa-phone-alt"></i>
                </button>
                <div>
                  <button className="searchButton">
                    SEARCH JOBS BY AREA <i className="fas fa-search"></i>
                  </button>
                </div>
                <div className="wordsUnderButtons">
                  A long time ago, in a galaxy far, far away... It is a period
                  of civil war. Rebel spaceships, striking from a hidden base,
                  have won their first victory against the evil Galactic Empire.
                  During the battle, Rebel spies managed to steal secret plans
                  to the Empire's ultimate weapon, the Death Star, an armored
                  space station with enough power to destroy an entire planet.
                  Pursued by the Empire's sinister agents, Princess Leia races
                  home aboard her starship, custodian of the stolen plans that
                  can save her people and restore freedom to the galaxy....
                </div>
              </div>
            </div>
            <div className="lowerMidSection">
              <img className="trucker" src={trucker} alt="trucker" />
              <div className="bulletsDiv">
                Wise Words
                <ul className="bullets">
                  <li>
                    “You know, I got a great idea for a cologne. ‘The Beach’.
                    You spray it on and you smell like you just came home from
                    the beach.” — Kramer
                  </li>
                  <li>
                    “Hey, how come people don’t have dip for dinner? Why is it
                    only a snack, why can’t it be a meal, you know? I don’t
                    understand stuff like that.” — Puddy
                  </li>
                  <li>
                    “Tuesday has no feel. Monday has a feel, Friday has a feel,
                    Sunday has a feel.” — Newman
                  </li>
                  <li>asdlkfjl</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="formDiv">
            <Form
              showForm={showForm}
              handleModeChange={handleModeChange}
              handleShowFormChange={handleShowFormChange}
              {...props}
            ></Form>
          </div>
        </>
      ) : (
        <DriverList></DriverList>
      )}
    </>
  );
}

export default App;
