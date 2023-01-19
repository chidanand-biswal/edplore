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
    console.log("No such document!");
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
