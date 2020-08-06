import axios from "axios";
import { GET_ACTIVITIES, CREATE_ACTIVITY } from "./types";

// GET all activities
export const getActivities = () => (dispatch) => {
  axios.get("/api/activities").then((res) => {
    dispatch({
      type: GET_ACTIVITIES,
      payload: res.data,
    });
  });
};

// CREATE new activity
export const createActivity = (activity) => (dispatch) => {
  axios.post("/api/activities", activity).then((res) => {
    dispatch({
      type: CREATE_ACTIVITY,
      payload: res.data,
    });
  });
};
