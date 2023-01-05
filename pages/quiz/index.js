import React, { useRef, useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardQuizOption from "../../components/Card/CardQuizOption";
import CommonFooter from "../../components/Footer/CommonFooter";
import SpeedDialCustom from "../../components/SpeedDial/SpeedDialCustom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import StadiumIcon from "@mui/icons-material/Stadium";
import { useSelector, useDispatch } from "react-redux";
import quizData from "../api/quizData.json";
import { setCurrentQuizData } from "../../store/quiz/action";
import standardArenaMapData from "../../static/standardArenaMap.json";

const renderTime = ({ remainingTime }) => {
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

  const setCurrentQuiz = () => {
    console.log(`Realm active is ::: ${realmActive}.`);
    console.log(`standard is ::: ${standardDetails}.`);

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
      (data) => data.standard === standardDetails
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
          <Paper elevation={8} sx={{ padding: "0.5rem" }}>
            <Box sx={{ width: "100%" }}>
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
                    src="/assets/stadium.png"
                  />
                </Grid>

                <Grid item sx={{ padding: "0 1rem" }}>
                  <h3 className={styles.greyText}>{findArenaName()}</h3>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          <Paper elevation={8} sx={{ marginTop: "1rem", padding: "0.5rem" }}>
            <Box className={styles.mainSmall}>
              <h3 className={styles.greyText}>Countdown to the Arena!</h3>
              <div className={styles.timerWrapper}>
                <CountdownCircleTimer
                  isPlaying
                  duration={10}
                  colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
                  colorsTime={[10, 6, 3, 0]}
                >
                  {renderTime}
                </CountdownCircleTimer>
              </div>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/*<CommonFooter />*/}
    </Box>
  );
}
