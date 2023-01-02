import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardSmallCustomOption from "../../components/Card/CardSmallCustomOption";
import CardCustomOption from "../../components/Card/CardCustomOption";
import CardButton from "../../components/Card/CardButton";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import SpeedDialCustom from "../../components/SpeedDial/SpeedDialCustom";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import RealmInfoDialog from "../../components/Modal/RealmInfoDialog";

export default function IntroRealmsHome() {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("");

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid>
            <Grid className={styles.mainSmall}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("physics");
                    }}
                  >
                    <CardSmallCustomOption
                      source="physics"
                      title="Physics"
                      message="Physics"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("chemistry");
                    }}
                  >
                    <CardSmallCustomOption
                      source="chemistry"
                      title="Chemistry"
                      message="Chemistry"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider>
              <Grid>
                <Typography className={styles.openingLines}>
                  The Realms
                </Typography>
              </Grid>
            </Divider>
            <Grid className={styles.mainSmall}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("mathematics");
                    }}
                  >
                    <CardSmallCustomOption
                      source="mathematics"
                      title="Mathematics"
                      message="Mathematics"
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("biology");
                    }}
                  >
                    <CardSmallCustomOption
                      source="biology"
                      title="Biology"
                      message="Biology"
                    />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid className={styles.spacerOne}></Grid>

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
                <Link href="/launchCampaign">
                  <a>
                    <Button variant="outlined" className={styles.buttonNormal}>
                      BACK
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
            <Grid item>
              <div>
                <Link href="/unauth/campaign">
                  <a>
                    <Button variant="contained" className={styles.buttonNormal}>
                      LAUNCH !
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />

      {openModal && (
        <RealmInfoDialog
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
