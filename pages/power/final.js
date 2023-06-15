import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Step from "@mui/material/Step";
import StepContent from "@mui/material/StepContent";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import styles from "../../styles/Home.module.css";
import { getAuth } from "firebase/auth";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { getExplorerMetaData } from "../../firebase/db/dbUtility";
import AddressDialog from "../../components/Modal/AddressDialog";
import FeedbackDialog from "../../components/Modal/FeedbackDialog";

export default function FinalHome() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [userName, setUserName] = React.useState("");
  const [standard, setStandard] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [openFeedbackModal, setOpenFeedbackModal] = React.useState(false);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const { boardDetails } = useSelector((state) => state.boardDetails);
  const { userDetails } = useSelector((state) => state.userDetails);

  const { realmProgress } = useSelector((state) => state.realmProgress);

  const realmProgressArray = realmProgress ? realmProgress : [];

  const calculateRealmProgressByStandard = (realm) => {
    let existingRealmProgressPerStandard = realmProgressArray.filter(
      (element) =>
        element.standard === standardDetails && element.board === boardDetails
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

  const stepsLevel = [
    {
      id: 0,
      label: "The Explorer",
      description:
        "So glad to see you here! Explore more and score more Chakras.",
    },
    {
      id: 1,
      label: "The Inspired One",
      description:
        "You really are inspired! Score one Chakra more to be the next.",
    },
    {
      id: 2,
      label: "The Awesome One",
      description:
        "You are just awesome! Score one Chakra more to be the next.",
    },
    {
      id: 3,
      label: "The Mystic One",
      description:
        "We now know you are the one promised. Score one Chakra more to be the next.",
    },
    {
      id: 4,
      label: "The Chosen One",
      description:
        "You are the Chosen One foretold in the prophecies! We salute you.",
    },
  ];

  const [activeStep, setActiveStep] = React.useState(0);

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

  useEffect(() => {
    const fetchUserMetaData = async () => {
      let userMetaData = await getExplorerMetaData(user.uid);
      setUserName(userMetaData.displayName);
      setAddress(userMetaData.address);
      setPhoneNumber(userMetaData.phoneNumber);
    };
    if (user) {
      fetchUserMetaData();
    }
  }, [userName]);

  const navigate = () => {
    if (address.length > 0) {
      Router.push("/campaign/");
    } else {
      setOpenModal(true);
    }
  };

  const feedback = () => {
    setOpenFeedbackModal(true);
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
                  Your Journey So Far
                  <br />
                </h2>
              </Grid>
              <Grid item>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item sx={{ padding: "0.25rem" }}>
                    <Paper elevation={8} sx={{ padding: "0.5rem" }}>
                      <Badge
                        badgeContent={realmProgressGeneral}
                        color="primary"
                        showZero
                      >
                        <BrightnessHighIcon
                          fontSize="large"
                          sx={{ color: "OrangeRed" }}
                        />
                      </Badge>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Paper elevation={3} sx={{ padding: "0.5rem" }}>
                  <Stepper
                    activeStep={realmProgressGeneral}
                    orientation="vertical"
                  >
                    {stepsLevel.map((step, index) => (
                      <Step key={step.label}>
                        <StepLabel
                          StepIconComponent={
                            index === realmProgressGeneral ||
                            index < realmProgressGeneral
                              ? PersonIcon
                              : PersonOutlineIcon
                          }
                        >
                          <Typography color="text.primary">
                            {step.label}
                          </Typography>
                        </StepLabel>
                        <StepContent>
                          <Typography color="text.secondary">
                            {step.description}
                          </Typography>
                          <Grid
                            container
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            sx={{ padding: "0.25rem" }}
                            spacing={2}
                          >
                            <Grid item>
                              <Zoom
                                in={true}
                                style={{ transitionDelay: "3000ms" }}
                              >
                                <div>
                                  <Button
                                    variant="outlined"
                                    className={styles.buttonLaunch}
                                    onClick={feedback}
                                  >
                                    RATE US
                                  </Button>
                                </div>
                              </Zoom>
                            </Grid>
                            <Grid item>
                              <Zoom
                                in={true}
                                style={{ transitionDelay: "2000ms" }}
                              >
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
                        </StepContent>
                      </Step>
                    ))}
                  </Stepper>
                </Paper>
              </Grid>
              <Grid item sx={{ padding: "1rem" }}>
                <Typography className={styles.openingLinesLaunch}>
                  The greatest journey is the one within!
                </Typography>
              </Grid>
              {/** 
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
                    Hey {userName.length > 0 ? userName : "Explorer"}, have you
                    not heard the prophecies?
                    <br />
                    The Mystic One will conquer all the Realms and reach the far
                    edges of Bodhi.
                    <br />
                    Find out where you are on your way to be &apos;The Mystic
                    One&apos;.
                  </Typography>
                </motion.div>
              </Grid>
              
            */}
            </Grid>
          </Box>

          {/** 
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ padding: "0.25rem" }}
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
                        Win four &apos;Chakras&apos; or more to be <br />
                        The Chosen One!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        */}
          {/** 
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ padding: "1rem" }}
            spacing={2}
          >
            <Grid item>
              <Zoom in={true} style={{ transitionDelay: "3000ms" }}>
                <div>
                  <Button
                    variant="contained"
                    className={styles.buttonLaunch}
                    onClick={feedback}
                  >
                    How ARE WE DOING? RATE US!
                  </Button>
                </div>
              </Zoom>
            </Grid>
          </Grid>
          */}
        </Grid>
      </Grid>

      <ToolbarFooter />
      {openModal && phoneNumber.length === 0 && (
        <AddressDialog
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
        />
      )}
      {openFeedbackModal && (
        <FeedbackDialog
          open={openFeedbackModal}
          onClose={() => {
            setOpenFeedbackModal(false);
          }}
        />
      )}
    </Box>
  );
}
