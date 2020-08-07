import React, { Component } from "react";
import { getActivities } from "../../actions/activities";
import PropTypes from "prop-types";
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
      .sort((a, b) => new Date(a.time) - new Date(b.time));

    orderedActivities.forEach((element) => {
      console.log("HELLLO");
      console.log(new Date(element.time).getTime());
    });

    return (
      <div>
        {orderedActivities.map((activity) => (
          <a
            href="#"
            className="list-group-item list-group-item-action"
            style={durationStyling(activity.duration)}
          >
            <p>
              {timeToString(activity.time)} - {activity.title}
            </p>
            <p>{activity.duration}</p>
          </a>
        ))}
      </div>
    );
  }
}

const timeToString = (time) => {
  const timeDate = new Date(time);
  const offset = getOffset();
  return `${(timeDate.getHours() + offset + 1) % 12}:${
    timeDate.getMinutes().toString().length === 2
      ? timeDate.getMinutes()
      : timeDate.getMinutes() + "0"
  }${(timeDate.getHours() + offset + 1) % 24 >= 12 ? "pm" : "am"}`;
};

const durationStyling = (duration) => {
  const offset = getOffset();
  const minutes =
    new Date(
      "1970-01-01T".concat(duration.slice(3)).concat(":00Z")
    ).getMinutes() +
    ((new Date(
      "1970-01-01T".concat(duration.slice(3)).concat(":00Z")
    ).getHours() +
      offset +
      1) %
      24) *
      60;
  console.log(minutes);
  return { height: `${minutes * 1.5}px` };
};

const durationToMinute = (duration) => {
  const offset = getOffset();
  const minutes =
    new Date(
      "1970-01-01T".concat(duration.slice(3)).concat(":00Z")
    ).getMinutes() +
    ((new Date(
      "1970-01-01T".concat(duration.slice(3)).concat(":00Z")
    ).getHours() +
      offset +
      1) %
      24) *
      60;
  return minutes;
};

const timeToMinute = (time) => {
  return ((new Date(time).getHours() + offset + 1) % 24) * 60;
};

const fillTime = (activities) => {
  console.log(activities);
  const offset = getOffset();
  // min represents either 8 am OR the earlier hour of the earliest activity IN MINUTES
  let min =
    (new Date(activities[0].time).getHours() + offset + 1) % 24 <= 8
      ? timeToMinute(activities[0])
      : timeToMinute(activities[0].time.split("T")[1].concat("T8:00:00Z"));
  console.log("min:", min);
  // max represents 8 pm OR one hour later than the LAST activity IN MINUTES
  let max =
    (new Date(activities[activities.length - 1].time).getHours() + offset + 1) %
      24 >=
    20
      ? timeToMinute(activities[activities.length - 1].time) + 60
      : 20 * 60;
  console.log("max: ", max);

  let prevEnding = min;
  activities.forEach((element) => {
    const activeMinutes = durationToMinute(element.duration);

    // if the time the previous activity ends is NOT the same as the start of the next activity
    // there must be empty space filled inbetween
    if (prevEnding != timeToMinute(element.time)) {
      const startActivity = timeToMinute(element.time);
      const inactiveMinutes = startActivity - prevEnding;
      const endActivity = startActivity + activeMinutes;
      prevEnding = endActivity;
      return (
        <div>
          <a
            href="#"
            className="list-group-item list-group-item-action"
            style={{ height: `${inactiveMinutes * 1}px` }}
          >
            <p>FREE TIME</p>
          </a>
          <a
            href="#"
            className="list-group-item list-group-item-action"
            style={{ height: `${activeMinutes * 1}px` }}
          >
            <p>
              {timeToString(element.time)} - {element.title}
            </p>
            <p>{activity.duration}</p>
          </a>
        </div>
      );
    }
    prevEnding = prevEnding + activeMinutes
    return ()
  });
};

const getOffset = () => {
  return new Date().getTimezoneOffset() / 60;
};

const mapStateToProps = (state) => ({
  activities: state.activities.activities,
});

export default connect(mapStateToProps, { getActivities })(Activities);
