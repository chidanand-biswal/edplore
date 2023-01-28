import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
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

export default function FaqHome() {
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
                <LiveHelpIcon color="primary" fontSize="large" />
              </Grid>

              <Grid item sx={{ padding: "0 1rem 0.5rem 1rem" }}>
                <h3 className={styles.greyText}>Frequently Asked Questions</h3>
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
                  What is &quot;edplore&quot;?
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
                  What are &quot;the Realms of Bodhi&quot;?
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
                <Typography sx={{ fontWeight: "500" }}>
                  What is a &quot;Realm&quot;?
                </Typography>
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
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  What is a &quot;Quest&quot; inside a Realm?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  A Quest is the completion progress that the explorer has made
                  at certain preriod of time. <br />
                  If the explorer is logged-in, then she/he has the advantage of
                  seeing the quest completed till the last session and then try
                  to pick it up again. <br /> If not logged-in, then the
                  explorer can still go on a quest but the quest data will be
                  lost after the session i.e. close of the browser.
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
                  What is &quot;Karma Quotient&quot;?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  That is the eternal question, isn&apos;t it? <br />
                  Here KQ goes up or down based on the explorer&apos;s
                  performances and decisions just like the real
                  &quot;Karma&quot;! <br />
                  A good KQ can help the explorer open gates to new Realms and
                  win awards. <br />
                  Always aim for the perfect KQ which is symoblised by the
                  &quot;perfect pentagon&quot;
                  <br />
                  Click the &quot;Karma&quot; icon available on toolbar in
                  screens to know more.
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
                  How is &quot;Karma Quotient&quot; calculated?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It is complex! <br />
                  Well, actually no as long as the explorer understands what is
                  Karma Quotient. <br />
                  It is the weighted average of quest progresses achieved in
                  each of the Realms.
                  <br />
                  That means those who attempt to make over-all progress in all
                  the Realms have a better chance at a high and balanced KQ.
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
                  What is an &quot;Arena&quot; in a Realm?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It is the assessment of the explorer to find if she/he really
                  conquered the concepts in that quest. <br />
                  In simpler words, it is short test at the end of a quest and
                  determines the completion status. <br />
                  Win the &quot;Arena&quot; to earn various recognitions and get
                  a &quot;level up&quot;. Lose in the arena and go back in the
                  quest. <br />
                  Bloody... much like the arenas for the gladiators!
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
                  What is &quot;The Gurukul&quot;?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  It is the place to learn or rather &quot;refresh&quot; the
                  learnings in a particular concept. <br />
                  It does not aim to replace the lessons from school testbook!{" "}
                  <br />
                  It aims to provide a snapshot of the concept, much like a
                  refresher course, to help the explorer gain confidence before
                  the Arena. <br />
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography sx={{ fontWeight: "500" }}>
                  How do I start a Quest in &quot;the Realms of Bodhi&quot;?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Quite simple! <br />
                  Start with the &quot;EXPLORE&quot; button on the first screen
                  and then just follow the flow.
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
