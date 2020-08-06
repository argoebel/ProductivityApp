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
    return (
      <a href="#" class="list-group-item list-group-item-action">
        TEST
      </a>
    );
  }
}

const mapStateToProps = () => ({
  activities: state.activities.activities,
});

export default connect(mapStateToProps, { getActivities })(Activities);
