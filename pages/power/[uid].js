import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import styles from "../../styles/Home.module.css";
import { getExplorerMetaData } from "../../firebase/db/dbUtility";
import AddressDialog from "../../components/Modal/AddressDialog";
import { getAuth } from "firebase/auth";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";

export default function FinalAuthHome({ authUserMetaData }) {
  console.log("FinalAuthHome");
  console.log(authUserMetaData);
  const addressInDB = authUserMetaData.address;
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [openModal, setOpenModal] = React.useState(false);
  const { standardDetails } = useSelector((state) => state.standardDetails);

  const { realmProgress } = useSelector((state) => state.realmProgress);

  const realmProgressArray = realmProgress ? realmProgress : [];

  const calculateRealmProgressByStandard = (realm) => {
    let existingRealmProgressPerStandard = realmProgressArray.filter(
      (element) => element.standard === standardDetails
    );
    switch (realm) {
      case "PHYSICS":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressPhysics
          : 0;

      case "CHEMISTRY":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressChemistry
          : 0;

      case "MATHEMATICS":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressMathematics
          : 0;

      case "BIOLOGY":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressBiology
          : 0;

      default:
        return 0;
    }
  };

  const { medalCount } = useSelector((state) => state.medalCount);

  const { superFastCount } = useSelector((state) => state.superFastCount);

  const realmProgressPhysics = calculateRealmProgressByStandard("PHYSICS");
  const realmProgressChemistry = calculateRealmProgressByStandard("CHEMISTRY");
  const realmProgressMathematics =
    calculateRealmProgressByStandard("MATHEMATICS");
  const realmProgressBiology = calculateRealmProgressByStandard("BIOLOGY");

  let averageProgress = Math.floor(
    (realmProgressPhysics +
      realmProgressChemistry +
      realmProgressMathematics +
      realmProgressBiology) /
      4
  );

  const realmProgressGeneral =
    typeof averageProgress != "undefined" ? averageProgress : 0;

  const navigate = () => {
    if (addressInDB.length > 0) {
      Router.push("/campaign/");
    } else {
      setOpenModal(true);
    }
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <h2 className={styles.greyText}>
                  The Mystic One <br />
                </h2>
              </Grid>

              <Grid item className={styles.spacerOne}>
                <motion.div
                  initial={{ opacity: 1, scale: 2, y: "8rem" }}
                  animate={{ opacity: 1, scale: 1, y: "0rem" }}
                  transition={{ duration: 1 }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: "5rem",
                      width: "5rem",
                    }}
                    src="/assets/theone.png"
                  />
                </motion.div>
              </Grid>

              <Grid item className={styles.spacerOne}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.25 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Typography className={styles.openingLines}>
                    Hey{" "}
                    {authUserMetaData
                      ? authUserMetaData.displayName
                      : "Explorer"}
                    , have you not heard the prophecies?
                    <br />
                    The Mystic One will conquer all the Realms and reach the far
                    edges of Bodhi.
                    <br />
                    Find out where you are on your way to be &apos;The Mystic
                    One&apos;.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>
          </Box>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ padding: "1rem" }}
          >
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 3 }}
              >
                <Paper
                  elevation={8}
                  sx={{ padding: "0 1rem", maxWidth: "20rem" }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Typography variant="h6">Chakra</Typography>
                    </Grid>
                    <Grid item sx={{ padding: "0.5rem" }}>
                      <Paper elevation={8} sx={{ padding: "1rem" }}>
                        <Badge
                          badgeContent={realmProgressGeneral}
                          color="primary"
                          showZero
                        >
                          <BrightnessHighIcon
                            fontSize="large"
                            sx={{ color: "purple" }}
                          />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />
                        Win five &apos;Chakras&apos; to be <br />
                        The Mystic One!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "0.75rem" }}
          >
            <Grid item>
              <Zoom in={true} style={{ transitionDelay: "4000ms" }}>
                <div>
                  <Button
                    variant="contained"
                    className={styles.buttonLaunch}
                    onClick={navigate}
                  >
                    CONTINUE TO EXPLORE
                  </Button>
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />

      {openModal && addressInDB.length === 0 && (
        <AddressDialog
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          uid={user.uid}
        />
      )}
    </Box>
  );
}

export async function getServerSideProps(context) {
  const { uid } = context.params;

  let userMetaDatafromDB = await getExplorerMetaData(uid);
  return {
    props: { authUserMetaData: userMetaDatafromDB },
  };
}
