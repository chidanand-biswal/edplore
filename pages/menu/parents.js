import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function ParentHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main} sx={{ paddingTop: "1rem" }}>
          <Grid className={styles.spacerOne}>
            <EscalatorWarningIcon color="primary" fontSize="large" />
          </Grid>

          <Grid className={styles.spacerOne}>
            <Typography variant="h6">Dearest Parent,</Typography>
            <Box sx={{ padding: "1rem 0", maxWidth: "50rem" }}>
              <Grid container direction="column">
                <Grid item sx={{ padding: "0.25rem 0" }}>
                  <Typography>
                    Are you tired of your kid killing precious hours with
                    mind-less violent video games or soulless social media?
                    <br />
                    Do you sometimes find yourself helpless in ensuring a
                    quality educative experience for your kid that the kid
                    really loves?
                    <br />
                    Well, you are not alone! We know exactly how you feel.{" "}
                    <br /> We, at BISWAL Technologies, are a family of educators
                    spanning across three generations. We all share a passion
                    for education and everything that helps make it interesting,
                    affordable and liberating.
                    <br />
                    The 'edplore' application is developed with lots of thoughts
                    and love after taking feedbacks from hundereds of similarly
                    anguished parents and teachers.
                    <br />
                    Not just making education interesting, another goal of this
                    is to help our young ones understand the life lessons in a
                    fun way. Life lessons like 'as you sow, so you reap', 'being
                    responsible for your decisions and actions', 'Karma' etc.
                    <br />
                    It is an innovation to help install a sense of explorations
                    in our kids. Do give it a try today! <br />
                    <br />
                    With warmest regards, <br />
                  </Typography>
                  <Typography sx={{ fontWeight: "800" }}>
                    Team edplore
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid className={styles.spacerOne}></Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            className={styles.spacerOne}
          >
            <Grid item>
              <div>
                <Link href="/">
                  <a>
                    <Button variant="contained" className={styles.buttonLaunch}>
                      BACK TO HOME
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CommonFooter />
    </Box>
  );
}
