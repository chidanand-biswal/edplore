export const realmActionTypesChemistry = {
  UPDATE_REALM_PROGRESS_CHEMISTRY: "UPDATE_REALM_PROGRESS_CHEMISTRY",
};

export const updateRealmProgressChemistry = (realmProgress) => {
  return {
    type: realmActionTypesChemistry.UPDATE_REALM_PROGRESS_CHEMISTRY,
    realmProgressChemistry: realmProgress,
  };
};
