export const boardActionTypes = {
  ADD_BOARD_DETAILS: "ADD_BOARD_DETAILS",
};

export const addBoardDetails = (newBoardDetails) => {
  return {
    type: boardActionTypes.ADD_BOARD_DETAILS,
    boardDetails: newBoardDetails,
  };
};
