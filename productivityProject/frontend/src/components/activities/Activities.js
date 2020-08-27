import React, { Component } from "react";
import { getActivities } from "../../actions/activities";
import { openTaskModal, closeTaskModal } from "../../actions/modals";
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TaskForm from "./TaskForm";

export class Activities extends Component {
  static propTypes = {
    activities: PropTypes.array.isRequired,
    getActivities: PropTypes.func.isRequired,
    modals: PropTypes.object.isRequired,
    openTaskModal: PropTypes.func.isRequired,
    closeTaskModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getActivities();
  }

  toggleTaskPopup = (elementID) => {
    if (!this.props.modals.taskModalOpen) {
      console.log(elementID);
      this.props.openTaskModal(elementID);
    }
  };

  toggleActivityPopup = (id) => {};

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
                onClick={() => this.toggleTaskPopup(element.id)}
                name={element.id}
              >
                {this.props.modals.modal != element.id ? (
                  <div>
                    <p
                      style={{ margin: "0", padding: "0", color: "black" }}
                      name={element.id}
                    >
                      {element.title}
                    </p>
                    <p
                      style={{ margin: "0", padding: "0", color: "black" }}
                      name={element.id}
                    >
                      {dateToReadable(element)}
                    </p>
                    <p
                      style={{ margin: "0", padding: "0", color: "black" }}
                      name={element.id}
                    >
                      {dateToDuration(element)} min
                    </p>
                  </div>
                ) : (
                  <TaskForm />
                )}
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
  return `${
    new Date(activity.startTime).getHours() +
      new Date(activity.startTime).getTimezoneOffset() / 60 >
    12
      ? (new Date(activity.startTime).getHours() +
          new Date(activity.startTime).getTimezoneOffset() / 60) %
        12
      : new Date(activity.startTime).getHours() +
        new Date(activity.startTime).getTimezoneOffset() / 60
  }:${
    new Date(activity.startTime).getMinutes().toString().length == 1
      ? new Date(activity.startTime).getMinutes() + "0"
      : new Date(activity.startTime).getMinutes()
  }${
    new Date(activity.startTime).getHours() +
      new Date(activity.startTime).getTimezoneOffset() / 60 >
    12
      ? " pm"
      : " am"
  }`;
};

const mapStateToProps = (state) => ({
  activities: state.activities.activities,
  modals: state.modals,
});

export default connect(mapStateToProps, {
  getActivities,
  openTaskModal,
  closeTaskModal,
})(Activities);
