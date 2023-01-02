import { realmActionTypes } from "./action";

const realmInitialState = {
  realmActive: "",
};

export default function reducer(state = realmInitialState, action) {
  switch (action.type) {
    case realmActionTypes.UPDATE_REALM_ACTIVE: {
      return { ...state, realmActive: action.realmActive };
    }

    default:
      return state;
  }
}
