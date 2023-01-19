import { boardActionTypes } from "./action";

const boardInitialState = {
  boardDetails: "CBSE",
};

export default function reducer(state = boardInitialState, action) {
  switch (action.type) {
    case boardActionTypes.ADD_BOARD_DETAILS: {
      return { ...state, boardDetails: action.boardDetails };
    }
    default:
      return state;
  }
}
