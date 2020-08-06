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
    console.log(this.props.activities);
    return (
      <div>
        {this.props.activities.map((activity) => (
          <a href="#" className="list-group-item list-group-item-action">
            <p>
              {activity.time} - {activity.title}
            </p>
          </a>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activities: state.activities.activities,
});

export default connect(mapStateToProps, { getActivities })(Activities);
