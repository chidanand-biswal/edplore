import { realmActionTypesPhysics } from "./action";

const realmInitialState = {
  realmProgressPhysics: 0,
};

export default function reducer(state = realmInitialState, action) {
  switch (action.type) {
    case realmActionTypesPhysics.UPDATE_REALM_PROGRESS_PHYSICS: {
      return { ...state, realmProgressPhysics: action.realmProgressPhysics };
    }

    default:
      return state;
  }
}
