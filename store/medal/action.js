export const medalActionTypes = {
  UPDATE_MEDAL_COUNT: "UPDATE_MEDAL_COUNT",
};

export const updateMedalCount = (medalCount) => {
  return {
    type: medalActionTypes.UPDATE_MEDAL_COUNT,
    medalCount: medalCount,
  };
};
