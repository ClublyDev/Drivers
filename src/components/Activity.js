import { useEffect, useState } from "react";
import { capitaliseFirstLetter } from "../helpers";

/// Returns the Activity html showing Total Activity Duration: eg 148 mins
/// and also a breakdown of totals by group eg (Drive 108) (Rest 20) (Work 12) (Available 8)
const Activity = ({ data }) => {
  // Create a dictionary (object) to hold keys: activity types + values: total duration
  const [activityGroupsDict, setGroupsActivityDict] = useState({});
  const [totalActivityDuration, setTotalActivityDuration] = useState(0);

  useEffect(() => {
    var total = 0;
    var dict = {};

    // loop through the prop data and store the running totals
    // of group activities + total duration
    data.forEach((item) => {
      item.activity.forEach((info) => {
        total += info.duration;

        if (!dict[info.type]) {
          dict[info.type] = Number(info.duration);
        } else {
          dict[info.type] += Number(info.duration);
        }
      });
    });

    setTotalActivityDuration(total);
    setGroupsActivityDict(dict);
  }, [data]);

  // Get the html markup of group activities from the dictionary for display eg: (Drive 108)
  const getActivities = () => {
    let content = [];
    for (var key in activityGroupsDict) {
      content.push(
        `(${capitaliseFirstLetter(key)} ${activityGroupsDict[key]})  `
      );
    }

    return content;
  };

  return (
    <div>
      {totalActivityDuration} mins
      <br />
      <small>{getActivities()}</small>
    </div>
  );
};

export default Activity;
