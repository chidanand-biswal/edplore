export const tutorialActionTypes = {
  SET_CURRENT_TUTORIAL_DATA: "SET_CURRENT_TUTORIAL_DATA",
};

export const setCurrentTutorialData = (currentTutorialData) => {
  return {
    type: tutorialActionTypes.SET_CURRENT_TUTORIAL_DATA,
    currentTutorialData: currentTutorialData,
  };
};
