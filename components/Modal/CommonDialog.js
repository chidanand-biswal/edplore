import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import {
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  PointElement,
  RadialLinearScale,
  Tooltip,
} from "chart.js";
import React from "react";
import { Radar } from "react-chartjs-2";
import { useSelector } from "react-redux";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommonDialog(props) {
  /*const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    setOpen(false);
  };
  */

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

  const { medalCount } = useSelector((state) => state.medalCount);

  const { superFastCount } = useSelector((state) => state.superFastCount);

  let averageProgress = Math.floor(
    (realmProgressPhysics +
      realmProgressChemistry +
      realmProgressMathematics +
      realmProgressBiology) /
      4
  );

  const chakraCount =
    typeof averageProgress != "undefined" ? averageProgress : 0;

  const realmProgressGeneral =
    (realmProgressPhysics +
      realmProgressChemistry +
      realmProgressMathematics +
      realmProgressBiology) /
    4;

  const calculateKarmaData = () => {
    let labels = ["Physics", "Chemistry", "Mathematics", "Biology", "General"];
    let data = [
      realmProgressPhysics,
      realmProgressChemistry,
      realmProgressMathematics,
      realmProgressBiology,
      realmProgressGeneral,
    ];

    console.log("calculateKarmaData");
    console.log(labels);
    console.log(data);

    return {
      labels: labels,
      datasets: [
        {
          label: "Karma Quotient is " + realmProgressGeneral,
          data: data,
          backgroundColor: "rgba(127, 17, 224, 0.2)",
          borderColor: "rgba(255, 60, 172, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  const calculateLevel = () => {
    switch (chakraCount) {
      case 0:
        return "The Explorer";
      case 1:
        return "The Inspired One";
      case 2:
        return "The Awesome One";
      case 3:
        return "The Mystic One";
      case 4:
        return "The Chosen One";
      case 5:
        return "The Chosen One";
      default:
        return "";
    }
  };

  const populateDialogContent = (modalType) => {
    switch (modalType) {
      case "karma":
        return (
          <div>
            <Grid container direction="row">
              <Grid item>
                <DialogTitle>My Karma Quotient</DialogTitle>
              </Grid>
              {/** 
              <Grid item sx={{ textAlign: "right" }}>
                <CloseIcon onClick={props.onClose} />
              </Grid>*/}
            </Grid>

            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                <Paper elevation={8}>
                  <Grid container direction="row">
                    <Grid item>
                      <Radar data={calculateKarmaData()} />
                    </Grid>
                  </Grid>
                </Paper>
              </DialogContentText>
            </DialogContent>
          </div>
        );

      case "badge":
        return (
          <div>
            <DialogTitle>My Score Board</DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                <Grid container direction="row" spacing={1}>
                  <Grid item>
                    <Paper elevation={8} sx={{ padding: "0 0.75rem" }}>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid
                          item
                          sx={{ padding: "0.5rem", marginTop: "0.5rem" }}
                        >
                          <Badge
                            badgeContent={medalCount}
                            color="primary"
                            showZero
                          >
                            <LocalPoliceIcon
                              fontSize="large"
                              sx={{ color: "Goldenrod" }}
                            />
                          </Badge>
                        </Grid>

                        <Grid item>Kavach</Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper elevation={8} sx={{ padding: "0 0.75rem" }}>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid
                          item
                          sx={{ padding: "0.5rem", marginTop: "0.5rem" }}
                        >
                          <Badge
                            badgeContent={chakraCount}
                            color="primary"
                            showZero
                          >
                            <BrightnessHighIcon
                              fontSize="large"
                              sx={{ color: "OrangeRed" }}
                            />
                          </Badge>
                        </Grid>

                        <Grid item>Chakra</Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                  <Grid item>
                    <Paper elevation={8} sx={{ padding: "0 0.75rem" }}>
                      <Grid
                        container
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid
                          item
                          sx={{ padding: "0.5rem", marginTop: "0.5rem" }}
                        >
                          <Badge
                            badgeContent={superFastCount}
                            color="primary"
                            showZero
                          >
                            <ElectricBoltIcon
                              fontSize="large"
                              sx={{ color: "RoyalBlue" }}
                            />
                          </Badge>
                        </Grid>
                        <Grid item>Vajra</Grid>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </DialogContentText>
            </DialogContent>
            <DialogContent dividers>
              <Typography>My Level: </Typography>
              <Typography fontSize={20} color={"purple"}>
                {calculateLevel()}
              </Typography>
            </DialogContent>
          </div>
        );

      case "leader":
        return (
          <div>
            <DialogTitle>Hall of Fame</DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                To see if you stand among the Leaders of Realms of Bodhi, you
                must first login.
              </DialogContentText>
            </DialogContent>
          </div>
        );

      default:
        return <div></div>;
    }
  };

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {populateDialogContent(props.modalType)}

        <DialogActions>
          <Button onClick={props.onClose}>OK, got it</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
