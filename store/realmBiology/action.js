export const realmActionTypesBiology = {
  UPDATE_REALM_PROGRESS_BIOLOGY: "UPDATE_REALM_PROGRESS_BIOLOGY",
};

export const updateRealmProgressBiology = (realmProgress) => {
  return {
    type: realmActionTypesBiology.UPDATE_REALM_PROGRESS_BIOLOGY,
    realmProgressBiology: realmProgress,
  };
};
