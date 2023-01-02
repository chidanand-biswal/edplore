import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import ExploreIcon from "@mui/icons-material/Explore";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import MenuAppBarAlt from "../../components/AppBar/MenuAppBarAlt";
import CardCustomOption from "../../components/Card/CardCustomOption";
import CardIconLargeOption from "../../components/Card/CardIconLargeOption";
import CommonFooter from "../../components/Footer/CommonFooter";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import SpeedDialCustom from "../../components/SpeedDial/SpeedDialCustom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";

export default function LaunchCampaignHome() {
  const { userDetails } = useSelector((state) => state.userDetails);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  console.log("LaunchCampaignHome");
  console.log(userDetails);
  console.log(standardDetails);

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
              <h2 className={styles.greyText}>Tell us who you are</h2>
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
                <Link href="/unauth" passHref>
                  <a>
                    <CardIconLargeOption
                      source="rookie"
                      title="The Rookie"
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
                      title="The Explorer"
                      message="I will first login and hit the ground running !!"
                    />
                  </a>
                </Link>
              </motion.div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
