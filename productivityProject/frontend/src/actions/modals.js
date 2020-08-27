import {
  OPEN_TASK_MODAL,
  CLOSE_TASK_MODAL,
  OPEN_ACTIVITY_MODAL,
  CLOSE_ACTIVITY_MODAL,
} from "./types";

// OPEN Task modal
export const openTaskModal = (openedActivityID) => (dispatch, getState) => {
  dispatch({
    type: OPEN_TASK_MODAL,
    payload: openedActivityID,
  });
};

// CLOSE Task modal
export const closeTaskModal = (closedActivityID) => (dispatch, getState) => {
  dispatch({
    type: CLOSE_TASK_MODAL,
    payload: closedActivityID,
  });
};

// OPEN Activity modal
export const openActivityModal = () => (dispatch) => {
  dispatch({
    type: OPEN_ACTIVITY_MODAL,
  });
};

// CLOSE Activity modal
export const closeActivityModal = () => (dispatch) => [
  dispatch({
    type: CLOSE_ACTIVITY_MODAL,
  }),
];
