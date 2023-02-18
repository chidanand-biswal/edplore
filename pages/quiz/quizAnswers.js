import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import Link from "next/link";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardLearn from "../../components/Card/CardLearn";
import usePagination from "../../components/Pagination/paginationBuilder";
import styles from "../../styles/Home.module.css";
import { default as data } from "../api/mockData.json";

export default function QuizAnswerHome() {
  const { currentQuizData } = useSelector((state) => state.currentQuizData);

  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(currentQuizData.length / PER_PAGE);
  const _DATA = usePagination(currentQuizData, PER_PAGE);

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
                    <Link href="/campaign/">
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
