import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTasks } from "../../actions/tasks";

export class CompleteTasks extends Component {
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    getTasks: PropTypes.func.isRequired,
  };

  componentDidMount() {
    console.log("HELLO");
    this.props.getTasks(1);
  }

  render() {
    return (
      <div className="card card-body mt-4 mb-4 w-100">
        <h2>Complete Tasks!</h2>
        <ul>
          {this.props.tasks.map((task) =>
            task.complete ? <li>{task.item}</li> : " "
          )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapping state");
  console.log(state);
  return {
    tasks: state.tasks.tasks,
  };
};

export default connect(mapStateToProps, { getTasks })(CompleteTasks);
