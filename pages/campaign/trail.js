import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardSmallCustomOption from "../../components/Card/CardSmallCustomOption";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import SpeedDialCustom from "../../components/SpeedDial/SpeedDialCustom";
import Grid from "@mui/material/Grid";
import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Check from "@mui/icons-material/Check";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WhereToVoteIcon from "@mui/icons-material/WhereToVote";
import PlaceIcon from "@mui/icons-material/Place";
import { Paper } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import standardArenaMapData from "../../static/standardArenaMap.json";
import tutorialData from "../api/tutorialData.json";
import { setCurrentTutorialData } from "../../store/tutorial/action";
import Router from "next/router";

export default function CampaignTrail() {
  const dispatch = useDispatch();
  const { realmActive } = useSelector((state) => state.realmActive);
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
  /*
  const { realmProgressPhysics } = useSelector(
    (state) => state.realmProgressPhysics
  );
  const { realmProgressChemistry } = useSelector(
    (state) => state.realmProgressChemistry
  );
  const { realmProgressMathematics } = useSelector(
    (state) => state.realmProgressMathematics
  );
  const { realmProgressBiology } = useSelector(
    (state) => state.realmProgressBiology
  );
  */

  const realmProgressPhysics = calculateRealmProgressByStandard("PHYSICS");
  const realmProgressChemistry = calculateRealmProgressByStandard("CHEMISTRY");
  const realmProgressMathematics =
    calculateRealmProgressByStandard("MATHEMATICS");
  const realmProgressBiology = calculateRealmProgressByStandard("BIOLOGY");

  console.log("realmActive::: " + realmActive);
  console.log("realmProgressPhysics::: " + realmProgressPhysics);
  console.log("realmProgressChemistry::: " + realmProgressChemistry);
  console.log("realmProgressMathematics::: " + realmProgressMathematics);
  console.log("realmProgressBiology::: " + realmProgressBiology);

  const bigScreenInd = useMediaQuery("(min-width:400px)");

  const findCurrentStep = () => {
    console.log(`Realm active is ::: ${realmActive}.`);

    switch (realmActive) {
      case "PHYSICS":
        return realmProgressPhysics;
      case "CHEMISTRY":
        return realmProgressChemistry;
      case "MATHEMATICS":
        return realmProgressMathematics;
      case "BIOLOGY":
        return realmProgressBiology;
      default:
        console.log("Updating No Realm progress");
        return "";
    }
  };

  const findActiveTrail = () => {
    const filteredArenaList = standardArenaMapData.standardArenaMap.filter(
      (data) => data.standard === standardDetails
    );

    switch (realmActive) {
      case "PHYSICS":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsPhysics
          : [];
      case "CHEMISTRY":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsChemistry
          : [];
      case "MATHEMATICS":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsMathematics
          : [];
      case "BIOLOGY":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsBiology
          : [];
      default:
        console.log("Updating No Realm progress");
        return [];
    }
  };

  const [activeTrail, setActiveTrail] = React.useState(findActiveTrail());
  const [activeStep, setActiveStep] = React.useState(findCurrentStep());

  const setCurrentTutorial = () => {
    console.log(`Realm active is ::: ${realmActive}.`);
    console.log(`standard is ::: ${standardDetails}.`);

    switch (realmActive) {
      case "PHYSICS":
        return tutorialData.filter(
          (tutorial) =>
            tutorial.subject === realmActive &&
            tutorial.standard === standardDetails &&
            tutorial.chapter === realmProgressPhysics
        );
      case "CHEMISTRY":
        return tutorialData.filter(
          (tutorial) =>
            tutorial.subject === realmActive &&
            tutorial.standard === standardDetails &&
            tutorial.chapter === realmProgressChemistry
        );
      case "MATHEMATICS":
        return tutorialData.filter(
          (tutorial) =>
            tutorial.subject === realmActive &&
            tutorial.standard === standardDetails &&
            tutorial.chapter === realmProgressMathematics
        );
      case "BIOLOGY":
        return tutorialData.filter(
          (tutorial) =>
            tutorial.subject === realmActive &&
            tutorial.standard === standardDetails &&
            tutorial.chapter === realmProgressBiology
        );
      default:
        console.log("Returning default tutorial");

        const defaultTutorial = {
          id: 0,
          subject: "PHYSICS",
          standard: 6,
          chapter: 0,
          title: "You are ready even without a tutorial",
          content:
            "We promise to get back to you with high-quality tutorial. Visit Gurukul soon again!",
        };
        return defaultTutorial;
    }
  };

  const setCurrentTutorialDataInStore = (currentTutorial) => {
    dispatch(setCurrentTutorialData(currentTutorial));
  };

  const submit = () => {
    setCurrentTutorialDataInStore(setCurrentTutorial());
    Router.push("/karma");
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%", paddingBottom: "8rem" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                  src="/assets/map.png"
                />
              </Grid>

              <Grid item sx={{ padding: "0 1rem" }}>
                <h2 className={styles.greyText}>Your Quest awaits you!</h2>
              </Grid>
            </Grid>
          </Box>

          <Paper elevation={8} sx={{ minWidth: "15rem" }}>
            <Box sx={{ alignItem: "center", padding: "2rem" }}>
              <Stepper activeStep={activeStep} orientation="vertical">
                {activeTrail.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      StepIconComponent={
                        index < activeStep ? WhereToVoteIcon : PlaceIcon
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Paper>
          {bigScreenInd ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ marginTop: "2rem" }}
            >
              <Grid item>
                <div>
                  <Link href="/campaign/">
                    <a>
                      <Button
                        variant="outlined"
                        className={styles.buttonLaunch}
                      >
                        CHOOSE OTHER REALM
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Button
                    variant="contained"
                    className={styles.buttonLaunch}
                    onClick={() => submit()}
                  >
                    RESUME MY QUEST
                  </Button>
                </div>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{ marginTop: "2rem" }}
            >
              <Grid item>
                <div>
                  <Button
                    variant="contained"
                    className={styles.buttonLaunch}
                    onClick={() => submit()}
                  >
                    CONTINUE TO GURUKUL
                  </Button>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Link href="/campaign/">
                    <a>
                      <Button
                        variant="outlined"
                        className={styles.buttonLaunch}
                      >
                        CHOOSE OTHER REALM
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
