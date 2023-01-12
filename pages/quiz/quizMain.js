import React, { useRef, useState, useEffect } from "react";
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
import QuizIcon from "@mui/icons-material/Quiz";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import questionsMock from "../api/mockData.json";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { useSelector, useDispatch } from "react-redux";
import { updateRealmProgressPhysics } from "../../store/realmPhysics/action";
import { updateRealmProgressChemistry } from "../../store/realmChemistry/action";
import { updateRealmProgressMathematics } from "../../store/realmMathematics/action";
import { updateRealmProgressBiology } from "../../store/realmBiology/action";
import { updateMedalCount } from "../../store/medal/action";
import { updateSuperFastCount } from "../../store/superFast/action";
import { updateRealmProgress } from "../../store/realmProgress/action";
import QuizDialog from "../../components/Modal/QuizDialog";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getExplorerData, saveExplorerData } from "../../firebase/db/dbUtility";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      {/** 
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${
          Math.round(props.value) / 10
        }`}</Typography>
      </Box>
      */}
    </Box>
  );
}

function LinearProgressTimeWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "right" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          className={styles.progressBar}
          variant="determinate"
          {...props}
        />
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

LinearProgressTimeWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

const labels = {
  0: "Useless",
  1: "Useless+",
  2: "Poor",
  3: "Poor+",
  4: "Ok",
  5: "Ok+",
  6: "Good",
  7: "Good+",
  8: "Excellent",
  9: "Excellent+",
  10: "Ultimate!",
};

function getLabelText(value) {
  return `${labels[value]}`;
}

/*
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/mockData.json`);
  const data = await res.json();

  // Pass data to the page via props
  console.log(data);
  return { props: { data } };
}
*/

