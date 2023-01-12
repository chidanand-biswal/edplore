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
          <Box sx={{ width: "100%", paddingTop: "1rem" }}>
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
                <h2 className={styles.greyText}>Credits</h2>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ maxWidth: "50rem" }}>
            <Grid container direction="column">
              <Grid item sx={{ padding: "1rem" }}>
                <Typography>
                  We at "edplore", are a bootstrapped organization with a noble
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
              title="Subhashish Panigrahi, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:Konarka.svg"
            >
              <img
                width="32"
                alt="Konarka"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Konarka.svg/32px-Konarka.svg.png"
              />
              Subhashish Panigrahi, CC BY-SA 4.0 via Wikimedia Commons
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/hurdy-gurdy"
              title="hurdy gurdy icons"
            >
              Hurdy gurdy icons created by Freepik - Flaticon
            </a>{" "}
            <br />
            <a
              href="https://www.flaticon.com/free-icons/knight"
              title="knight icons"
            >
              Knight icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/knight"
              title="knight icons"
            >
              Knight icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/physics"
              title="physics icons"
            >
              Physics icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/chemistry"
              title="chemistry icons"
            >
              Chemistry icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/mathematics"
              title="mathematics icons"
            >
              Mathematics icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/biology"
              title="biology icons"
            >
              Biology icons created by Eucalyp - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/planet"
              title="planet icons"
            >
              Planet icons created by smalllikeart - Flaticon
            </a>
            <br />
            <a href="https://www.flaticon.com/free-icons/map" title="map icons">
              Map icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/banyan"
              title="banyan icons"
            >
              Banyan icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/stadium"
              title="stadium icons"
            >
              Stadium icons created by Freepik - Flaticon
            </a>
            <br />
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
