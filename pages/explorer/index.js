import CloseIcon from "@mui/icons-material/Close";
import { Typography, useMediaQuery } from "@mui/material";
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
import { realmProgressInitialState } from "../../store/realmProgress/reducer";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from "../../styles/Home.module.css";
import { MuiTelInput } from "mui-tel-input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Form, Field } from "react-final-form";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  userName: yup.string().required("What? Explorer without a name??"),
  email: yup.string().email("This email address does not look right!"),
});

const userNameValidator = async (value, allValues) => {
  try {
    console.log("userNameValidator");
    console.log(allValues);
    await validationSchema.validateAt("userName", allValues);
  } catch (validationError) {
    console.log(validationError);
    return validationError.message;
  }
};

const emailValidator = async (value, allValues) => {
  try {
    console.log("emailValidator");
    console.log(allValues);
    await validationSchema.validateAt("email", allValues);
  } catch (validationError) {
    console.log(validationError);
    return validationError.message;
  }
};

export default function ExplorerHome() {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const bigScreenInd = useMediaQuery("(min-width:900px)");
  const [openAlert, setOpenAlert] = React.useState(true);
  const [openAddressAlert, setOpenAddressAlert] = React.useState(false);
  const [cbseActive, setCbseActive] = React.useState(true);
  const [icseActive, setIcseActive] = React.useState(false);
  const [otherActive, setOtherActive] = React.useState(false);
  const [showAddress, setShowAddress] = React.useState(false);
  const [userData, setUserData] = React.useState();

  const [valName, setValName] = React.useState(false);
  const [valStandard, setValStandard] = React.useState(false);

  const [userName, setUserName] = React.useState(user ? user.displayName : "");
  const [userNameFinal, setUserNameFinal] = React.useState("");
  const [standard, setStandard] = React.useState(1);
  const [email, setEmail] = React.useState(user ? user.email : "");
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
      setUserNameFinal(event.target.value);
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

  const updateUserNameInStore = () => {
    dispatch(addUserDetails(userName));
  };

  const updateStandardInStore = () => {
    dispatch(addStandardDetails(standard));
  };

  const updateBoardInStore = () => {
    dispatch(
      addBoardDetails(cbseActive ? "CBSE" : icseActive ? "ICSE" : "CBSE")
    );
  };

  const updateRealmProgressInStore = () => {
    dispatch(
      updateRealmProgress(
        userData?.realmProgress
          ? userData.realmProgress
          : realmProgressInitialState.realmProgress
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
    updateBoardInStore();
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
          userNameFinal ? userNameFinal : user.displayName,
          email ? email : user.email,
          phoneNumber ? phoneNumber : user.phoneNumber,
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
      setUserName(userDataInDB ? userDataInDB.explorerName : userName);
      setStandard(userDataInDB ? userDataInDB.activeStandard : 6);
      setValName(true);
      setCbseActive(
        (userDataInDB != null && userDataInDB.selectedBoard === "CBSE") ||
          userDataInDB == null
          ? true
          : false
      );
      setIcseActive(
        userDataInDB != null && userDataInDB.selectedBoard === "ICSE"
          ? true
          : false
      );
    };
    const fetchUserMetaData = async () => {
      let userMetaData = await getExplorerMetaData(user.uid);
      setUserName(userMetaData ? userMetaData.displayName : userName);
      setEmail(userMetaData ? userMetaData.email : "");
      setPhoneNumber(userMetaData ? userMetaData.phoneNumber : "");
      setAddress(userMetaData ? userMetaData.address : "");
    };

    if (user) {
      fetchUserData();
      fetchUserMetaData();
    }
  }, [userName]);

  return (
    <Form
      onSubmit={() => submit()}
      initialValues={{ userName: userName, email: email }}
      initialValuesEqual={() => true}
      render={({ handleSubmit, values, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Box className={styles.container}>
            <MenuAppBar></MenuAppBar>
            <Grid container direction="row">
              {/*
        <Grid item>
          <SpeedDialCustom />
        </Grid>
  */}
              <Grid
                item
                className={styles.main}
                sx={{ padding: "0 2rem 0 3.5rem" }}
              >
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
                    Arenas in Realms will be set up based on the information
                    that you enter here.
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
                    You can of course go on Quest without entering contact
                    details. <br />
                    However it is needed to ship your award if and when you win!
                  </Alert>
                </Collapse>
                <Box>
                  <Grid
                    container
                    direction={"row"}
                    spacing={3}
                    padding="2rem 0"
                  >
                    <Grid item>
                      <FormControl sx={{ minWidth: "17rem" }}>
                        <Field
                          name="userName"
                          validate={userNameValidator}
                          validateFields={[]}
                        >
                          {({ input, meta }) => (
                            <TextField
                              {...input}
                              id="userName"
                              label="I am"
                              onInput={handleChangeName}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <AccountCircle />
                                  </InputAdornment>
                                ),
                              }}
                              error={meta.error && meta.touched}
                              helperText={
                                meta.error && meta.touched ? meta.error : null
                              }
                            />
                          )}
                        </Field>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl sx={{ minWidth: "17rem" }}>
                        <InputLabel id="standard-select-label">
                          I study in
                        </InputLabel>
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
                          <MenuItem value={7} disabled>
                            Standard VII
                          </MenuItem>
                          <MenuItem value={8} disabled>
                            Standard VIII
                          </MenuItem>
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
                          I prefer:
                        </InputLabel>
                        <Chip
                          label="CBSE"
                          variant={cbseActive ? "filled" : "outlined"}
                          color="primary"
                          onClick={() => {
                            setCbseActive(!cbseActive);
                            setIcseActive(false);
                            setOtherActive(false);
                          }}
                        />
                        <Chip
                          label="ICSE"
                          variant={icseActive ? "filled" : "outlined"}
                          color="primary"
                          onClick={() => {
                            setIcseActive(!icseActive);
                            setCbseActive(false);
                            setOtherActive(false);
                          }}
                        />
                        <Chip
                          label="Other"
                          variant={otherActive ? "filled" : "outlined"}
                          color="primary"
                          onClick={() => {
                            setOtherActive(!otherActive);
                            setCbseActive(false);
                            setIcseActive(false);
                          }}
                        />
                      </Stack>
                      {otherActive ? (
                        <FormControl
                          sx={{ minWidth: "16rem", marginTop: "1rem" }}
                        >
                          <InputLabel id="standard-board-label">
                            State
                          </InputLabel>
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
                          I shall add contact details:
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
                                <FormControl sx={{ minWidth: "17rem" }}>
                                  <Field
                                    name="email"
                                    validate={emailValidator}
                                    validateFields={[]}
                                  >
                                    {({ input, meta }) => (
                                      <TextField
                                        {...input}
                                        id="email"
                                        label="Email"
                                        onInput={handleChangeEmail}
                                        InputProps={{
                                          endAdornment: (
                                            <InputAdornment position="end">
                                              <EmailIcon />
                                            </InputAdornment>
                                          ),
                                        }}
                                        error={meta.error && meta.touched}
                                        helperText={
                                          meta.error && meta.touched
                                            ? meta.error
                                            : null
                                        }
                                      />
                                    )}
                                  </Field>
                                </FormControl>
                              </Grid>
                              <Grid item>
                                <FormControl sx={{ minWidth: "17rem" }}>
                                  {/*}
                            <TextField
                              id="outlined-required"
                              label="Phone"
                              defaultValue={phoneNumber}
                              onChange={handleChangePhoneNumber}
                            />
                */}
                                  <MuiTelInput
                                    sx={{ width: "17rem" }}
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
                                    InputProps={{
                                      endAdornment: (
                                        <InputAdornment position="end">
                                          <PhoneIcon />
                                        </InputAdornment>
                                      ),
                                    }}
                                  />
                                </FormControl>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item>
                            <FormControl sx={{ minWidth: "17rem" }}>
                              <TextField
                                id="outlined-required"
                                label="School"
                                defaultValue={""}
                                onChange={handleChangeAddress}
                                multiline
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                      <SchoolIcon />
                                    </InputAdornment>
                                  ),
                                }}
                              />
                            </FormControl>
                          </Grid>
                        </Grid>
                      )}
                    </Box>
                  )}

                  <Box sx={{ paddingTop: "1rem" }}>
                    <Typography sx={{ fontSize: "0.75rem", fontWeight: 10 }}>
                      By proceeding, I agree to the{" "}
                      <Link href="/menu/policy">
                        <a>
                          <span
                            style={{
                              color: "royalblue",
                            }}
                          >
                            Terms of Service
                          </span>
                        </a>
                      </Link>{" "}
                      and{" "}
                      <Link href="/menu/policy">
                        <a>
                          <span
                            style={{
                              color: "royalblue",
                            }}
                          >
                            Privacy Policy
                          </span>
                        </a>
                      </Link>
                      .
                    </Typography>
                  </Box>
                  {bigScreenInd ? (
                    <Grid
                      container
                      direction={"row"}
                      spacing={3}
                      padding="1rem 0"
                    >
                      <Grid item>
                        <div>
                          <Link href="/launch/path">
                            <a>
                              <Button
                                variant="outlined"
                                className={styles.buttonLaunch}
                                sx={{ minWidth: "17rem" }}
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
                            sx={{ minWidth: "17rem" }}
                            type="submit"
                            disabled={submitting || !valStandard}
                          >
                            DISCOVER THE REALMS
                          </Button>
                        </div>
                      </Grid>
                    </Grid>
                  ) : (
                    <Grid
                      container
                      direction={"row"}
                      spacing={3}
                      padding="2rem 0"
                    >
                      <Grid item>
                        <div>
                          <Button
                            variant="contained"
                            className={styles.buttonLaunch}
                            sx={{ minWidth: "17rem" }}
                            disabled={submitting || !valStandard}
                            type="submit"
                          >
                            DISCOVER THE REALMS
                          </Button>
                        </div>
                      </Grid>
                      <Grid item>
                        <div>
                          <Link href="/launch/path">
                            <a>
                              <Button
                                variant="outlined"
                                className={styles.buttonLaunch}
                                sx={{ minWidth: "17rem" }}
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
        </form>
      )}
    />
  );
}
