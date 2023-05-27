import { realmProgressActionTypes } from "./action";

export const realmProgressInitialState = {
  realmProgress: [
    {
      standard: 6,
      board: "CBSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 6,
      board: "ICSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 7,
      board: "CBSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 7,
      board: "ICSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 8,
      board: "CBSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 8,
      board: "ICSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 9,
      board: "CBSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 9,
      board: "ICSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 10,
      board: "CBSE",
      realmProgressPhysics: 0,
      realmProgressChemistry: 0,
      realmProgressMathematics: 0,
      realmProgressBiology: 0,
    },
    {
      standard: 10,
      board: "ICSE",
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
