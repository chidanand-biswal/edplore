import { standardActionTypes } from "./action";

const usersInitialState = {
  standardDetails: 1,
};

export default function reducer(state = usersInitialState, action) {
  switch (action.type) {
    case standardActionTypes.ADD_STANDARD_DETAILS: {
      return { ...state, standardDetails: action.standardDetails };
    }
    default:
      return state;
  }
}
