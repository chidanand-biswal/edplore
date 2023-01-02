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
          <Paper elevation={5}>
            <Box sx={{ width: "100%", padding: "0.25rem" }}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item>
                  <HandshakeIcon color="primary" fontSize="large" />
                </Grid>

                <Grid item sx={{ padding: "0 1rem 0.5rem 1rem" }}>
                  <h3 className={styles.greyText}>Credits</h3>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          <Box sx={{ padding: "2rem" }}>
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
