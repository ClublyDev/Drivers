import { useEffect, useState } from "react";

import drivers from "../data/drivers.json";

import Traces from "./Traces";
import Activity from "./Activity";
import { TRACE_START_DATE, TRACE_END_DATE } from "../constants";

// Gets the drivers data from data/drivers.json file.
// Builds up a html table for display all relevant fields:
// Driver Name, Vehicle Reg, Activity, Traces
const Drivers = ({ searchText }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // if no search text set, store json file data to state
    if (searchText.length === 0) {
      setData(drivers.data);
    } else {
      // if search text set, filter the data on the searchText
      // Filter on Driver full name and also Vehicle Reg
      const filteredData = drivers.data.filter((item) => {
        const fullName = item.forename + " " + item.surname;
        return (
          fullName.toLowerCase().includes(searchText.toLowerCase()) ||
          item.vehicleRegistration
            .toLowerCase()
            .includes(searchText.toLowerCase())
        );
      });

      setData(filteredData);
    }
  }, [searchText]);

  return (
    <table className="table mt-1">
      <thead>
        <tr>
          <th>Driver Name</th>
          <th>Vehicle Reg</th>
          <th>Total Activity Duration</th>
          <th>
            <br />
            Traces
            <small style={{ marginLeft: 40 }}>
              ({new Date(TRACE_START_DATE).toDateString()}
              &nbsp;to&nbsp;
              {new Date(TRACE_END_DATE).toDateString()})
            </small>
            <ul className="days-of-week">
              <li>Mon</li>
              <li>Tue</li>
              <li>Wed</li>
              <li>Thu</li>
              <li>Fri</li>
              <li>Sat</li>
              <li>Sun</li>
            </ul>
          </th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((driver) => {
            const driverFullName = `${driver.forename} ${driver.surname}`;
            // return driver properties row
            return (
              <tr key={driver.driverID}>
                <td>{driverFullName}</td>
                <td>{driver.vehicleRegistration}</td>
                <td>
                  <Activity data={driver.traces} />
                </td>
                <td>
                  <Traces data={driver.traces} />
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Drivers;
