export const usersActionTypes = {
  ADD_USER_DETAILS: "ADD_USER_DETAILS",
};

export const addUserDetails = (newUserDetails) => {
  return {
    type: usersActionTypes.ADD_USER_DETAILS,
    userDetails: newUserDetails,
  };
};
