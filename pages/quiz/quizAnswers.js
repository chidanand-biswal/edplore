import React, { useRef, useState, PureComponent } from "react";
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
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import { default as data } from "../api/mockData.json";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../components/Pagination/paginationBuilder";
import CardLearn from "../../components/Card/CardLearn";

export default function QuizAnswerHome() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  const findCorrectAnswer = (answerOptions) => {
    let answerObj = answerOptions.filter((answer) => answer.isCorrect === true);
    return answerObj[0].answer;
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box>
            <Paper elevation={8} sx={{ marginTop: "1rem", padding: "0.5rem" }}>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
                    <QuestionAnswerIcon fontSize="large" color="primary" />
                  </Grid>

                  <Grid item sx={{ padding: "1rem" }}>
                    <h3 className={styles.greyText}>Answer Key</h3>
                  </Grid>
                </Grid>
              </Box>
            </Paper>

            <Paper
              elevation={8}
              sx={{ marginTop: "0.5rem", padding: "0.5rem" }}
            >
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  {_DATA.currentData().map((question, index) => (
                    <Grid item key={index}>
                      <CardLearn
                        title={question.question}
                        message={findCorrectAnswer(question.answerOptions)}
                      />
                    </Grid>
                  ))}
                  <Grid item>
                    <Pagination
                      count={count}
                      size="large"
                      page={page}
                      variant="outlined"
                      shape="rounded"
                      onChange={handleChange}
                      color="primary"
                    />
                  </Grid>
                </Grid>
              </Box>
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
                    <Link href="/unauth/campaign">
                      <a>
                        <Button
                          variant="outlined"
                          className={styles.buttonLaunch}
                        >
                          CHOOSE OTHER ARENA
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
                          I WANT TO TRY AGAIN
                        </Button>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Grid>
      </Grid>

      {/*<CommonFooter />*/}
    </Box>
  );
}
