import { medalActionTypes } from "./action";

const medalInitialState = {
  medalCount: 0,
};

export default function reducer(state = medalInitialState, action) {
  switch (action.type) {
    case medalActionTypes.UPDATE_MEDAL_COUNT: {
      return { ...state, medalCount: action.medalCount };
    }
    default:
      return state;
  }
}
