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

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    this.props.loginUser(user);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const { username, password } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              name="username"
              type="text"
              className="form-control"
              id="username"
              placeholder="Username"
              onChange={this.onChange}
              value={username}
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
              onChange={this.onChange}
              value={password}
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
