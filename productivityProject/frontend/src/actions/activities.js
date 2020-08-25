import axios from "axios";
import { GET_ACTIVITIES, CREATE_ACTIVITY } from "./types";

// GET all activities
export const getActivities = () => (dispatch, getState) => {
  axios.get("/api/activities", tokenConfig(getState)).then((res) => {
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  });
};

// CREATE new activity
export const createActivity = (activity) => (dispatch, getState) => {
  axios
    .post("/api/activities/create", activity, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: CREATE_ACTIVITY,
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
