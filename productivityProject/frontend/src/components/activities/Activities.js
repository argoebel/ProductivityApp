import React, { Component } from "react";
import { getActivities } from "../../actions/activities";
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";

export class Activities extends Component {
  static propTypes = {
    activities: PropTypes.array.isRequired,
    getActivities: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getActivities();
  }

  render() {
    let orderedActivities = this.props.activities
      .slice()
      .sort((a, b) => new Date(a.startTime) - new Date(b.startTime));

    return (
      <div style={{ width: "20%", textAlign: "center" }}>
        <h2>My Schedule!</h2>
        <div className="border">
          {orderedActivities.map((element, index, array) => {
            let duration =
              new Date(element.endTime).getTime() -
              new Date(element.startTime).getTime();
            let topMargin = 0;
            if (index != 0) {
              topMargin =
                new Date(element.startTime).getTime() -
                new Date(array[index - 1].endTime).getTime();
            }
            const style = {
              height: `${duration / 60000}px`,
              marginTop: `${topMargin / 60000}px`,
              padding: "0",
              fontSize: "10pt",
            };

            return (
              <div
                className="list-group-item list-group-item-action border"
                style={style}
              >
                <a href="#">
                  <p style={{ margin: "0", padding: "0", color: "black" }}>
                    {element.title}
                  </p>
                  <p style={{ margin: "0", padding: "0", color: "black" }}>
                    {dateToReadable(element)}
                  </p>
                  <p style={{ margin: "0", padding: "0", color: "black" }}>
                    {dateToDuration(element)} min
                  </p>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const dateToDuration = (activity) => {
  return (
    (new Date(activity.endTime).getTime() -
      new Date(activity.startTime).getTime()) /
    60000
  );
};

const dateToReadable = (activity) => {
  return `${new Date(activity.startTime).getHours()}:${
    new Date(activity.startTime).getMinutes().toString().length == 1
      ? new Date(activity.startTime).getMinutes().toString() + "0"
      : new Date(activity.startTime).getMinutes()
  }`;
};

const fillCalendar = (activities) => {
  console.log(activities.length);
  console.log("FILLCALENDAR");
  // time first activity occurs on current day in MILLISECONDS
  const earliestActivity = new Date(activities[0].startTime).getTime();

  // time last activity occurs on current day in MILLISECONDS
  const latestActivity = new Date(
    activities[activities.length - 1].endTime
  ).getTime();

  // 8am on current day in MILLISECONDS
  const eightAM = new Date(
    activities[0].startTime.split("T")[1].concat("T8:00:00Z")
  ).getTime();

  // 8pm on current day in MILLISECONDS
  const eightPM = new Date(
    activities[0].endTime.split("T")[1].concat("T20:00:00Z")
  ).getTime();

  // setting boundaries of calendar in MILLISECONDS
  let currentTime = earliestActivity <= eightAM ? earliestActivity : eightAM;
  let endTime = latestActivity >= eightPM ? latestActivity : eightPM;

  // current activity iterator
  let currentActivityIterator = 0;
  let allElements = [];
  while (currentTime <= endTime) {
    // if the time at which a segment will start is equal,
    // the next activity to be appended to the allElements
    // array will be a JSX element containing the activity.

    // if the time at which a segment will start is not equal,
    // the next item to be appended to the allElements array
    // will be a JSX element containing the empty space.
    if (
      currentTime ==
      new Date(activities[currentActivityIterator].startTime).getTime()
    ) {
      // duration in MILLISECONDS
      let duration =
        new Date(activities[currentActivityIterator].endTime).getTime() -
        new Date(activities[currentActivityIterator].startTime).getTime();
      let element = (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          style={{ height: `${duration / 30000}px` }}
        >
          <p>
            {activities[currentActivityIterator].startTime} -{" "}
            {activities[currentActivityIterator].title}
          </p>
        </a>
      );
      allElements.push(element);
      currentTime = new Date(
        activities[currentActivityIterator].endTime
      ).getTime();
      currentActivityIterator++;
    } else {
      let duration =
        new Date(activities[currentActivityIterator].endTime).getTime() -
        currentTime;
      let element = (
        <a
          href="#"
          className="list-group-item list-group-item-action"
          style={{ height: `${duration / 30000}px` }}
        >
          <p>FREE TIME</p>
        </a>
      );
      allElements.push(element);
      currentTime = new Date(
        activities[currentActivityIterator].endTime
      ).getTime();
      currentActivityIterator++;
    }
    if (currentActivityIterator >= activities.length) {
      break;
    }
    return allElements;
  }
};

const mapStateToProps = (state) => ({
  activities: state.activities.activities,
});

export default connect(mapStateToProps, { getActivities })(Activities);
