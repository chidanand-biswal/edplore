import { Divider, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardLearn from "../../components/Card/CardLearn";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import usePagination from "../../components/Pagination/paginationBuilder";
import standardArenaMapData from "../../static/standardArenaMap.json";
import styles from "../../styles/Home.module.css";
import { default as tutorialMock } from "../api/mockTutorial.json";

/*
export async function getStaticProps() {
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
  const { currentTutorialData } = useSelector(
    (state) => state.currentTutorialData
  );

  const realmProgressPhysics = calculateRealmProgressByStandard("PHYSICS");
  const realmProgressChemistry = calculateRealmProgressByStandard("CHEMISTRY");
  const realmProgressMathematics =
    calculateRealmProgressByStandard("MATHEMATICS");
  const realmProgressBiology = calculateRealmProgressByStandard("BIOLOGY");

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

  const data =
    typeof currentTutorialData != "undefined" && currentTutorialData.length > 0
      ? currentTutorialData
      : tutorialMock;

  const bigScreenInd = useMediaQuery("(min-width:450px)");
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
            <Paper elevation={8} sx={{ padding: "1rem" }}>
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
                      direction="column"
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

                      <Grid item>
                        <Typography variant="h5" sx={{ color: "#808080" }}>
                          Gurukul
                        </Typography>
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
