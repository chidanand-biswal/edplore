import { useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
import AlertTitle from "@mui/material/AlertTitle";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import Router from "next/router";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch, useSelector } from "react-redux";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import { getExplorerData } from "../../firebase/db/dbUtility";
import { updateMedalCount } from "../../store/medal/action";
import { updateRealmProgress } from "../../store/realmProgress/action";
import { addStandardDetails } from "../../store/standardDetails/action";
import { updateSuperFastCount } from "../../store/superFast/action";
import { addUserDetails } from "../../store/userDetails/action";
import { addBoardDetails } from "../../store/boardDetails/action";
import styles from "../../styles/Home.module.css";

const initialRealmProgress = [
  {
    standard: 6,
    realmProgressPhysics: 0,
    realmProgressChemistry: 0,
    realmProgressMathematics: 0,
    realmProgressBiology: 0,
  },
  {
    standard: 7,
    realmProgressPhysics: 0,
    realmProgressChemistry: 0,
    realmProgressMathematics: 0,
    realmProgressBiology: 0,
  },
  {
    standard: 8,
    realmProgressPhysics: 0,
    realmProgressChemistry: 0,
    realmProgressMathematics: 0,
    realmProgressBiology: 0,
  },
  {
    standard: 9,
    realmProgressPhysics: 0,
    realmProgressChemistry: 0,
    realmProgressMathematics: 0,
    realmProgressBiology: 0,
  },
  {
    standard: 10,
    realmProgressPhysics: 0,
    realmProgressChemistry: 0,
    realmProgressMathematics: 0,
    realmProgressBiology: 0,
  },
];

