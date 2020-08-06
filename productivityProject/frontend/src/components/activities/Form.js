import React, { Component } from "react";
import { connect } from "react-redux";

export default class Form extends Component {
  render() {
    return (
      <div>
        <form className="card card-body mt-4 mb-4 w-100">
          <div className="form-group">
            <label>Task</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Task"
            />
          </div>
          <div className="form-group">
            <label>Time</label>
            <input type="text" className="form-control" placeholder="Time" />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              className="form-control"
              placeholder="Duration"
            />
          </div>
        </form>
      </div>
    );
  }
}
