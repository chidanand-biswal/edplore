import { doc, getDoc, setDoc } from "firebase/firestore";
import { database } from "../firebaseApp";

export const getExplorerData = async (explorerId) => {
  const explorerRef = doc(database, "edploreUser", explorerId);
  const explorerSnap = await getDoc(explorerRef).catch((err) => {
    console.log(err.message);
  });

  if (explorerSnap.exists()) {
    return explorerSnap.data();
  } else {
    console.log("No such document in edploreUser!");
    return null;
  }
};

export const saveExplorerData = (
  explorerId,
  realmProgressData,
  medalCount,
  superFastCount,
  userDetails,
  standardDetails
) => {
  const explorerRef = doc(database, "edploreUser", explorerId);
  console.log("saveExplorerData");
  console.log(realmProgressData);
  console.log(medalCount);
  console.log(superFastCount);
  console.log(userDetails);
  console.log(standardDetails);
  setDoc(explorerRef, {
    realmProgress: realmProgressData,
    kavachCount: medalCount,
    vajraCount: superFastCount,
    explorerName: userDetails,
    activeStandard: standardDetails,
  }).catch((err) => {
    console.log(err.message);
  });
};

export const getExplorerMetaData = async (explorerId) => {
  const explorerMetaDataRef = doc(database, "edploreUserMetaData", explorerId);
  const explorerMetaDataSnap = await getDoc(explorerMetaDataRef).catch(
    (err) => {
      console.log(err.message);
    }
  );

  if (explorerMetaDataSnap.exists()) {
    return explorerMetaDataSnap.data();
  } else {
    console.log("No such document in edploreUserMetaData!");
    return null;
  }
};

export const saveExplorerMetaData = (
  explorerId,
  displayName,
  email,
  phoneNumber,
  board,
  address
) => {
  console.log("saveExplorerMetaData");
  console.log(explorerId);
  console.log(displayName);
  console.log(email);
  console.log(phoneNumber);
  console.log(board);
  console.log(address);
  const explorerMetaDataRef = doc(database, "edploreUserMetaData", explorerId);

  setDoc(explorerMetaDataRef, {
    displayName: displayName,
    email: email,
    phoneNumber: phoneNumber,
    board: board,
    address: address,
  }).catch((err) => {
    console.log(err.message);
  });
};
