import React from "react";

const DriverCard = (props) => {
  const driver = props.driver;

  return (
    <div className="driverCard">
      <span>{driver.firstName} </span>
      <span>{driver.lastName} </span>
      <span>{driver.phoneNumber} </span>
      <span>{driver.email} </span>
      <span>{driver.city} </span>
      <span>{driver.state} </span>
    </div>
  );
};

export default DriverCard;
