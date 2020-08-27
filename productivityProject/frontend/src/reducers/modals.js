import {
  OPEN_TASK_MODAL,
  CLOSE_TASK_MODAL,
  OPEN_ACTIVITY_MODAL,
  CLOSE_ACTIVITY_MODAL,
} from "../actions/types";

const initialState = {
  taskModalOpen: false,
  activityModalOpen: false,
  modal: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_TASK_MODAL:
      return {
        ...state,
        taskModalOpen: true,
        modal: action.payload,
      };
    case CLOSE_TASK_MODAL:
      return {
        ...state,
        taskModalOpen: false,
        modal: null,
      };
    case OPEN_ACTIVITY_MODAL:
      return {
        ...state,
        activityModalOpen: true,
        modal: action.payload,
      };
    case CLOSE_ACTIVITY_MODAL:
      return {
        ...state,
        activityModalOpen: false,
        modal: null,
      };
    default:
      return state;
  }
};
