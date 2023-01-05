export const realmProgressActionTypes = {
  UPDATE_REALM_PROGRESS: "UPDATE_REALM_PROGRESS",
};

export const updateRealmProgress = (realmProgress) => {
  return {
    type: realmProgressActionTypes.UPDATE_REALM_PROGRESS,
    realmProgress: realmProgress,
  };
};
