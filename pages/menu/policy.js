import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PolicyIcon from "@mui/icons-material/Policy";
import CookieIcon from "@mui/icons-material/Cookie";
import RuleIcon from "@mui/icons-material/Rule";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CommonFooter from "../../components/Footer/CommonFooter";
import styles from "../../styles/Home.module.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Paper from "@mui/material/Paper";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PolicyHome() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%", padding: "0.5rem" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <PolicyIcon color="primary" fontSize="large" />
              </Grid>
            </Grid>
          </Box>

          <Paper elevation={8} sx={{ padding: "0 1rem", width: "90%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab
                  icon={<RuleIcon />}
                  label="Terms of Service"
                  {...a11yProps(0)}
                />
                <Tab
                  icon={<PrivacyTipIcon />}
                  label="Privacy Policy"
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Grid sx={{ height: "10rem", overflowY: "scroll" }}>
                EDPLORE TERMS OF SERVICE <br />
                What is covered in these terms
                <br />
                We know it is tempting to skip these Terms of Service, but it is
                important to establish what you can expect from us as you use
                this application, and what we expect from you.
              </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Grid sx={{ height: "10rem", overflowY: "scroll" }}>
                When you are in edplore, you are trusting us with your
                information. We understand this is a big responsibility and work
                hard to protect your information and put you in control. <br />
                This Privacy Policy is meant to help you understand what
                information we collect, why we collect it, and how you can
                update, manage, export, and delete your information.
              </Grid>
            </TabPanel>
          </Paper>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "0.75rem" }}
          >
            <Grid item>
              <div>
                <Link href="/">
                  <a>
                    <Button variant="contained" className={styles.buttonLaunch}>
                      BACK TO HOME
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CommonFooter />
    </Box>
  );
}
