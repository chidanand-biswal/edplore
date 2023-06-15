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
import RealmInfoDialog from "../../components/Modal/RealmInfoDialog";
import styles from "../../styles/Home.module.css";

export default function IntroRealmsHome() {
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
                      setModalType("physics");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <CardSmallCustomOption
                        source="physics"
                        title="Physics"
                        message="Physics"
                      />
                    </motion.div>
                  </div>
                </Grid>
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("chemistry");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.5 }}
                    >
                      <CardSmallCustomOption
                        source="chemistry"
                        title="Chemistry"
                        message="Chemistry"
                      />
                    </motion.div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Divider>
              <Grid>
                <Typography className={styles.openingLines}>
                  The Realms
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
                      setModalType("mathematics");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2 }}
                    >
                      <CardSmallCustomOption
                        source="mathematics"
                        title="Mathematics"
                        message="Mathematics"
                      />
                    </motion.div>
                  </div>
                </Grid>
                <Grid item>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setModalType("biology");
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 2.5 }}
                    >
                      <CardSmallCustomOption
                        source="biology"
                        title="Biology"
                        message="Biology"
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
                  <Link href="/campaign">
                    <a>
                      <Button
                        variant="outlined"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        SKIP TO CAMPAIGN
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Link href="/intro/introExplorer">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        KNOW THE RULES
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
                  <Link href="/intro/introExplorer">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        KNOW THE RULES
                      </Button>
                    </a>
                  </Link>
                </div>
              </Grid>
              <Grid item>
                <div>
                  <Link href="/campaign">
                    <a>
                      <Button
                        variant="outlined"
                        className={styles.buttonLaunch}
                        sx={{ minWidth: "15rem" }}
                      >
                        SKIP TO CAMPAIGN
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
        <RealmInfoDialog
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
