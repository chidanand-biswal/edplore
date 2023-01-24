import Diversity1Icon from "@mui/icons-material/Diversity1";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import styles from "../../styles/Home.module.css";

export default function ContactHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main} sx={{ paddingTop: "1rem" }}>
          <Grid className={styles.spacerOne}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <Diversity1Icon color="primary" fontSize="large" />
              </Grid>
              <Grid item sx={{ padding: "0 0 0 1rem" }}>
                <h2 className={styles.greyText}>Who we are</h2>
              </Grid>
            </Grid>

            <Box sx={{ padding: "1rem 0", maxWidth: "50rem" }}>
              <Grid container direction="column">
                <Grid item sx={{ padding: "1rem 0" }}>
                  <Typography>
                    We are a family of educators spanning across three
                    generations and for more than three quarters of a century.
                    <br />
                    We share a passion for education and everything that helps
                    make it interesting, affordable and liberating. <br />
                    <br />
                    Do you have a feedback that can make us better or just wish
                    to join us in our passion and endeavour? <br />
                    Please feel free to contact us:
                  </Typography>
                </Grid>
                <Grid item>
                  <Grid container direction="row">
                    <Grid item>
                      <EmailIcon />
                    </Grid>
                    <Grid item sx={{ padding: "0 1rem" }}>
                      <Typography className={styles.openingLines}>
                        <a target="_top" href="mailto:edplore.help@gmail.com">
                          edplore.help@gmail.com
                        </a>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid item>
                    <Grid container direction="row">
                      <Grid item>
                        <PhoneIcon />
                      </Grid>
                      <Grid item sx={{ padding: "0 1rem" }}>
                        <Typography className={styles.openingLines}>
                          <a href="tel:+918583878899">+91 85 83 87 88 99</a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
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
