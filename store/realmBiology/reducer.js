import { realmActionTypesBiology } from "./action";

const realmInitialState = {
  realmProgressBiology: 0,
};

export default function reducer(state = realmInitialState, action) {
  switch (action.type) {
    case realmActionTypesBiology.UPDATE_REALM_PROGRESS_BIOLOGY: {
      return { ...state, realmProgressBiology: action.realmProgressBiology };
    }
    default:
      return state;
  }
}
