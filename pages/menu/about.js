import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function AboutHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid className={styles.spacerOne}>
            <Box
              component="img"
              sx={{
                height: "5rem",
                width: "5rem",
              }}
              src="/assets/compass.png"
            />
          </Grid>

          <Grid className={styles.spacerOne}>
            <Typography variant="h2">
              edplore <br />
            </Typography>
            <Typography className={styles.openingLines}>
              This is an ed-game aimed at school-goers with the goal to increase
              interest towards STEM subjects.
            </Typography>
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
