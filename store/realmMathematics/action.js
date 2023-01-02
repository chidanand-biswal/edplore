export const realmActionTypesMathematics = {
  UPDATE_REALM_PROGRESS_MATHEMATICS: "UPDATE_REALM_PROGRESS_MATHEMATICS",
};

export const updateRealmProgressMathematics = (realmProgress) => {
  return {
    type: realmActionTypesMathematics.UPDATE_REALM_PROGRESS_MATHEMATICS,
    realmProgressMathematics: realmProgress,
  };
};
