import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { loginUser } from "../../actions/auth";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser })(Login);