export default function QuizMain() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [openModal, setOpenModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const dispatch = useDispatch();
  const { realmActive } = useSelector((state) => state.realmActive);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const { realmProgress } = useSelector((state) => state.realmProgress);

  const realmProgressArray = realmProgress ? realmProgress : [];

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

  const { medalCount } = useSelector((state) => state.medalCount);
  const { superFastCount } = useSelector((state) => state.superFastCount);

  const { currentQuizData } = useSelector((state) => state.currentQuizData);

  const questions =
    typeof currentQuizData != "undefined" && currentQuizData.length > 0
      ? currentQuizData
      : questionsMock;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [progress, setProgress] = React.useState(10);
  const [timeProgress, setTimeProgress] = React.useState(0);
  const [star, setStar] = React.useState(0);

  const handleAnswerOption = (answer) => {
    console.log("handleAnswerOption");
    console.log(selectedOptions);
    setSelectedOptions([
      (selectedOptions[currentQuestion] = { answerByUser: answer }),
    ]);
    setSelectedOptions([...selectedOptions]);
    console.log(selectedOptions);

    setProgress((prevProgress) =>
      prevProgress >= 100 ? 10 : prevProgress + 10
    );

    handleNext();
  };

  const handlePrevious = () => {
    const prevQues = currentQuestion - 1;
    prevQues >= 0 && setCurrentQuestion(prevQues);

    setProgress((prevQues + 1) * 10);
  };

  const handleReport = () => {
    setOpenModal(true);
    setModalType("report");
  };

  const handleLove = () => {
    setOpenModal(true);
    setModalType("like");
  };

  const handleNext = () => {
    const nextQues = currentQuestion + 1;
    nextQues < questions.length && setCurrentQuestion(nextQues);

    //setProgress((nextQues + 1) * 10);
    setProgress(nextQues * 10);
  };

  const handleSubmitButton = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      questions[i].answerOptions.map(
        (answer) =>
          answer.isCorrect &&
          answer.answer === selectedOptions[i]?.answerByUser &&
          (newScore += 1)
      );
    }
    setScore(newScore);
    setShowScore(true);
    setStar(newScore);

    let updateMedal = false;
    let updateSuperfast = false;

    if (newScore >= 10) {
      console.log(`Update Medal count because score is ::: ${newScore}.`);
      updateMedal = true;
      updateMedalCountInStore();
    } else {
      console.log(
        `DO NOT Update Medal count because score is :::  ${newScore}.`
      );
    }

    if (newScore >= 8) {
      console.log(`Realm to progress because score is ::: ${newScore}.`);
      //updateActiveRealmProgressInStore();
      if (timeProgress > 0) {
        console.log(
          `Update Vajra Count because time remaining is ::: ${timeProgress}.`
        );
        updateSuperfast = true;
        updateSuperFastCountInStore();
      } else {
        console.log(
          `DO NOT update Vajra Count because time remaining is ::: ${timeProgress}.`
        );
      }

      updateActiveRealmProgressByStandardInStore(updateMedal, updateSuperfast);
    } else {
      console.log(`Realm to NOT progress because score is :::  ${newScore}.`);
    }
  };

  /*
  const updateActiveRealmProgressInStore = () => {
    console.log(`Realm to progress is ::: ${realmActive}.`);

    switch (realmActive) {
      case "PHYSICS":
        dispatch(updateRealmProgressPhysics(realmProgressPhysics + 1));
        break;
      case "CHEMISTRY":
        dispatch(updateRealmProgressChemistry(realmProgressChemistry + 1));
        break;
      case "MATHEMATICS":
        dispatch(updateRealmProgressMathematics(realmProgressMathematics + 1));
        break;
      case "BIOLOGY":
        dispatch(updateRealmProgressBiology(realmProgressBiology + 1));
        break;
      default:
        console.log("Updating No Realm progress");
    }
  };
*/
  const calculateRealmProgressByStandard = () => {
    let existingRealmProgressPerStandard = realmProgressArray.filter(
      (element) => element.standard === standardDetails
    );
    switch (realmActive) {
      case "PHYSICS":
        let existingRealmProgressPhysics =
          existingRealmProgressPerStandard.length > 0
            ? existingRealmProgressPerStandard[0].realmProgressPhysics
            : 0;

        return realmProgressArray.map((element) =>
          element.standard === standardDetails
            ? {
                ...element,
                realmProgressPhysics: existingRealmProgressPhysics + 1,
              }
            : element
        );

      case "CHEMISTRY":
        let existingRealmProgressChemistry =
          existingRealmProgressPerStandard.length > 0
            ? existingRealmProgressPerStandard[0].realmProgressChemistry
            : 0;

        return realmProgressArray.map((element) =>
          element.standard === standardDetails
            ? {
                ...element,
                realmProgressChemistry: existingRealmProgressChemistry + 1,
              }
            : element
        );
      case "MATHEMATICS":
        let existingRealmProgressMathematics =
          existingRealmProgressPerStandard.length > 0
            ? existingRealmProgressPerStandard[0].realmProgressMathematics
            : 0;

        return realmProgressArray.map((element) =>
          element.standard === standardDetails
            ? {
                ...element,
                realmProgressMathematics: existingRealmProgressMathematics + 1,
              }
            : element
        );
      case "BIOLOGY":
        let existingRealmProgressBiology =
          existingRealmProgressPerStandard.length > 0
            ? existingRealmProgressPerStandard[0].realmProgressBiology
            : 0;

        return realmProgressArray.map((element) =>
          element.standard === standardDetails
            ? {
                ...element,
                realmProgressBiology: existingRealmProgressBiology + 1,
              }
            : element
        );
      default:
        return [];
    }
  };

  const updateActiveRealmProgressByStandardInStore = (
    updateMedal,
    updateSuperfast
  ) => {
    console.log(`Realm to progress is ::: ${realmActive}.`);
    console.log(`Standard to progress is ::: ${standardDetails}.`);
    const updatedRealmProgressByStandard = calculateRealmProgressByStandard();

    console.log(realmProgressArray);
    console.log(updatedRealmProgressByStandard);

    dispatch(updateRealmProgress(updatedRealmProgressByStandard));

    if (user) {
      console.log("User is authenticated. So saving realm progress.");
      saveExplorerData(
        user.uid,
        updatedRealmProgressByStandard,
        updateMedal ? medalCount + 1 : medalCount,
        updateSuperfast ? superFastCount + 1 : superFastCount
      );
    }
  };

  const updateMedalCountInStore = () => {
    dispatch(updateMedalCount(medalCount + 1));
  };

  const updateSuperFastCountInStore = () => {
    dispatch(updateSuperFastCount(superFastCount + 1));
  };

  /* Timer start */
  //const Ref = useRef(null);

  const [timer, setTimer] = useState("01:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
    setSelectedOptions(selectedOptions);
    if (minutes == 0 && seconds == 0) {
      handleSubmitButton();
    }
  };

  const clearTimer = (e) => {
    //if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    //Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 60);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());

    const timeProgress = setInterval(() => {
      setTimeProgress((prevTimeProgress) =>
        prevTimeProgress >= 100 ? 100 : prevTimeProgress + 1
      );
    }, 600);
    return () => {
      clearInterval(timeProgress);
    };
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  /* Timer end */

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box className={styles.mainSmall}>
            {showScore ? (
              <Box>
                <Paper elevation={8}>
                  <Box sx={{ width: "100%" }} className={styles.mainSmall}>
                    <h3 className={styles.greyText}>
                      You scored {score} out of {questions.length}
                    </h3>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Rating
                        name="rating-star"
                        value={star}
                        precision={1}
                        getLabelText={getLabelText}
                        max={10}
                        size="medium"
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {star !== null && (
                        <Box sx={{ ml: 2 }}>{getLabelText(star)}</Box>
                      )}
                    </Box>
                  </Box>
                </Paper>

                <Paper
                  elevation={8}
                  sx={{ marginTop: "0.5rem", padding: "0.5rem" }}
                >
                  <Box sx={{ width: "100%" }} className={styles.mainSmall}>
                    {score >= 8 ? (
                      <Box>
                        <h3 className={styles.greyText}>
                          Congratulations! You have won the battle and you can
                          now progress to the next arena.
                        </h3>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                          spacing={2}
                          className={styles.spacerOne}
                        >
                          <Grid item>
                            <div>
                              <Link href="/quiz/quizAnswers">
                                <a>
                                  <Button
                                    variant="outlined"
                                    className={styles.buttonLaunch}
                                  >
                                    HOW DID IT GO?
                                  </Button>
                                </a>
                              </Link>
                            </div>
                          </Grid>
                          <Grid item>
                            <div>
                              <Link href="/power">
                                <a>
                                  <Button
                                    variant="contained"
                                    className={styles.buttonLaunch}
                                  >
                                    WHAT'S NEXT?
                                  </Button>
                                </a>
                              </Link>
                            </div>
                          </Grid>
                        </Grid>
                      </Box>
                    ) : (
                      <Box>
                        <h3 className={styles.greyText}>
                          OOPS! Looks like you still have things to learn.
                        </h3>
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justifyContent="center"
                          spacing={2}
                          className={styles.spacerOne}
                        >
                          <Grid item>
                            <div>
                              <Link href="/quiz/quizAnswers">
                                <a>
                                  <Button
                                    variant="outlined"
                                    className={styles.buttonLaunch}
                                  >
                                    HOW DID IT GO?
                                  </Button>
                                </a>
                              </Link>
                            </div>
                          </Grid>
                          <Grid item>
                            <div>
                              <Link href="/learn">
                                <a>
                                  <Button
                                    variant="contained"
                                    className={styles.buttonLaunch}
                                  >
                                    GO BACK TO GURUKUL
                                  </Button>
                                </a>
                              </Link>
                            </div>
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Box>
            ) : (
              <div>
                <Paper elevation={8} sx={{ marginTop: "0.75rem" }}>
                  <Box sx={{ width: "100%" }} className={styles.mainSmall}>
                    <Grid container direction="column">
                      <Grid item xs={6}>
                        <Grid container direction="column">
                          <Grid item>
                            <QuizIcon fontSize="medium" color="primary" />
                          </Grid>
                          <Grid item>
                            <LinearProgressWithLabel value={progress} />
                          </Grid>
                          <Grid item>
                            <Box className={styles.quizCardText}>
                              {currentQuestion + 1} of {questions.length}
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container direction="column">
                          <Grid item sx={{ textAlign: "right" }}>
                            <HourglassTopIcon
                              fontSize="medium"
                              color="primary"
                            />
                          </Grid>
                          <Grid item sx={{ textAlign: "right" }}>
                            <LinearProgressTimeWithLabel value={timeProgress} />
                          </Grid>
                          <Grid item>
                            {timer == "00:01" ? (
                              <Box
                                className={styles.quizCardTextRed}
                                sx={{ textAlign: "right" }}
                              >
                                Almost Over!!!
                              </Box>
                            ) : timer == "00:10" ? (
                              <Box
                                className={styles.quizCardTextRed}
                                sx={{ textAlign: "right" }}
                              >
                                Final Countdown!!
                              </Box>
                            ) : timer == "00:30" ? (
                              <Box
                                className={styles.quizCardTextOrange}
                                sx={{ textAlign: "right" }}
                              >
                                Hurry Up!
                              </Box>
                            ) : (
                              <Box
                                className={styles.quizCardText}
                                sx={{ textAlign: "right" }}
                              >
                                {timer}
                              </Box>
                            )}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>

                <Paper elevation={8} sx={{ marginTop: "0.5rem" }}>
                  <Box sx={{ width: "100%" }} className={styles.mainSmall}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <h3 className={styles.greyText}>
                          {questions[currentQuestion].question}
                        </h3>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {questions[currentQuestion].answerOptions.map(
                        (answer, index) => (
                          <Grid item xs={6} key={index}>
                            <div
                              key={index}
                              onClick={(e) => handleAnswerOption(answer.answer)}
                            >
                              <CardQuizOption
                                key={index}
                                title={index}
                                message={answer.answer}
                                isSelected={
                                  answer.answer ===
                                  selectedOptions[currentQuestion]?.answerByUser
                                    ? true
                                    : false
                                }
                              />
                            </div>
                          </Grid>
                        )
                      )}
                    </Grid>
                  </Box>

                  <Box sx={{ width: "100%" }}>
                    <Grid
                      container
                      direction="row"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Stack direction="row">
                          <IconButton
                            color="primary"
                            aria-label="previous"
                            size="large"
                            className={styles.cardIconButtonLabel}
                            onClick={handlePrevious}
                          >
                            <ArrowBackIosNewIcon />
                            <div>Back</div>
                          </IconButton>
                          <IconButton
                            aria-label="report"
                            size="large"
                            className={styles.cardIconButtonLabel}
                            onClick={handleReport}
                          >
                            <FlagIcon />
                            <div>Report</div>
                          </IconButton>
                          <IconButton
                            color="error"
                            aria-label="add an alarm"
                            size="large"
                            className={styles.cardIconButtonLabel}
                            onClick={handleLove}
                          >
                            <FavoriteIcon />
                            <div>Love it!</div>
                          </IconButton>
                          {currentQuestion + 1 === questions.length ? (
                            <IconButton
                              color="primary"
                              className={styles.cardIconButtonLabel}
                              onClick={handleSubmitButton}
                            >
                              <ArrowForwardIosIcon />
                              <div>Submit</div>
                            </IconButton>
                          ) : (
                            <IconButton
                              color="primary"
                              className={styles.cardIconButtonLabel}
                              onClick={handleNext}
                            >
                              <ArrowForwardIosIcon />
                              <div>Skip Next</div>
                            </IconButton>
                          )}
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Paper>
              </div>
            )}
            ;
          </Box>
        </Grid>
      </Grid>

      {/*<CommonFooter />*/}
      {openModal && (
        <QuizDialog
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          modalType={modalType}
        />
      )}
    </Box>
  );
}
