import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTime } from "../../actions/clock";
import PropTypes from "prop-types";

export class Clock extends Component {
  state = {
    date: new Date(),
  };

  static propTypes = {
    updateTime: PropTypes.func.isRequired,
    date: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.props.updateTime(this.state.date);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
    if (this.state.date.getSeconds() == 0) {
      this.props.updateTime(this.state.date);
    }
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  date: state.date,
});

export default connect(mapStateToProps, { updateTime })(Clock);
