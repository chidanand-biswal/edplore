import { superFastActionTypes } from "./action";

const superFastInitialState = {
  superFastCount: 0,
};

export default function reducer(state = superFastInitialState, action) {
  switch (action.type) {
    case superFastActionTypes.UPDATE_SUPERFAST_COUNT: {
      return { ...state, superFastCount: action.superFastCount };
    }
    default:
      return state;
  }
}
