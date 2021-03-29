import React, { useState, useEffect } from "react";
import apiManager from "./data";
import DriverCard from "./driverCard"

const DriverList = (props) => {
  const [drivers, setDrivers] = useState([]);

  const getDrivers = () => {
    apiManager.getType("drivers").then((r) => {
      r.sort((a, b) => a.firstName.localeCompare(b.firstName));
      setDrivers(r);
    });
  };

  useEffect(() => {
    getDrivers();
  }, []);

  return (
    <>
      <div>
          {drivers.map((driver) => (
            <DriverCard
              key={driver.id}
              driver={driver}
              {...props}
            />
          ))}
        </div>
    </>
  );
};

export default DriverList;
