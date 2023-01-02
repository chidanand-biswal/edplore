import { realmActionTypesMathematics } from "./action";

const realmInitialState = {
  realmProgressMathematics: 0,
};

export default function reducer(state = realmInitialState, action) {
  switch (action.type) {
    case realmActionTypesMathematics.UPDATE_REALM_PROGRESS_MATHEMATICS: {
      return {
        ...state,
        realmProgressMathematics: action.realmProgressMathematics,
      };
    }
    default:
      return state;
  }
}
