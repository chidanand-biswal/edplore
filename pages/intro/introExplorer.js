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
import CardSmallCustomOption from "../../components/Card/CardSmallCustomOption";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import ExplorerInfoDialog from "../../components/Modal/ExplorerInfoDialog";
import styles from "../../styles/Home.module.css";

export default function IntroExplorerHome() {
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
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("karma");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <CardSmallCustomOption
                        source="karma"
                        title="karma"
                        message="Karma"
                      />
                    </motion.div>
                  </div>
                </Grid>
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("chakra");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.5 }}
                    >
                      <CardSmallCustomOption
                        source="chakra"
                        title="chakra"
                        message="Chakra"
                      />
                    </motion.div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider>
              <Grid>
                <Typography className={styles.openingLines}>
                  The Explorer
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
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("kavach");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <CardSmallCustomOption
                        source="badge"
                        title="badge"
                        message="Kavach"
                      />
                    </motion.div>
                  </div>
                </Grid>

                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("vajra");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2.5 }}
                    >
                      <CardSmallCustomOption
                        source="superFast"
                        title="superFast"
                        message="Vajra"
                      />
                    </motion.div>
                  </div>
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
                  <Link href="/intro/">
                    <a>
                      <Button
                        variant="outlined"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        I WANT TO REVISIT
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Link href="/campaign/">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        START MY CAMPAIGN
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
                  <Link href="/campaign/">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        START MY CAMPAIGN
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Link href="/intro/">
                    <a>
                      <Button
                        variant="outlined"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        I WANT TO REVISIT
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>

      <ToolbarFooter />

      {openModal && (
        <ExplorerInfoDialog
          open={openModal}
          onClose={() => {
            setOpenModal(false);
          }}
          modalType={modalType}
        />
      )}
    </Box>
  );
}
