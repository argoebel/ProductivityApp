import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { registerUser } from "../../actions/auth";
import PropTypes, { element } from "prop-types";
import { connect } from "react-redux";

export class Register extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password2: "",
  };

  static propTypes = {
    registerUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      email,
      password,
      password2,
      first_name,
      last_name,
    } = this.state;
    const newUser = {
      username,
      password,
      email,
      first_name,
      last_name,
    };
    console.log(newUser);
    this.props.registerUser(newUser);
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const {
      username,
      email,
      password,
      password2,
      first_name,
      last_name,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              placeholder="Username"
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="first_name"
              className="form-control"
              id="first_name"
              name="first_name"
              placeholder="First Name"
              onChange={this.onChange}
              value={first_name}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="last_name"
              className="form-control"
              id="last_name"
              name="last_name"
              placeholder="Last Name"
              onChange={this.onChange}
              value={last_name}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              aria-describedby="emailHelp"
              placeholder="Email"
              onChange={this.onChange}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              placeholder="Confirm Password"
              onChange={this.onChange}
              value={password2}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { registerUser })(Register);
