import { usersActionTypes } from "./action";

const usersInitialState = {
  userDetails: "",
};

export default function reducer(state = usersInitialState, action) {
  switch (action.type) {
    case usersActionTypes.ADD_USER_DETAILS: {
      return { ...state, userDetails: action.userDetails };
    }
    default:
      return state;
  }
}
