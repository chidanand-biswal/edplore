import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grow from "@mui/material/Grow";
import Fade from "@mui/material/Fade";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardCustomOption from "../../components/Card/CardCustomOption";
import CardIconOption from "../../components/Card/CardIconOption";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import SpeedDialCustom from "../../components/SpeedDial/SpeedDialCustom";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUserDetails } from "../../store/userDetails/action";
import { motion } from "framer-motion";

export default function IntroHome() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userDetails);
  console.log("IntroHome");
  console.log(userDetails);

  const addNewUserDetails = () => {
    dispatch(addUserDetails("Chidanand Biswal"));
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
              <h2 className={styles.greyText}>First things first!</h2>
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
                <Link href="/intro/introRealms" passHref>
                  <a>
                    <CardIconOption
                      source="realms"
                      title="The Realms"
                      message=""
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
                <Link href="/intro/introExplorer" passHref>
                  <a>
                    <CardIconOption
                      source="explorerIntro"
                      title="The Explorer"
                      message=""
                    />
                  </a>
                </Link>
              </motion.div>
            </Grid>
            {/** 
            <Grid item>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2 }}
              >
                <Link href="/launchCampaign" passHref>
                  <a onClick={addNewUserDetails}>
                    <CardIconOption title="The Path" message="" />
                  </a>
                </Link>
              </motion.div>
            </Grid>
            */}
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
