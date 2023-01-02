export const realmActionTypes = {
  UPDATE_REALM_ACTIVE: "UPDATE_REALM_ACTIVE",
};

export const updateRealmActive = (realmActive) => {
  return {
    type: realmActionTypes.UPDATE_REALM_ACTIVE,
    realmActive: realmActive,
  };
};
