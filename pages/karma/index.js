import React, { useRef, useState, PureComponent } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useSelector, useDispatch } from "react-redux";
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
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const mockData = {
  labels: ["Physics", "Chemistry", "Mathematics", "Biology", "General"],
  datasets: [
    {
      label: "Karma Quotient",
      data: [5, 5, 5, 5, 5],
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 1,
    },
  ],
};

export default function KarmaHome() {
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

  const calculateKarmaData = () => {
    const realmProgressGeneral =
      (realmProgressPhysics +
        realmProgressChemistry +
        realmProgressMathematics +
        realmProgressBiology) /
      4;

    let labels = ["Physics", "Chemistry", "Mathematics", "Biology", "General"];
    let data = [
      realmProgressPhysics,
      realmProgressChemistry,
      realmProgressMathematics,
      realmProgressBiology,
      realmProgressGeneral,
    ];

    return {
      labels: labels,
      datasets: [
        {
          label: "My Karma Quotient is " + realmProgressGeneral,
          data: data,
          backgroundColor: "rgba(127, 17, 224, 0.2)",
          borderColor: "rgba(255, 60, 172, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%", padding: "1rem 0" }}>
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
                  src="/assets/mandala.png"
                />
              </Grid>

              <Grid item sx={{ padding: "0 0.25rem 0.35rem 1rem" }}>
                <h2 className={styles.greyText}>Know your Karma</h2>
              </Grid>
            </Grid>
          </Box>
          <Paper elevation={8}>
            <Grid container direction="row">
              <Grid item className={styles.mainSmall}>
                <Radar data={calculateKarmaData()} />
                <Box sx={{ textAlign: "center" }}>
                  Karma Quotient is the Resultant <br />
                  of your own Actions and Decisions <br />
                  in the Realms of Bodhi.
                  <br />
                  Aim for a &quot;balanced&quot; Karma!
                </Box>
              </Grid>
            </Grid>
          </Paper>

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
                <Link href="/quiz/">
                  <a>
                    <Button variant="outlined" className={styles.buttonLaunch}>
                      STRAIGHT TO ARENA
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Link href="/learn">
                  <a>
                    <Button variant="contained" className={styles.buttonLaunch}>
                      CONTINUE TO GURUKUL
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
