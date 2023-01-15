import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import { getAuth } from "firebase/auth";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MenuAppBar from "../components/AppBar/MenuAppBar";
import CommonFooter from "../components/Footer/CommonFooter";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [loadingLogo, showLoadingLogo] = useState(true);
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    setTimeout(() => showLoadingLogo(false), 3000);
  }, []);

  return loadingLogo ? (
    <Box className={styles.container}>
      <Zoom in={true} style={{ transitionDelay: "1000ms" }}>
        <Grid container direction="row">
          <Grid item className={styles.main}>
            <Head>
              <title>edplore</title>
              <meta name="description" content="Edplore" />
              <link rel="icon" href="/konark.png" />
            </Head>

            <h1 className={styles.title}>
              edpl
              <ExploreIcon fontSize="large" />
              re
            </h1>
            <h2>educate | explore</h2>
          </Grid>
        </Grid>
      </Zoom>
    </Box>
  ) : (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid className={styles.spacerOne}>
            <motion.div
              initial={{ opacity: 1, scale: 2, y: "8rem" }}
              animate={{ opacity: 1, scale: 1, y: "0rem" }}
              transition={{ duration: 1 }}
            >
              <Box
                component="img"
                sx={{
                  height: "7rem",
                  width: "7rem",
                }}
                src="/assets/konark_sun.svg"
              />
            </motion.div>
          </Grid>

          <Grid className={styles.spacerOne}>
            <motion.div
              initial={{ opacity: 0, scale: 0.25 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 3 }}
            >
              <Typography className={styles.openingLines}>
                Legends tell of the Realms of Bodhi. <br />
                <br />
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.25 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 5 }}
            >
              <Typography className={styles.openingLines}>
                Is it really out there? Or just a myth? <br />
                You stand here right at the gateways. <br /> <br />
                An epic quest awaits!
              </Typography>
            </motion.div>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            className={styles.spacerOne}
          >
            <Grid item>
              <Zoom in={true} style={{ transitionDelay: "5000ms" }}>
                <div>
                  {user ? (
                    <Link href="/explorer">
                      <a>
                        <Button
                          variant="contained"
                          className={styles.buttonExplore}
                          sx={{ fontSize: "larger" }}
                        >
                          RESUME QUEST
                        </Button>
                      </a>
                    </Link>
                  ) : (
                    <Link href="/launch">
                      <a>
                        <Button
                          variant="contained"
                          className={styles.buttonExplore}
                          sx={{ fontSize: "larger" }}
                        >
                          EXPL
                          <ExploreIcon fontSize="small" />
                          RE
                        </Button>
                      </a>
                    </Link>
                  )}
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CommonFooter />
    </Box>
  );
}
