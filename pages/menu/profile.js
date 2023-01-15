import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import styles from "../../styles/Home.module.css";

export default function ProfileHome() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const provider = new GoogleAuthProvider();

  const signIn = async () => {
    //const result = await signInWithPopup(auth, provider);
    await signInWithRedirect(auth, provider)
      .then((user) => {
        if (user) {
          console.log(user);
          user.user.getIdToken().then((token) => {
            user.log(token);
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally();
    console.log(result.user);
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          {user ? (
            <Box>
              <Grid sx={{ textAlign: "center" }}>
                <img
                  alt="profile"
                  sx={{
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={user.photoURL ? user.photoURL : "/assets/rookie.png"}
                  referrerPolicy="no-referrer"
                  unoptimized="true"
                />
              </Grid>

              <Grid className={styles.spacerOne}>
                <Typography variant="h4">
                  Explorer profile <br />
                </Typography>
                <Grid className={styles.spacerOne}></Grid>
                <Typography variant="h6" sx={{ color: "#808080" }}>
                  Name: {user.displayName} <br />
                  Email: {user.email}
                </Typography>
              </Grid>
            </Box>
          ) : (
            <Box>
              <Grid sx={{ textAlign: "center" }}>
                <Box
                  component="img"
                  sx={{
                    height: "5rem",
                    width: "5rem",
                  }}
                  src="/assets/rookie.png"
                />
              </Grid>
              <Grid className={styles.spacerOne}>
                <Typography variant="h4">
                  Explorer profile <br />
                </Typography>
                <Grid className={styles.spacerOne}></Grid>
                <Typography variant="h6">
                  You are not yet logged in. <br />
                  Login to &apos;edplore&apos; to fully experience the Realms of
                  Bodhi.
                </Typography>
              </Grid>
            </Box>
          )}

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
              {user ? (
                <div>
                  <Link href="/">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                      >
                        BACK TO HOME
                      </Button>
                    </a>
                  </Link>
                </div>
              ) : (
                <div>
                  <Button
                    variant="contained"
                    className={styles.buttonLaunch}
                    onClick={signIn}
                  >
                    LOGIN TO EDPLORE
                  </Button>
                </div>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CommonFooter />
    </Box>
  );
}
