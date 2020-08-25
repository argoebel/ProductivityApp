import React, { Component } from "react";
import PropTypes from "prop-types";
import { logoutUser } from "../../actions/auth";
import { connect } from "react-redux";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;

    let toolbarContent = undefined;
    if (isAuthenticated == true) {
      toolbarContent = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={this.props.logoutUser}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      toolbarContent = (
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Register
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      );
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Time Chaser
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          {toolbarContent}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Header);
