import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import styles from "../../styles/Home.module.css";

export default function AwardHome() {
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
                <EmojiEventsIcon color="primary" fontSize="large" />
              </Grid>

              <Grid item sx={{ padding: "0 1rem 0.5rem 1rem" }}>
                <h2 className={styles.greyText}>My Rewards</h2>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ maxWidth: "50rem" }}>
            <Grid container direction="column">
              <Grid item sx={{ padding: "1rem" }}>
                <Typography>
                  The Realms of Bodhi rewards the deserving and the honest.
                  <br />
                  We promise to come back with policies & guidelines for awards:
                  how to win and how to claim.
                  <br />
                  Visit again soon!
                </Typography>
              </Grid>
            </Grid>
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
