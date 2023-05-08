import "../App.css";
import { TRACE_START_DATE, TRACE_END_DATE } from "../constants";

// Returns boxes to represent each day of the week.
// If the driver has a trace for that day with activities, the box will be filled in green, otherwise its left clear.
const Traces = (props) => {
  const startDate = new Date(TRACE_START_DATE);
  const endDate = new Date(TRACE_END_DATE);
  const diffInMs = new Date(endDate) - new Date(startDate);
  // get number of days between start and end date
  const numDays = diffInMs / (1000 * 60 * 60 * 24);

  // create array to hold each date box (intended 7 days between Start and End)
  const dateBoxesArray = [];
  // create array to hold each date that has activity (in UNIX timestamp format)
  const activityDatesArray = [];

  // store all activity dates from props data in array, populate array with timestamp of given date
  props.data.forEach((item) => {
    activityDatesArray.push(new Date(item.date).getTime());
  });

  // loop around each day in the range
  // create date box for each iteraton (intended to be 7 days so this builds 7 boxes)
  // and set as filled if activity on that date is found
  for (let i = 0; i < numDays + 1; i++) {
    // get a new date that will be incremented - initialise it to our start date
    const date = new Date(startDate);
    // increment the date by the current index of this loop to get the date for this box
    date.setDate(date.getDate() + i);

    // init a className for this box (we will later add a filled class to it if its filled)
    let className = "date-box";

    // get the unix timestamp for this box from our calculated date
    const timeStamp = new Date(date).getTime();

    // check if the activity dates array contains this boxes timestamp
    if (activityDatesArray.includes(timeStamp)) {
      // if today has activity add the filled class (to make the box bg green)
      className += " filled";
    }

    // create a date box div and add to the array of boxes
    dateBoxesArray.push(<div className={className} key={i}></div>);
  }

  return (
    <div
      style={{
        width: 350,
        overflow: "visible",
        paddingTop: 10,
      }}
    >
      {dateBoxesArray}
    </div>
  );
};

export default Traces;
