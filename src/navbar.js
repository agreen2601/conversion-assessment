import React from "react";

const Navbar = (props) => {
  const mode = props.mode;
  const handleModeChange = props.handleModeChange;

  return (
    <>
      <div className="navbar">
        {mode === false ? (
          <div className="dropdown">
            <i id="menuIcon" className="fas fa-bars"></i>
            <div className="dropdown-content">
              <div>Company</div>
              <div onClick={handleModeChange}>Drivers</div>
              <a href="https://en.wikipedia.org/wiki/Semi-trailer_truck">About</a>
            </div>
          </div>
        ) : (
          <div className="dropdown">
            <i id="menuIcon" className="fas fa-bars"></i>
            <div className="dropdown-content">
              <div onClick={handleModeChange}>Company</div>
              <div>Drivers</div>
              <a href="https://en.wikipedia.org/wiki/Semi-trailer_truck">About</a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
