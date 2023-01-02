import { tutorialActionTypes } from "./action";

const tutorialDataInitialState = {
  currentTutorialData: [],
};

export default function reducer(state = tutorialDataInitialState, action) {
  switch (action.type) {
    case tutorialActionTypes.SET_CURRENT_TUTORIAL_DATA: {
      return { ...state, currentTutorialData: action.currentTutorialData };
    }

    default:
      return state;
  }
}
