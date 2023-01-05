import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import users from "./users/reducer";
import counter from "./counter/reducer";
import userDetails from "./userDetails/reducer";
import standardDetails from "./standardDetails/reducer";
import realmActive from "./realm/reducer";
import realmProgressPhysics from "./realmPhysics/reducer";
import realmProgressChemistry from "./realmChemistry/reducer";
import realmProgressMathematics from "./realmMathematics/reducer";
import realmProgressBiology from "./realmBiology/reducer";
import currentQuizData from "./quiz/reducer";
import currentTutorialData from "./tutorial/reducer";
import medalCount from "./medal/reducer";
import superFastCount from "./superFast/reducer";
import realmProgress from "./realmProgress/reducer";

const combinedReducer = combineReducers({
  counter,
  users,
  userDetails,
  standardDetails,
  realmActive,
  realmProgressPhysics,
  realmProgressChemistry,
  realmProgressMathematics,
  realmProgressBiology,
  currentQuizData,
  currentTutorialData,
  medalCount,
  superFastCount,
  realmProgress,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      counter: {
        count: state.counter.count + action.payload.counter.count,
      },
      users: {
        users: [
          ...new Set([...action.payload.users.users, ...state.users.users]),
        ],
      },
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(combinedReducer, composeWithDevTools(applyMiddleware()));
};

export const wrapper = createWrapper(initStore);
