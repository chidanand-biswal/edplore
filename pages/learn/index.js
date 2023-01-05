import React, { useRef, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardLearn from "../../components/Card/CardLearn";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
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
import StadiumIcon from "@mui/icons-material/Stadium";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
import { default as tutorialMock } from "../api/mockTutorial.json";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import CardCustomOption from "../../components/Card/CardCustomOption";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../components/Pagination/paginationBuilder";
import { Divider } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import standardArenaMapData from "../../static/standardArenaMap.json";

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

export default function LearnHome() {
  const { realmActive } = useSelector((state) => state.realmActive);
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
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const { currentTutorialData } = useSelector(
    (state) => state.currentTutorialData
  );

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

  console.log("LearnHome");
  console.log(currentTutorialData);

  const data =
    typeof currentTutorialData != "undefined" && currentTutorialData.length > 0
      ? currentTutorialData
      : tutorialMock;

  const bigScreenInd = useMediaQuery("(min-width:900px)");
  let [page, setPage] = useState(1);
  const PER_PAGE = 1;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box>
            <Paper elevation={5} sx={{ marginTop: "1rem", padding: "0.5rem" }}>
              <Box sx={{ width: "100%" }}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Grid item>
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
                            height: "2rem",
                            width: "2rem",
                          }}
                          src="/assets/banyan.png"
                        />
                      </Grid>

                      <Grid item sx={{ padding: "0 1rem" }}>
                        <h3 className={styles.greyText}>Gurukul</h3>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider flexItem></Divider>

                  <Grid item>
                    <h4 className={styles.greyText}>{findArenaName()}</h4>
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
                  {_DATA.currentData().map((tutorial, index) => (
                    <Grid item key={index}>
                      <CardLearn
                        title={tutorial.title}
                        message={tutorial.content}
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

              {bigScreenInd ? (
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
                            CHOOSE ANOTHER ARENA
                          </Button>
                        </a>
                      </Link>
                    </div>
                  </Grid>
                  <Grid item>
                    <div>
                      <Link href="/quiz">
                        <a>
                          <Button
                            variant="contained"
                            className={styles.buttonLaunch}
                          >
                            STRAIGHT TO THIS ARENA!
                          </Button>
                        </a>
                      </Link>
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
                  className={styles.spacerOne}
                >
                  <Grid item>
                    <div>
                      <Link href="/quiz">
                        <a>
                          <Button
                            variant="contained"
                            className={styles.buttonLaunch}
                          >
                            STRAIGHT TO THIS ARENA!
                          </Button>
                        </a>
                      </Link>
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
                            CHOOSE ANOTHER ARENA
                          </Button>
                        </a>
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              )}
            </Paper>
          </Box>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
