import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createTask } from "../../actions/tasks";
import { closeTaskModal } from "../../actions/modals";

export class TaskForm extends Component {
  state = {
    item: "",
    complete: false,
  };
  static propTypes = {
    modals: PropTypes.object.isRequired,
    createTask: PropTypes.func.isRequired,
    closeTaskModal: PropTypes.func.isRequired,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { item, complete } = this.state;
    const activity = this.props.modals.modal;
    const task = { item, complete, activity };
    this.props.createTask(task);
    this.setState({
      item: "",
      complete: false,
    });
    this.props.closeTaskModal();
  };

  handleClose = (e) => {
    console.log("CLOSE");
    this.props.closeTaskModal();
  };

  render() {
    const { item, complete } = this.state;
    return (
      <div>
        <div className="card card-body mt-4 mb-4 w-100">
          <span className="close" onClick={this.handleClose}>
            ×
          </span>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Task</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Activity"
                onChange={this.onChange}
                value={item}
                name="item"
              />
            </div>
            <div className="form-group">
              <label htmlFor="complete">Complete</label>
              <input
                type="checkbox"
                className="form-control"
                placeholder="End Time"
                id="complete"
                onChange={this.onChange}
                value={complete}
                name="complete"
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  modals: state.modals,
});

export default connect(mapStateToProps, { createTask, closeTaskModal })(
  TaskForm
);
