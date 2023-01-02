export const realmActionTypesPhysics = {
  UPDATE_REALM_PROGRESS_PHYSICS: "UPDATE_REALM_PROGRESS_PHYSICS",
};

export const updateRealmProgressPhysics = (realmProgress) => {
  return {
    type: realmActionTypesPhysics.UPDATE_REALM_PROGRESS_PHYSICS,
    realmProgressPhysics: realmProgress,
  };
};
