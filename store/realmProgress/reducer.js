import { realmProgressActionTypes } from "./action";

const realmProgressInitialState = {
  realmProgress: [
    {
      standard: 6,
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 7,
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 8,
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 9,
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 10,
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
  ],
};

export default function reducer(state = realmProgressInitialState, action) {
  switch (action.type) {
    case realmProgressActionTypes.UPDATE_REALM_PROGRESS: {
      return { ...state, realmProgress: action.realmProgress };
    }

    default:
      return state;
  }
}
