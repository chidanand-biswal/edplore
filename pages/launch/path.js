import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardIconLargeOption from "../../components/Card/CardIconLargeOption";
import styles from "../../styles/Home.module.css";

export default function LaunchCampaignHome() {
  const { userDetails } = useSelector((state) => state.userDetails);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const bigScreenInd = useMediaQuery("(min-width:900px)");

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Grid>
            <motion.div
              initial={{ opacity: 1, scale: 2, y: "8rem" }}
              animate={{ opacity: 1, scale: 1, y: "0rem" }}
              transition={{ duration: 1 }}
            >
              <h2 className={styles.greyText}>Choose your path</h2>
            </motion.div>
          </Grid>

          {bigScreenInd ? (
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
                  <Link href="/explorer" passHref>
                    <a>
                      <CardIconLargeOption
                        source="rookie"
                        title="The Novice"
                        message="Let me first see what the hype is all about !"
                      />
                    </a>
                  </Link>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Link href="/auth" passHref>
                    <a>
                      <CardIconLargeOption
                        source="explorer"
                        title="The Veteran"
                        message="I will first login and hit the ground running !!"
                      />
                    </a>
                  </Link>
                </motion.div>
              </Grid>
            </Grid>
          ) : (
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
                  <Link href="/auth" passHref>
                    <a>
                      <CardIconLargeOption
                        source="explorer"
                        title="The Veteran"
                        message="I will first login and hit the ground running !!"
                      />
                    </a>
                  </Link>
                </motion.div>
              </Grid>
              <Grid item>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 2 }}
                >
                  <Link href="/explorer" passHref>
                    <a>
                      <CardIconLargeOption
                        source="rookie"
                        title="The Novice"
                        message="Let me first see what the hype is all about !"
                      />
                    </a>
                  </Link>
                </motion.div>
              </Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
