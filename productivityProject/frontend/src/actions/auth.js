import axios from "axios";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  USER_LOADED,
  USER_LOADING,
  LOGOUT_SUCCESS,
} from "./types";
import auth from "../reducers/auth";

// REGISTER user
export const registerUser = ({
  username,
  email,
  first_name,
  last_name,
  password,
}) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    username,
    first_name,
    last_name,
    email,
    password,
  });

  console.log(body);

  axios.post("/api/auth/register", body, config).then((res) => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
  });
};

// LOGIN user
export const loginUser = ({ username, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ username, password });

  axios.post("api/auth/login", body, config).then((res) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  });
};

// LOGOUT user
export const logoutUser = () => (dispatch, getState) => {
  axios.post("api/auth/logout", null, tokenConfig(getState)).then((res) => {
    dispatch({
      type: LOGOUT_SUCCESS,
      payload: res.data,
    });
  });
};

// LOAD user
export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: USER_LOADING });

  axios.get("api/auth/user", tokenConfig(getState)).then((res) => {
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  });
};

export const tokenConfig = (getState) => {
  const token = getState().auth.token;
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
