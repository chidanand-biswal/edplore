import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../components/AppBar/MenuAppBar";
import CardCustomOption from "../components/Card/CardCustomOption";
import ToolbarFooter from "../components/Footer/ToolbarFooter";
import SpeedDialCustom from "../components/SpeedDial/SpeedDialCustom";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";

export default function InfoHome() {
  return;
  <Box className={styles.container}>
    <MenuAppBar />

    <Grid container direction="row">
      <Grid item>
        <SpeedDialCustom />
      </Grid>
      <Grid item className={styles.main}>
        <h2 className={styles.greyText}>Choose Your Path</h2>

        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          <Grid item>
            <Link href="/unauth" passHref>
              <a>
                <CardCustomOption
                  title="Give it a try"
                  message="Let me first see what the hype is all about !"
                />
              </a>
            </Link>
          </Grid>
          <Grid item>
            <Link href="/auth" passHref>
              <a>
                <CardCustomOption
                  title="Ready to edplore"
                  message="I want to hit the ground running !!"
                />
              </a>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

    <ToolbarFooter />
  </Box>;
}
