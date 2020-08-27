import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createActivity } from "../../actions/activities";
import { closeActivityModal } from "../../actions/modals";

export class ActivityForm extends Component {
  state = {
    title: "",
    startTime: "",
    endTime: "",
    description: "",
    privateActivity: false,
  };
  static propTypes = {
    createActivity: PropTypes.func.isRequired,
    closeActivityModal: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      title,
      startTime,
      endTime,
      description,
      privateActivity,
    } = this.state;
    const activity = {
      title,
      startTime,
      endTime,
      description,
      privateActivity,
    };
    this.props.createActivity(activity);
    this.setState({
      title: "",
      startTime: "",
      endTime: "",
      description: "",
      privateActivity: false,
    });
  };

  render() {
    const {
      title,
      startTime,
      endTime,
      description,
      privateActivity,
    } = this.state;
    return (
      <div>
        <form
          className="card card-body mt-4 mb-4 w-100"
          onSubmit={this.onSubmit}
        >
          <div className="form-group">
            <label>Activity</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Activity"
              onChange={this.onChange}
              value={title}
              name="title"
            />
          </div>
          <div className="form-group">
            <label>Start Time</label>
            <input
              type="text"
              className="form-control"
              placeholder="Start Time"
              onChange={this.onChange}
              value={startTime}
              name="startTime"
            />
          </div>
          <div className="form-group">
            <label>End Time</label>
            <input
              type="text"
              className="form-control"
              placeholder="End Time"
              onChange={this.onChange}
              value={endTime}
              name="endTime"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              onChange={this.onChange}
              value={description}
              name="description"
            />
          </div>
          <div className="form-group">
            <label htmlFor="privateActivity">Private</label>
            <input
              type="checkbox"
              className="form-control"
              placeholder="End Time"
              id="privateActivity"
              onChange={this.onChange}
              value={privateActivity}
              name="privateActivity"
            />
          </div>
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createActivity, closeActivityModal })(
  ActivityForm
);
