import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PolicyIcon from "@mui/icons-material/Policy";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import styles from "../../styles/Home.module.css";

export default function PolicyHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%", padding: "0.5rem" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <PolicyIcon color="primary" fontSize="large" />
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ padding: "2rem" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  Terms of Service
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  An ed-game aimed at school-goers with the goal to increase
                  interest towards STEM subjects.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  Privacy Policy
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  The fictional multiverse that each explorer is going to
                  discover here. <br />
                  In reality, it is the aggregation of STEM subjects tailored to
                  meet a specific standard&apos;s syllabus.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "500" }}>Cookie Use</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Realm is refers to one of the STEM subjects for a specific
                  standard as prescribed by CBSE and ICSE boards. <br />
                  At this moment, it may be one of Physics, Chemistry, Biology
                  or Mathematics.
                </Typography>
              </AccordionDetails>
            </Accordion>
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

      <CommonFooter />
    </Box>
  );
}
