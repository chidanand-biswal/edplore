import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
} from "firebase/firestore";
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

const calculateKarma = (activeStandard, realmProgress) => {
  const realmProgressInActiveStandard = realmProgress.filter(
    (data) => data.standard === activeStandard
  );
  let karma =
    (realmProgressInActiveStandard[0].realmProgressPhysics +
      realmProgressInActiveStandard[0].realmProgressChemistry +
      realmProgressInActiveStandard[0].realmProgressMathematics +
      realmProgressInActiveStandard[0].realmProgressBiology) /
    4;

  return karma;
};

export const getExplorerDataByStandard = async (activeStandard) => {
  let explorerDataList = new Array();

  const activeStandardRef = query(
    collection(database, "edploreUser"),
    where("activeStandard", "==", activeStandard)
  );

  const activeStandardSnap = await getDocs(activeStandardRef);
  activeStandardSnap.forEach((doc) => {
    let explorerName = doc.data().explorerName;
    let karma = calculateKarma(activeStandard, doc.data().realmProgress);
    explorerDataList.push({ name: explorerName, karma: karma });
  });
  return explorerDataList;
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
