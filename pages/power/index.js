import React, { useRef, useState, PureComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import CardSmallCustomOption from "../../components/Card/CardSmallCustomOption";
import Badge from "@mui/material/Badge";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { motion } from "framer-motion";
import Zoom from "@mui/material/Zoom";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";

export default function PowerHome() {
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

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <h3 className={styles.greyText}>My Kirti Board</h3>
              </Grid>
            </Grid>
          </Box>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ padding: "1rem" }}
          >
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
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
                      <Typography variant="h6">Kavach</Typography>
                    </Grid>
                    <Grid item sx={{ padding: "0.5rem" }}>
                      <Paper elevation={8} sx={{ padding: "1rem" }}>
                        <Badge
                          badgeContent={medalCount}
                          color="primary"
                          showZero
                        >
                          <LocalPoliceIcon fontSize="large" color="action" />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />
                        You win a "Kavach" each time you have scored a 'perfect
                        10' in the battle!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
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
                          <BrightnessHighIcon fontSize="large" color="action" />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />A new "Chakra" whenever
                        your Karma Q goes past a milestone!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5 }}
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
                      <Typography variant="h6">Vajra</Typography>
                    </Grid>
                    <Grid item sx={{ padding: "0.5rem" }}>
                      <Paper elevation={8} sx={{ padding: "1rem" }}>
                        <Badge
                          badgeContent={superFastCount}
                          color="primary"
                          showZero
                        >
                          <ElectricBoltIcon fontSize="large" color="action" />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />
                        To win a "Vajra", you must win the arena battle before
                        the time is over!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "0.75rem" }}
          >
            <Grid item>
              <Zoom in={true} style={{ transitionDelay: "3000ms" }}>
                <div>
                  <Link href="/campaign/">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                      >
                        CONTINUE TO EXPLORE
                      </Button>
                    </a>
                  </Link>
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
