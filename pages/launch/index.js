import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardSmallCustom from "../../components/Card/CardSmallCustom";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import ExplorerInfoDialog from "../../components/Modal/ExplorerInfoDialog";
import styles from "../../styles/Home.module.css";

export default function ILaunchHome() {
  const [openModal, setOpenModal] = React.useState(false);
  const [modalType, setModalType] = React.useState("");
  const bigScreenInd = useMediaQuery("(min-width:900px)");

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid>
            <Grid className={styles.mainSmall}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <CardSmallCustom source="karma" title="karma" />
                  </motion.div>
                </Grid>
                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 2 }}
                  >
                    <CardSmallCustom source="chakra" title="chakra" />
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
            <Divider>
              <Grid>
                <Typography className={styles.openingLinesLaunchVariant}>
                  The Lore of Bodhi <br />
                  <br />
                </Typography>
                <Typography className={styles.openingLinesLaunch}>
                  &quot;Thus spoke an ancient lore, <br />
                  Runes & Artifacts do wait for
                  <br />
                  The One who traverses the Realms;
                  <br /> To reward & to revere forever!&quot;
                </Typography>
                <br />

                <Typography className={styles.openingLinesLaunchVariant}>
                  What are you waiting for?
                </Typography>
              </Grid>
            </Divider>
            <Grid className={styles.mainSmall}>
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
                spacing={2}
              >
                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 3 }}
                  >
                    <CardSmallCustom source="badge" title="badge" />
                  </motion.div>
                </Grid>

                <Grid item>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 4 }}
                  >
                    <CardSmallCustom source="superFast" title="superFast" />
                  </motion.div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid className={styles.spacerOne}></Grid>

          {bigScreenInd ? (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              className={styles.spacerOne}
            >
              <Grid item>
                <div>
                  <Link href="/launch/path">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        ENTER THE REALMS OF BODHI
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              className={styles.spacerOne}
            >
              <Grid item>
                <div>
                  <Link href="/launch/path">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        ENTER THE REALMS OF BODHI
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
