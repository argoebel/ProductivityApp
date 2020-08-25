import { OPEN_TASK_MODAL, CLOSE_TASK_MODAL } from "../actions/types";

const initialState = {
  taskModalOpen: false,
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
    default:
      return state;
  }
};
