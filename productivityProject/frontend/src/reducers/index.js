import { combineReducers } from "redux";
import activities from "./activities";
import tasks from "./tasks";

export default combineReducers({
  activities,
  tasks,
});
