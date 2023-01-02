export const standardActionTypes = {
  ADD_STANDARD_DETAILS: "ADD_STANDARD_DETAILS",
};

export const addStandardDetails = (newStandardDetails) => {
  return {
    type: standardActionTypes.ADD_STANDARD_DETAILS,
    standardDetails: newStandardDetails,
  };
};
