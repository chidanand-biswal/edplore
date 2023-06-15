import React, { useEffect, useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import AlertTitle from "@mui/material/AlertTitle";
import { Typography } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import standardArenaMapData from "../../static/standardArenaMap.json";
import { setCurrentQuizData } from "../../store/quiz/action";
import styles from "../../styles/Home.module.css";
import quizDataCBSE from "../api/quizDataCBSE.json";
import quizDataICSE from "../api/quizDataICSE.json";
import { Stack } from "@mui/material";

const RenderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to trigger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className={styles.timeWrapper}>
      {remainingTime > 0 && (
        <div key={remainingTime} className={styles.time}>
          {remainingTime}
        </div>
      )}
      {prevTime.current !== null && (
        <div key={prevTime.current} className={styles.timeDown}>
          {prevTime.current}
        </div>
      )}
      {remainingTime === 0 && (
        <div key={remainingTime} className={styles.time}>
          <Link href="/quiz/quizMain">
            <a>
              <PlayArrowIcon
                sx={{
                  width: "10rem",
                  height: "10rem",
                  padding: "1rem 0 0 0",
                }}
                color="primary"
              />
            </a>
          </Link>
        </div>
      )}
    </div>
  );
};

function randomize(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

export default function QuizHome() {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = React.useState(true);
  const [openAlertWarn, setOpenAlertWarn] = React.useState(true);
  const { realmActive } = useSelector((state) => state.realmActive);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const { boardDetails } = useSelector((state) => state.boardDetails);

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

  const quizData = boardDetails === "CBSE" ? quizDataCBSE : quizDataICSE;

  const setCurrentQuiz = () => {
    console.log(`Realm active is ::: ${realmActive}.`);
    console.log(`standard is ::: ${standardDetails}.`);
    console.log(`board is ::: ${boardDetails}.`);

    switch (realmActive) {
      case "PHYSICS":
        return quizData.filter(
          (quiz) =>
            quiz.subject === realmActive &&
            quiz.standard === standardDetails &&
            quiz.chapter === realmProgressPhysics
        );
      case "CHEMISTRY":
        return quizData.filter(
          (quiz) =>
            quiz.subject === realmActive &&
            quiz.standard === standardDetails &&
            quiz.chapter === realmProgressChemistry
        );
      case "MATHEMATICS":
        return quizData.filter(
          (quiz) =>
            quiz.subject === realmActive &&
            quiz.standard === standardDetails &&
            quiz.chapter === realmProgressMathematics
        );
      case "BIOLOGY":
        return quizData.filter(
          (quiz) =>
            quiz.subject === realmActive &&
            quiz.standard === standardDetails &&
            quiz.chapter === realmProgressBiology
        );
      default:
        console.log("Returning default quiz");
        return quizData.filter(
          (quiz) =>
            quiz.subject === "PHYSICS" &&
            quiz.standard === 6 &&
            quiz.chapter === 0
        );
    }
  };

  const findArenaName = () => {
    const filteredArenaList = standardArenaMapData.standardArenaMap.filter(
      (data) => data.standard === standardDetails && data.board === boardDetails
    );

    switch (realmActive) {
      case "PHYSICS":
        let physicsArenaList =
          typeof filteredArenaList[0] != "undefined"
            ? filteredArenaList[0].stepsPhysics
            : [];
        return physicsArenaList.length > 0
          ? physicsArenaList[realmProgressPhysics].label
          : "";
      case "CHEMISTRY":
        let chemistryArenaList =
          typeof filteredArenaList[0] != "undefined"
            ? filteredArenaList[0].stepsChemistry
            : [];
        return chemistryArenaList.length > 0
          ? chemistryArenaList[realmProgressChemistry].label
          : "";
      case "MATHEMATICS":
        let mathematicsArenaList =
          typeof filteredArenaList[0] != "undefined"
            ? filteredArenaList[0].stepsMathematics
            : [];
        return mathematicsArenaList.length > 0
          ? mathematicsArenaList[realmProgressMathematics].label
          : "";
      case "BIOLOGY":
        let biologyArenaList =
          typeof filteredArenaList[0] != "undefined"
            ? filteredArenaList[0].stepsBiology
            : [];
        return biologyArenaList.length > 0
          ? biologyArenaList[realmProgressBiology].label
          : "";
      default:
        console.log("Updating No Realm progress");
        return "";
    }
  };

  const setCurrentQuizDataInStore = (currentQuiz) => {
    const randomizedCurrentQuiz = randomize(currentQuiz);
    dispatch(setCurrentQuizData(randomizedCurrentQuiz));
  };
  useEffect(() => {
    setCurrentQuizDataInStore(setCurrentQuiz());
  });

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Paper elevation={8} sx={{ padding: "1rem" }}>
            <Box sx={{ width: "100%" }}>
              <Grid
                container
                direction="column"
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
                    src="/assets/stadium.png"
                  />
                </Grid>

                <Grid item>
                  <Typography variant="h5" sx={{ color: "#808080" }}>
                    {findArenaName()}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Paper elevation={8} sx={{ marginTop: "1rem", padding: "0.5rem" }}>
            <Box className={styles.mainSmall}>
              <h3 className={styles.greyText}>Opening gates to the Arena</h3>
              <div className={styles.timerWrapper}>
                <CountdownCircleTimer
                  isPlaying
                  duration={10}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[10, 6, 3, 0]}
                >
                  {RenderTime}
                </CountdownCircleTimer>
              </div>
            </Box>
          </Paper>
          <Stack>
            <Collapse in={openAlert}>
              <Alert
                severity="info"
                sx={{ marginTop: "2rem" }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>Infromation</AlertTitle>
                The Explorer gets to survive a maximum of TWO minutes in the
                Arena. <br />
                That is all the time needed in this world to write new legends!
              </Alert>
            </Collapse>
            <Collapse in={openAlertWarn}>
              <Alert
                severity="warning"
                sx={{ marginTop: "0.5rem" }}
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlertWarn(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
              >
                <AlertTitle>Instructions</AlertTitle>
                While inside the Arena, <br />
                DO NOT refresh the page and <br />
                DO NOT click on Next or Previous buttons on the broswer
              </Alert>
            </Collapse>
          </Stack>
        </Grid>
      </Grid>

      {/*<CommonFooter />*/}
    </Box>
  );
}
