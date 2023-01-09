import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import Divider from "@mui/material/Divider";
import Router from "next/router";
import PentagonIcon from "@mui/icons-material/Pentagon";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";

import styles from "../../styles/Home.module.css";
import CommonDialog from "../Modal/CommonDialog";

export default function ToolbarFooter() {
  const bigScreenInd = useMediaQuery("(min-width:900px)");

  const [openModal, setOpenModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  return bigScreenInd ? (
    <Paper
      style={{
        marginTop: "calc(10% + 5rem)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      elevation={8}
    >
      <Container>
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
                  aria-label="home"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => Router.push("/")}
                >
                  <TempleHinduIcon />
                  <div>Home</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  aria-label="badge"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("badge");
                  }}
                >
                  <BrightnessHighIcon />
                  <div>Kirti</div>
                </IconButton>

                <Divider orientation="vertical" flexItem />
                <IconButton
                  color="primary"
                  aria-label="karma"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("karma");
                  }}
                >
                  <PentagonIcon />
                  <div>KarmaQ</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  aria-label="leader"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("leader");
                  }}
                >
                  <LeaderboardIcon />
                  <div>Leaders</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  className={styles.toolBarButtonLabel}
                  onClick={() => {}}
                >
                  <HelpCenterIcon />
                  <div>Help</div>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {openModal && (
        <CommonDialog
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          modalType={modalType}
        />
      )}
    </Paper>
  ) : (
    <Paper
      style={{
        marginTop: "calc(10% + 7rem)",
        width: "100%",
        position: "sticky",
        bottom: 0,
        borderBottomWidth: "0rem",
      }}
      component="footer"
      elevation={8}
    >
      <Container>
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
                  aria-label="home"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => Router.push("/")}
                >
                  <TempleHinduIcon />
                  <div>Home</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  aria-label="badge"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("badge");
                  }}
                >
                  <BrightnessHighIcon />
                  <div>Kirti</div>
                </IconButton>

                <Divider orientation="vertical" flexItem />
                <IconButton
                  color="primary"
                  aria-label="karma"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("karma");
                  }}
                >
                  <PentagonIcon />
                  <div>Karma</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  aria-label="leader"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("leader");
                  }}
                >
                  <LeaderboardIcon />
                  <div>Leaders</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  className={styles.toolBarButtonLabel}
                  onClick={() => {}}
                >
                  <HelpCenterIcon />
                  <div>Help</div>
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {openModal && (
        <CommonDialog
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          modalType={modalType}
        />
      )}
    </Paper>
  );
}
