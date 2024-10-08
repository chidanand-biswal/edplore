import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import Router from "next/router";
import PropTypes from "prop-types";
import * as React from "react";
import { Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import CardSmallCustomOption from "../../components/Card/CardSmallCustomOption";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import { updateRealmActive } from "../../store/realm/action";
import styles from "../../styles/Home.module.css";
import standardArenaMapData from "../../static/standardArenaMap.json";

ChartJS.register(ArcElement, Tooltip, Legend);

export const realmProgressDataMock = {
  labels: ["Explored", "Unexplored"],
  datasets: [
    {
      label: "% of progress",
      data: [70, 30],
      backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
      borderWidth: 1,
    },
  ],
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function CampaignHome() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.userDetails);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const { boardDetails } = useSelector((state) => state.boardDetails);

  const { realmProgress } = useSelector((state) => state.realmProgress);

  const realmProgressArray = realmProgress ? realmProgress : [];

  const calculateRealmProgressByStandard = (realm) => {
    let existingRealmProgressPerStandard = realmProgressArray.filter(
      (element) =>
        element.standard === standardDetails && element.board === boardDetails
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

  /*
  const { realmProgressPhysics } = useSelector(
    (state) => state.realmProgressPhysics
  );
  const { realmProgressChemistry } = useSelector(
    (state) => state.realmProgressChemistry
  );
  const { realmProgressMathematics } = useSelector(
    (state) => state.realmProgressMathematics
  );
  const { realmProgressBiology } = useSelector(
    (state) => state.realmProgressBiology
  );
  */

  const realmProgressPhysics = calculateRealmProgressByStandard("PHYSICS");
  const realmProgressChemistry = calculateRealmProgressByStandard("CHEMISTRY");
  const realmProgressMathematics =
    calculateRealmProgressByStandard("MATHEMATICS");
  const realmProgressBiology = calculateRealmProgressByStandard("BIOLOGY");

  const [tabIndex, setTabIndex] = React.useState(0);

  const filteredArenaList = standardArenaMapData.standardArenaMap.filter(
    (data) => data.standard === standardDetails && data.board === boardDetails
  );

  const findTotalRealmSize = (realmActive) => {
    switch (realmActive) {
      case "PHYSICS":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsPhysics.length
          : 5;
      case "CHEMISTRY":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsChemistry.length
          : 5;
      case "MATHEMATICS":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsMathematics.length
          : 5;
      case "BIOLOGY":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsBiology.length
          : 5;
      default:
        return 5;
    }
  };

  const realmTotalSizePhysics = findTotalRealmSize("PHYSICS");
  const realmTotalSizeChemistry = findTotalRealmSize("CHEMISTRY");
  const realmTotalSizeMathematics = findTotalRealmSize("MATHEMATICS");
  const realmTotalSizeBiology = findTotalRealmSize("BIOLOGY");

  const calculateRealmProgressData = (realmProgress, totalRealmSize) => {
    const exploredProgress = (realmProgress / totalRealmSize) * 100;
    const unExploredProgress = 100 - exploredProgress;

    let labels = ["Explored", "Unexplored"];
    let data = [exploredProgress, unExploredProgress];
    let customLabels = labels.map(
      (label, index) => `${label}: ${data[index]}%`
    );

    return {
      labels: customLabels,
      datasets: [
        {
          label: "% of progress",
          data: data,
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
          borderWidth: 1,
        },
      ],
    };
  };

  const handleChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const updateRealmActiveInStore = (activeRealm) => {
    dispatch(updateRealmActive(activeRealm));
  };

  const submit = (activeRealm) => {
    updateRealmActiveInStore(activeRealm);
    Router.push("/campaign/trail");
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%", padding: "1rem 0 2rem 0" }}>
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <Box
                  component="img"
                  sx={{
                    height: "2.5rem",
                    width: "2.5rem",
                  }}
                  src="/assets/realms.png"
                />
              </Grid>

              <Grid item>
                <Typography variant="h5" sx={{ color: "#808080" }}>
                  Choose your Realm
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box
            sx={{
              height: "15rem",
              width: "15rem",
            }}
          >
            <Pie
              data={
                tabIndex === 0
                  ? calculateRealmProgressData(
                      realmProgressPhysics,
                      realmTotalSizePhysics
                    )
                  : tabIndex === 1
                  ? calculateRealmProgressData(
                      realmProgressChemistry,
                      realmTotalSizeChemistry
                    )
                  : tabIndex === 2
                  ? calculateRealmProgressData(
                      realmProgressMathematics,
                      realmTotalSizeMathematics
                    )
                  : tabIndex === 3
                  ? calculateRealmProgressData(
                      realmProgressBiology,
                      realmTotalSizeBiology
                    )
                  : realmProgressDataMock
              }
              options={{
                legend: { display: true, position: "right" },

                datalabels: {
                  display: true,
                  color: "white",
                },
                tooltips: {
                  backgroundColor: "#5a6e7f",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              maxHeight: "20rem",
              padding: "2rem 0",
            }}
          >
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={tabIndex}
              onChange={handleChange}
              aria-label="Vertical tabs example"
              sx={{
                borderRight: 1,
                borderColor: "divider",
                maxHeight: "15rem",
              }}
            >
              <Tab label="Physics" {...a11yProps(0)} />
              <Tab label="Chemistry" {...a11yProps(1)} />
              <Tab label="Mathematics" {...a11yProps(2)} />
              <Tab label="Biology" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={tabIndex} index={0}>
              <div onClick={() => submit("PHYSICS")}>
                <CardSmallCustomOption
                  source="physics"
                  title="Physics"
                  message="Physics"
                />
              </div>
            </TabPanel>
            <TabPanel value={tabIndex} index={1}>
              <div onClick={() => submit("CHEMISTRY")}>
                <CardSmallCustomOption
                  source="chemistry"
                  title="Chemistry"
                  message="Chemistry"
                />
              </div>
            </TabPanel>
            <TabPanel value={tabIndex} index={2}>
              <div onClick={() => submit("MATHEMATICS")}>
                <CardSmallCustomOption
                  source="mathematics"
                  title="Mathematics"
                  message="Mathematics"
                />
              </div>
            </TabPanel>
            <TabPanel value={tabIndex} index={3}>
              <div onClick={() => submit("BIOLOGY")}>
                <CardSmallCustomOption
                  source="biology"
                  title="Biology"
                  message="Biology"
                />
              </div>
            </TabPanel>
          </Box>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
