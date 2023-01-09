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
            <EscalatorWarningIcon fontSize="large" />
          </Grid>

          <Grid className={styles.spacerOne}>
            <Typography variant="h5">
              Dearest Parent,
              <br />
            </Typography>
            <Box sx={{ padding: "1rem 0", maxWidth: "50rem" }}>
              <Grid container direction="column">
                <Grid item sx={{ padding: "1rem 0" }}>
                  <Typography>
                    We are a family of educators spanning across three
                    generations for more than three quarters of a century.
                    <br />
                    We share a passion for education and everything that helps
                    make it interesting, affordable and liberating. <br />
                    <br />
                    Do you have a feedback that can make us better or just wish
                    to join us in our passion and endeavour? <br />
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
