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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import Paper from "@mui/material/Paper";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import HandshakeIcon from "@mui/icons-material/Handshake";

export default function CreditsHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid>
            <HandshakeIcon color="primary" fontSize="large" />
          </Grid>

          <Grid className={styles.spacerOne}>
            <Typography variant="h4">
              Credits
              <br />
            </Typography>
          </Grid>
          <Box sx={{ maxWidth: "50rem" }}>
            <Grid container direction="column">
              <Grid item sx={{ padding: "1rem" }}>
                <Typography>
                  We, at "edplore", are a bootstrapped organization with a noble
                  mission in the sector of education.
                  <br />
                  In order to make the application accessible to most, we have
                  made use of open-source technology platforms and assets while
                  building this from scratch.
                  <br />
                  We remain indebted to the below and announce credits as due:
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ padding: "1rem" }}>
            <a
              href="https://www.flaticon.com/free-icons/hurdy-gurdy"
              title="hurdy gurdy icons"
            >
              Hurdy gurdy icons created by Freepik - Flaticon
            </a>
          </Box>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "0.75rem" }}
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

      <ToolbarFooter />
    </Box>
  );
}
