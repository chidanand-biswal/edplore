import { quizActionTypes } from "./action";

const quizDataInitialState = {
  currentQuizData: [],
};

export default function reducer(state = quizDataInitialState, action) {
  switch (action.type) {
    case quizActionTypes.SET_CURRENT_QUIZ_DATA: {
      return { ...state, currentQuizData: action.currentQuizData };
    }

    default:
      return state;
  }
}
