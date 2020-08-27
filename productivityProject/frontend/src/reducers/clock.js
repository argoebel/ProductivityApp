import { UPDATE_TIME } from "../actions/types";

const intialState = {
  date: null,
};

export default function (state = intialState, action) {
  switch (action.type) {
    case UPDATE_TIME:
      return {
        ...state,
        date: action.payload,
      };
    default:
      return state;
  }
}
