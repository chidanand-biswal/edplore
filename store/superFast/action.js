export const superFastActionTypes = {
  UPDATE_SUPERFAST_COUNT: "UPDATE_SUPERFAST_COUNT",
};

export const updateSuperFastCount = (superFastCount) => {
  return {
    type: superFastActionTypes.UPDATE_SUPERFAST_COUNT,
    superFastCount: superFastCount,
  };
};
