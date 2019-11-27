import * as types from "types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_MESSAGE_SUCCESS:
      return { ...state, ...action.payload };
    case types.CLEAR_MESSAGES:
      return initialState;
    default:
      return state;
  }
}
