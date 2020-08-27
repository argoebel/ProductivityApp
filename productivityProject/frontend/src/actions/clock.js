import { UPDATE_TIME } from "./types";

// UPDATE Time
export const updateTime = (time) => (dispatch) => {
  dispatch({
    type: UPDATE_TIME,
    payload: time,
  });
};
