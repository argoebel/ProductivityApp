import axios from "axios";
import { GET_TASKS, CREATE_TASK } from "./types";

// GET all tasks with given activity ID
export const getTasks = (id) => (dispatch, getState) => {
  axios.get(`api/tasks/${id}`, tokenConfig(getState)).then((res) => {
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  });
};

// CREATE new task for given activity
export const createTask = (task) => (dispatch, getState) => {
  axios.post("api/task/create", task, tokenConfig(getState)).then((res) => {
    dispatch({
      type: CREATE_TASK,
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
