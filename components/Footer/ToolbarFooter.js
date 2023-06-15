import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import PentagonIcon from "@mui/icons-material/Pentagon";
import TempleHinduIcon from "@mui/icons-material/TempleHindu";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Router from "next/router";
import * as React from "react";

import styles from "../../styles/Home.module.css";
import CommonDialog from "../Modal/CommonDialog";
import HelpDialog from "../Modal/HelpDialog";
import LeaderBoardDialog from "../Modal/LeaderBoardDialog";

export default function ToolbarFooter() {
  const bigScreenInd = useMediaQuery("(min-width:900px)");

  const [openModal, setOpenModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const [openHelpModal, setOpenHelpModal] = React.useState(false);
  const [openLeaderModal, setOpenLeaderModal] = React.useState(false);

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
                  color={
                    modalType === "badge" && openModal === true ? "primary" : ""
                  }
                  aria-label="badge"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("badge");
                  }}
                >
                  <BrightnessHighIcon />
                  <div>Score</div>
                </IconButton>

                <Divider orientation="vertical" flexItem />
                <IconButton
                  color={
                    modalType === "karma" && openModal === true ? "primary" : ""
                  }
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
                  color={openLeaderModal === true ? "primary" : ""}
                  aria-label="leader"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenLeaderModal(true);
                  }}
                >
                  <LeaderboardIcon />
                  <div>Leaders</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  color={openHelpModal === true ? "primary" : ""}
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenHelpModal(true);
                  }}
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
      {openHelpModal && (
        <HelpDialog
          open={openHelpModal}
          onClose={() => {
            setOpenHelpModal(false);
          }}
        />
      )}
      {openLeaderModal && (
        <LeaderBoardDialog
          open={openLeaderModal}
          onClose={() => {
            setOpenLeaderModal(false);
          }}
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
                  color={
                    modalType === "badge" && openModal === true ? "primary" : ""
                  }
                  aria-label="badge"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenModal(true);
                    setModalType("badge");
                  }}
                >
                  <BrightnessHighIcon />
                  <div>Score</div>
                </IconButton>

                <Divider orientation="vertical" flexItem />
                <IconButton
                  color={
                    modalType === "karma" && openModal === true ? "primary" : ""
                  }
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
                  color={openLeaderModal === true ? "primary" : ""}
                  aria-label="leader"
                  size="large"
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenLeaderModal(true);
                  }}
                >
                  <LeaderboardIcon />
                  <div>Leaders</div>
                </IconButton>
                <Divider orientation="vertical" flexItem />
                <IconButton
                  color={openHelpModal === true ? "primary" : ""}
                  className={styles.toolBarButtonLabel}
                  onClick={() => {
                    setOpenHelpModal(true);
                  }}
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
      {openHelpModal && (
        <HelpDialog
          open={openHelpModal}
          onClose={() => {
            setOpenHelpModal(false);
          }}
        />
      )}
      {openLeaderModal && (
        <LeaderBoardDialog
          open={openLeaderModal}
          onClose={() => {
            setOpenLeaderModal(false);
          }}
        />
      )}
    </Paper>
  );
}