export default function ExplorerHome() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();
  const bigScreenInd = useMediaQuery("(min-width:900px)");
  const [openAlert, setOpenAlert] = React.useState(true);
  const [cbseActive, setCbseActive] = React.useState(false);
  const [icseActive, setIcseActive] = React.useState(false);
  const [otherActive, setOtherActive] = React.useState(false);

  const [valName, setValName] = React.useState(user ? true : false);
  const [valStandard, setValStandard] = React.useState(false);

  const [userName, setUserName] = React.useState(user ? user.displayName : "");
  const [standard, setStandard] = React.useState(1);
  const [board, setBoard] = React.useState("CBSE");

  const { realmProgress } = useSelector((state) => state.realmProgress);

  const realmProgressArray = realmProgress ? realmProgress : [];

  const { medalCount } = useSelector((state) => state.medalCount);
  const { superFastCount } = useSelector((state) => state.superFastCount);

  const handleChangeName = (event) => {
    if (event.target.value !== "") {
      setValName(true);
      setUserName(event.target.value);
    } else {
      setValName(false);
    }
  };
  const handleChangeStandard = (event) => {
    if (event.target.value !== "") {
      setValStandard(true);
    } else {
      setValStandard(false);
    }
  };

  const handleStandardSelectChange = (event) => {
    if (typeof event.target.value !== "undefined") {
      setStandard(event.target.value);
      if (event.target.value !== "") {
        setValStandard(true);
        setOpenAlert(false);
      } else {
        setValStandard(false);
      }
    } else {
      setStandard(1);
      setValStandard(false);
    }
  };

  const handleBoardSelection = (board) => {
    switch (board) {
      case "cbse":
        setBoard("CBSE");
      case "icse":
        setBoard("ICSE");
      case "other":
        setBoard("OTHER");
      default:
        setBoard("OTHER");
    }
  };

  const updateUserNameInStore = () => {
    dispatch(addUserDetails(userName));
  };

  const updateStandardInStore = () => {
    dispatch(addStandardDetails(standard));
  };

  const updateBoardInStore = () => {
    dispatch(addBoardDetails(board));
  };

  const submit = () => {
    Router.push("/intro/introRealms");

    if (user) {
      console.log("User is authenticated.");
      console.log(user);

      try {
        let userDatafromDB = getExplorerData(user.uid);

        userDatafromDB.then((data) => {
          console.log(
            "update realmProgress from State with realmProgress from DB"
          );
          console.log(data);
          dispatch(
            updateRealmProgress(
              data?.realmProgress ? data.realmProgress : initialRealmProgress
            )
          );
          dispatch(updateMedalCount(data?.kavachCount ? data.kavachCount : 0));
          dispatch(
            updateSuperFastCount(data?.vajraCount ? data.vajraCount : 0)
          );
        });
      } catch (error) {
        console.log(
          "Error in retrieving explorer data OR the explorer is here for the first time"
        );
      }
    }

    updateUserNameInStore();
    updateStandardInStore();
  };

  return (
    <Box className={styles.container}>
      <MenuAppBar></MenuAppBar>
      <Grid container direction="row">
        {/*
        <Grid item>
          <SpeedDialCustom />
        </Grid>
  */}
        <Grid item className={styles.main} sx={{ padding: "0 5rem" }}>
          <h2 className={styles.greyText}>Tell more about yourself!</h2>
          <Collapse in={openAlert}>
            <Alert
              severity="info"
              sx={{ marginBottom: "0.5rem" }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              Arenas in Realms will be set up based on the information that you
              enter here.
            </Alert>
          </Collapse>
          <Box>
            <Grid container direction={"row"} spacing={3} padding="2rem 0">
              <Grid item>
                <FormControl sx={{ minWidth: "15rem" }}>
                  <TextField
                    id="outlined-required"
                    label="I am"
                    defaultValue={user ? user.displayName : ""}
                    onChange={handleChangeName}
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{ minWidth: "15rem" }}>
                  <InputLabel id="standard-select-label">I study in</InputLabel>
                  <Select
                    labelId="standard-select-label"
                    id="standard-select-id"
                    label="standard"
                    onChange={handleStandardSelectChange}
                    defaultValue=""
                  >
                    <MenuItem value={1} disabled>
                      Standard I
                    </MenuItem>
                    <MenuItem value={2} disabled>
                      Standard II
                    </MenuItem>
                    <MenuItem value={3} disabled>
                      Standard III
                    </MenuItem>
                    <MenuItem value={4} disabled>
                      Standard IV
                    </MenuItem>
                    <MenuItem value={5} disabled>
                      Standard V
                    </MenuItem>
                    <MenuItem value={6}>Standard VI</MenuItem>
                    <MenuItem value={7}>Standard VII</MenuItem>
                    <MenuItem value={8}>Standard VIII</MenuItem>
                    <MenuItem value={9}>Standard IX</MenuItem>
                    <MenuItem value={10}>Standard X</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            {valStandard && (
              <Box>
                <Stack direction="row" spacing={1}>
                  <InputLabel
                    id="standard-prefer-label"
                    sx={{ marginTop: "0.25rem" }}
                  >
                    I prefer:
                  </InputLabel>
                  <Chip
                    label="CBSE"
                    variant={cbseActive ? "filled" : "outlined"}
                    color="primary"
                    onClick={() => {
                      setCbseActive(!cbseActive);
                      handleBoardSelection("cbse");
                    }}
                  />
                  <Chip
                    label="ICSE"
                    variant={icseActive ? "filled" : "outlined"}
                    color="primary"
                    onClick={() => {
                      setIcseActive(!icseActive);
                      handleBoardSelection("icse");
                    }}
                  />
                  <Chip
                    label="Other"
                    variant={otherActive ? "filled" : "outlined"}
                    color="primary"
                    onClick={() => {
                      setOtherActive(!otherActive);
                      handleBoardSelection("other");
                    }}
                  />
                </Stack>
                {otherActive ? (
                  <FormControl sx={{ minWidth: "15rem", marginTop: "1rem" }}>
                    <InputLabel id="standard-board-label">State</InputLabel>
                    <Select
                      labelId="standard-board-label"
                      id="standard-board-id"
                      label="board"
                      defaultValue=""
                    >
                      <MenuItem value={1}>Odisha</MenuItem>
                      <MenuItem value={2}>Kerala</MenuItem>
                      <MenuItem value={3}>Madhya Pradesh</MenuItem>
                      <MenuItem value={4}>Maharashtra</MenuItem>
                      <MenuItem value={5}>Punjab</MenuItem>
                      <MenuItem value={6}>None</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <div></div>
                )}
              </Box>
            )}
            {bigScreenInd ? (
              <Grid container direction={"row"} spacing={3} padding="2rem 0">
                <Grid item>
                  <div>
                    <Link href="/launch">
                      <a>
                        <Button
                          variant="outlined"
                          className={styles.buttonLaunch}
                          sx={{ minWidth: "15rem" }}
                        >
                          CHANGE MY PATH
                        </Button>
                      </a>
                    </Link>
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    <Button
                      variant="contained"
                      className={styles.buttonLaunch}
                      sx={{ minWidth: "15rem" }}
                      disabled={valName && valStandard ? false : true}
                      onClick={() => submit()}
                    >
                      DISCOVER THE REALMS
                    </Button>
                  </div>
                </Grid>
              </Grid>
            ) : (
              <Grid container direction={"row"} spacing={3} padding="2rem 0">
                <Grid item>
                  <div>
                    <Button
                      variant="contained"
                      className={styles.buttonLaunch}
                      sx={{ minWidth: "15rem" }}
                      disabled={valName && valStandard ? false : true}
                      onClick={() => submit()}
                    >
                      DISCOVER THE REALMS
                    </Button>
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    <Link href="/launch">
                      <a>
                        <Button
                          variant="outlined"
                          className={styles.buttonLaunch}
                          sx={{ minWidth: "15rem" }}
                        >
                          CHANGE MY PATH
                        </Button>
                      </a>
                    </Link>
                  </div>
                </Grid>
              </Grid>
            )}
          </Box>
        </Grid>
      </Grid>
      {/*<ToolbarFooter />*/}
    </Box>
  );
}
