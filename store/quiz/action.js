export const quizActionTypes = {
  SET_CURRENT_QUIZ_DATA: "SET_CURRENT_QUIZ_DATA",
};

export const setCurrentQuizData = (currentQuizData) => {
  return {
    type: quizActionTypes.SET_CURRENT_QUIZ_DATA,
    currentQuizData: currentQuizData,
  };
};
