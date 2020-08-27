import { combineReducers } from "redux";
import activities from "./activities";
import tasks from "./tasks";
import auth from "./auth";
import modals from "./modals";
import clock from "./clock";

export default combineReducers({
  activities,
  tasks,
  auth,
  modals,
  clock,
});
