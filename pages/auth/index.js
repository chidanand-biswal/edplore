import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
} from "firebase/auth";
import { motion } from "framer-motion";
import Router from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardIconLargeOption from "../../components/Card/CardIconLargeOption";
import { initFirebase } from "../../firebase/firebaseApp";
import styles from "../../styles/Home.module.css";

export default function AuthHome() {
  initFirebase();
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  //provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const facebookProvider = new FacebookAuthProvider();
  facebookProvider.addScope("gaming_user_picture");

  const [user, loading] = useAuthState(auth);

  if (user) {
    //Redirect to Explorer Info screen
    Router.push("/explorer/" + user.uid);
  }

  if (loading) {
    //Show loading screen while authentication happens
    return (
      <Box className={styles.container}>
        <MenuAppBar />

        <Grid container direction="row">
          <Grid item className={styles.main}>
            <Grid className={styles.spacerOne}>
              <CircularProgress color="inherit" />
            </Grid>

            <Grid className={styles.spacerOne}>
              <Typography variant="h5">
                Entering the Realms of Bodhi...
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    );
  }

  const signIn = async () => {
    //const result = await signInWithPopup(auth, provider);

    await signInWithRedirect(auth, googleProvider)
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
  };

  const signInWithGoogle = async () => {
    //const result = await signInWithPopup(auth, provider);

    await signInWithRedirect(auth, googleProvider)
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
  };

  const signInWithFacebook = async () => {
    //const result = await signInWithPopup(auth, provider);

    await signInWithRedirect(auth, facebookProvider)
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
  };

  return (
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
              <h2 className={styles.greyText}>Enter the Realms of Bodhi</h2>
            </motion.div>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
          >
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <div onClick={signIn}>
                  <CardIconLargeOption
                    source="google"
                    title="Continue with Google"
                  />
                </div>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <div onClick={signInWithFacebook}>
                  <CardIconLargeOption
                    source="facebook"
                    title="Continue with Facebook"
                  />
                </div>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5 }}
              >
                <div onClick={signInWithGoogle}>
                  <CardIconLargeOption
                    source="email"
                    title="Continue with Email"
                  />
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
