import { realmActionTypesChemistry } from "./action";

const realmInitialState = {
  realmProgressChemistry: 0,
};

export default function reducer(state = realmInitialState, action) {
  switch (action.type) {
    case realmActionTypesChemistry.UPDATE_REALM_PROGRESS_CHEMISTRY: {
      return {
        ...state,
        realmProgressChemistry: action.realmProgressChemistry,
      };
    }

    default:
      return state;
  }
}
