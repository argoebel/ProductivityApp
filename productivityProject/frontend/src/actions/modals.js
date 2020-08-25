import { OPEN_TASK_MODAL, CLOSE_TASK_MODAL } from "./types";

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
