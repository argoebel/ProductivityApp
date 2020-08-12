import axios from "axios";
import { GET_TASKS, CREATE_TASK } from "./types";

// GET all tasks with given activity ID
export const getTasks = (id) => (dispath) => {
  axios.get(`api/tasks/${id}`).then((res) => {
    dispath({
      type: GET_TASKS,
      payload: res.data,
    });
  });
};

// CREATE new task for given activity
export const createTask = (task) => (dispatch) => {
  axios.post("api/task/create", task).then((res) => {
    dispatch({
      type: CREATE_TASK,
      payload: res.data,
    });
  });
};
