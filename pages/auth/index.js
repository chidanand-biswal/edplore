import { initFirebase } from "../../firebase/firebaseApp";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  browserPopupRedirectResolver,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Router from "next/router";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardCustomOption from "../../components/Card/CardCustomOption";
import CardIconLargeOption from "../../components/Card/CardIconLargeOption";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

export default function AuthHome() {
  initFirebase();
  const auth = getAuth();

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  const [user, loading] = useAuthState(auth);

  if (user) {
    //Redirect to Explorer Info screen
    Router.push("/explorer/");
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
                  <CardIconLargeOption source="google" title="With Google" />
                </div>
              </motion.div>
            </Grid>
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <div onClick={signIn}>
                  <CardIconLargeOption source="email" title="With Email" />
                </div>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
