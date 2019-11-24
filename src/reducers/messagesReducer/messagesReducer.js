import * as types from "types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_MESSAGE:
    case types.SEND_MESSAGE:
      return { ...state, ...action.payload };
    case types.CLEAR_MESSAGES:
      return initialState;
    default:
      return state;
  }
}
