import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import {
  getExplorerData,
  getExplorerMetaData,
  saveExplorerMetaData,
} from "../../firebase/db/dbUtility";
import { updateMedalCount } from "../../store/medal/action";
import { updateRealmProgress } from "../../store/realmProgress/action";
import { addStandardDetails } from "../../store/standardDetails/action";
import { updateSuperFastCount } from "../../store/superFast/action";
import { addUserDetails } from "../../store/userDetails/action";
import { addBoardDetails } from "../../store/boardDetails/action";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "../../styles/Home.module.css";
import { MuiTelInput } from "mui-tel-input";

export default function ExplorerHome() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const bigScreenInd = useMediaQuery("(min-width:900px)");
  const [openAlert, setOpenAlert] = React.useState(true);
  const [openAddressAlert, setOpenAddressAlert] = React.useState(false);
  const [cbseActive, setCbseActive] = React.useState(false);
  const [icseActive, setIcseActive] = React.useState(false);
  const [otherActive, setOtherActive] = React.useState(false);
  const [showAddress, setShowAddress] = React.useState(false);
  const [userData, setUserData] = React.useState();

  const [valName, setValName] = React.useState(false);
  const [valStandard, setValStandard] = React.useState(false);

  const [userName, setUserName] = React.useState("");
  const [standard, setStandard] = React.useState(1);
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [address, setAddress] = React.useState("");

  const { userDetails } = useSelector((state) => state.userDetails);
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
  const handleChangeEmail = (event) => {
    if (event.target.value !== "") {
      setEmail(event.target.value);
    }
  };
  /*
  const handleChangePhoneNumber = (event) => {
    if (event.target.value !== "") {
      setPhoneNumber(event.target.value);
    }
  };
  */
  const handleChangePhoneNumber = (value, info) => {
    if (value !== "") {
      setPhoneNumber(value);
    }
  };

  const handleChangeAddress = (event) => {
    if (event.target.value !== "") {
      setAddress(event.target.value);
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

  const calculateBoardSelection = () => {
    let boardSelectionArray = new Array();
    if (cbseActive) {
      boardSelectionArray.push("CBSE");
    }

    if (icseActive) {
      boardSelectionArray.push("ICSE");
    }

    if (otherActive) {
      boardSelectionArray.push("OTHER");
    }
    return boardSelectionArray;
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

  const updateRealmProgressInStore = () => {
    dispatch(
      updateRealmProgress(
        userData?.realmProgress ? userData.realmProgress : initialRealmProgress
      )
    );
  };
  const updateMedalCountInStore = () => {
    dispatch(
      updateMedalCount(userData?.kavachCount ? userData.kavachCount : 0)
    );
  };
  const updateSuperFastCountInStore = () => {
    dispatch(
      updateSuperFastCount(userData?.vajraCount ? userData.vajraCount : 0)
    );
  };

  const submit = () => {
    updateUserNameInStore();
    updateStandardInStore();
    Router.push("/intro/introRealms");
    if (user) {
      updateRealmProgressInStore();
      updateMedalCountInStore();
      updateSuperFastCountInStore();
      console.log("update realmProgress in State with realmProgress from DB");

      try {
        console.log("Saving explorer meta data in DB");
        saveExplorerMetaData(
          user.uid,
          userName ? userName : user.displayName,
          email ? email : user.email,
          phoneNumber ? phoneNumber : user.phoneNumber,
          calculateBoardSelection(),
          address
        );
      } catch (error) {
        console.log("Error in saving explorer meta data");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      let userDataInDB = await getExplorerData(user.uid);
      setUserData(userDataInDB);
      setUserName(userDataInDB.explorerName);
      setStandard(userDataInDB.activeStandard);
      setValName(true);
    };
    const fetchUserMetaData = async () => {
      let userMetaData = await getExplorerMetaData(user.uid);
      setUserName(userMetaData.displayName);
      setEmail(userMetaData.email);
      setPhoneNumber(userMetaData.phoneNumber);
      setAddress(userMetaData.address);
    };

    if (user) {
      fetchUserData();
      fetchUserMetaData();
    }
  }, [userName]);

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
          <Collapse in={openAddressAlert}>
            <Alert
              severity="warning"
              sx={{ marginBottom: "0.5rem" }}
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpenAddressAlert(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
            >
              You can of course go on Quest without entering contact details.{" "}
              <br />
              However it is needed to ship your award if and when you win!
            </Alert>
          </Collapse>
          <Box>
            <Grid container direction={"row"} spacing={3} padding="2rem 0">
              <Grid item>
                <FormControl sx={{ minWidth: "16rem" }}>
                  <TextField
                    id="outlined-required"
                    label="I am"
                    defaultValue={user ? user.displayName : userDetails}
                    onChange={handleChangeName}
                    helperText="Enter full name"
                  />
                </FormControl>
              </Grid>
              <Grid item>
                <FormControl sx={{ minWidth: "16rem" }}>
                  <InputLabel id="standard-select-label">I study in</InputLabel>
                  <Select
                    labelId="standard-select-label"
                    id="standard-select-id"
                    label="standard"
                    onChange={handleStandardSelectChange}
                    defaultValue={""}
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
                    <MenuItem value={9} disabled>
                      Standard IX
                    </MenuItem>
                    <MenuItem value={10} disabled>
                      Standard X
                    </MenuItem>
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
                    Board:
                  </InputLabel>
                  <Chip
                    label="CBSE"
                    variant={cbseActive ? "filled" : "outlined"}
                    color="primary"
                    onClick={() => {
                      setCbseActive(!cbseActive);
                    }}
                  />
                  <Chip
                    label="ICSE"
                    variant={icseActive ? "filled" : "outlined"}
                    color="primary"
                    onClick={() => {
                      setIcseActive(!icseActive);
                    }}
                  />
                  <Chip
                    label="Other"
                    variant={otherActive ? "filled" : "outlined"}
                    color="primary"
                    onClick={() => {
                      setOtherActive(!otherActive);
                    }}
                  />
                </Stack>
                {otherActive ? (
                  <FormControl sx={{ minWidth: "16rem", marginTop: "1rem" }}>
                    <InputLabel id="standard-board-label">State</InputLabel>
                    <Select
                      labelId="standard-board-label"
                      id="standard-board-id"
                      label="board"
                      defaultValue={""}
                    >
                      <MenuItem value={1}>Odisha</MenuItem>
                      <MenuItem value={2}>Kerala</MenuItem>
                      <MenuItem value={3}>Madhya Pradesh</MenuItem>
                      <MenuItem value={4}>Maharashtra</MenuItem>
                      <MenuItem value={5}>Punjab</MenuItem>
                      <MenuItem value={6}>Other</MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <div></div>
                )}
              </Box>
            )}

            {valName && valStandard && (
              <Box sx={{ paddingTop: "1rem" }}>
                <Stack direction="row" spacing={1}>
                  <InputLabel
                    id="standard-prefer-label"
                    sx={{ marginTop: "0.5rem" }}
                  >
                    I will add contact details:
                  </InputLabel>
                  <Switch
                    size="large"
                    onClick={() => {
                      setShowAddress(!showAddress);
                      setOpenAddressAlert(showAddress);
                    }}
                  />
                </Stack>
                {showAddress && (
                  <Grid
                    container
                    direction={"column"}
                    spacing={2}
                    padding="1rem 0"
                  >
                    <Grid item>
                      <Grid container direction={"row"} spacing={3}>
                        <Grid item>
                          <FormControl sx={{ minWidth: "16rem" }}>
                            <TextField
                              id="outlined-required"
                              label="Email"
                              defaultValue={email}
                              onChange={handleChangeEmail}
                            />
                          </FormControl>
                        </Grid>
                        <Grid item>
                          <FormControl sx={{ minWidth: "16rem" }}>
                            {/*}
                            <TextField
                              id="outlined-required"
                              label="Phone"
                              defaultValue={phoneNumber}
                              onChange={handleChangePhoneNumber}
                            />
                */}
                            <MuiTelInput
                              label="Phone"
                              defaultCountry="IN"
                              preferredCountries={["IN", "US"]}
                              onlyCountries={[
                                "IN",
                                "US",
                                "GB",
                                "AU",
                                "DE",
                                "FR",
                                "MX",
                                "ES",
                              ]}
                              value={phoneNumber}
                              onChange={handleChangePhoneNumber}
                            />
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <FormControl sx={{ minWidth: "16rem" }}>
                        <TextField
                          id="outlined-required"
                          label="School"
                          defaultValue={""}
                          onChange={handleChangeAddress}
                          multiline
                        />
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
              </Box>
            )}

            {bigScreenInd ? (
              <Grid container direction={"row"} spacing={3} padding="1rem 0">
                <Grid item>
                  <div>
                    <Link href="/launch">
                      <a>
                        <Button
                          variant="outlined"
                          className={styles.buttonLaunch}
                          sx={{ minWidth: "16rem" }}
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
                      sx={{ minWidth: "16rem" }}
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
                      sx={{ minWidth: "16rem" }}
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
                          sx={{ minWidth: "16rem" }}
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
