import React from "react";
import { useSelector } from "react-redux";

import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import TipsAndUpdatesTwoToneIcon from "@mui/icons-material/TipsAndUpdatesTwoTone";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import { motion } from "framer-motion";
import Link from "next/link";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import styles from "../../styles/Home.module.css";

export default function PowerHome() {
  const { standardDetails } = useSelector((state) => state.standardDetails);

  const { realmProgress } = useSelector((state) => state.realmProgress);

  const realmProgressArray = realmProgress ? realmProgress : [];

  const calculateRealmProgressByStandard = (realm) => {
    let existingRealmProgressPerStandard = realmProgressArray.filter(
      (element) => element.standard === standardDetails
    );
    switch (realm) {
      case "PHYSICS":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressPhysics
          : 0;

      case "CHEMISTRY":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressChemistry
          : 0;

      case "MATHEMATICS":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressMathematics
          : 0;

      case "BIOLOGY":
        return existingRealmProgressPerStandard.length > 0
          ? existingRealmProgressPerStandard[0].realmProgressBiology
          : 0;

      default:
        return 0;
    }
  };

  const { medalCount } = useSelector((state) => state.medalCount);

  const { superFastCount } = useSelector((state) => state.superFastCount);

  const realmProgressPhysics = calculateRealmProgressByStandard("PHYSICS");
  const realmProgressChemistry = calculateRealmProgressByStandard("CHEMISTRY");
  const realmProgressMathematics =
    calculateRealmProgressByStandard("MATHEMATICS");
  const realmProgressBiology = calculateRealmProgressByStandard("BIOLOGY");

  let averageProgress = Math.floor(
    (realmProgressPhysics +
      realmProgressChemistry +
      realmProgressMathematics +
      realmProgressBiology) /
      4
  );

  const realmProgressGeneral =
    typeof averageProgress != "undefined" ? averageProgress : 0;

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <h2 className={styles.greyText}>
                  Dear Explorer,
                  <br />
                  You are awesome!
                </h2>
              </Grid>
            </Grid>
          </Box>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ padding: "1rem" }}
          >
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
              >
                <Paper
                  elevation={8}
                  sx={{ padding: "0 1rem", maxWidth: "20rem" }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Typography variant="h6">Kavach</Typography>
                    </Grid>
                    <Grid item sx={{ padding: "0.5rem" }}>
                      <Paper elevation={8} sx={{ padding: "1rem" }}>
                        <Badge
                          badgeContent={medalCount}
                          color="primary"
                          showZero
                        >
                          <LocalPoliceIcon fontSize="large" color="action" />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />
                        You win a &apos;Kavach&apos; each time you have scored a
                        &apos;perfect 10&apos; in the battle!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
            {/** 
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <Paper
                  elevation={8}
                  sx={{ padding: "0 1rem", maxWidth: "20rem" }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Typography variant="h6">Chakra</Typography>
                    </Grid>
                    <Grid item sx={{ padding: "0.5rem" }}>
                      <Paper elevation={8} sx={{ padding: "1rem" }}>
                        <Badge
                          badgeContent={realmProgressGeneral}
                          color="primary"
                          showZero
                        >
                          <BrightnessHighIcon fontSize="large" color="action" />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />A new "Chakra" whenever
                        your Karma Q goes past a milestone!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
*/}
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <Paper
                  elevation={8}
                  sx={{ padding: "0 1rem", maxWidth: "20rem" }}
                >
                  <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Grid item>
                      <Typography variant="h6">Vajra</Typography>
                    </Grid>
                    <Grid item sx={{ padding: "0.5rem" }}>
                      <Paper elevation={8} sx={{ padding: "1rem" }}>
                        <Badge
                          badgeContent={superFastCount}
                          color="primary"
                          showZero
                        >
                          <ElectricBoltIcon
                            fontSize="large"
                            sx={{ color: "blue" }}
                          />
                        </Badge>
                      </Paper>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ fontWeight: "1" }}>
                        <TipsAndUpdatesTwoToneIcon />
                        To win a &apos;Vajra&apos;, you must win the arena
                        battle before the time is over!
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "0.75rem" }}
          >
            <Grid item>
              <Zoom in={true} style={{ transitionDelay: "2000ms" }}>
                <div>
                  <Link href="/power/final">
                    <a>
                      <Button
                        variant="contained"
                        className={styles.buttonLaunch}
                      >
                        ARE YOU &apos;THE MYSTIC ONE&apos;?
                      </Button>
                    </a>
                  </Link>
                </div>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
