import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import styles from "../../styles/Home.module.css";

export default function AboutHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row" sx={{ paddingTop: "2rem" }}>
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

          <Box sx={{ padding: "1rem 0", maxWidth: "50rem" }}>
            <Grid className={styles.spacerOne}>
              <Typography variant="h3">
                edplore <br />
              </Typography>
              <Typography>
                edplore = educate + explore <br /> <br />
                This is an ed-game (educational game) aimed at school-goers with
                the goal to increase interest towards STEM subjects like
                science, technology, engineering and mathematics. <br />
                It hopes to inspire and install a positive sense of
                explorations.
              </Typography>
            </Grid>
          </Box>

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
