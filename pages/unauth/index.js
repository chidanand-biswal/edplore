import * as React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import SpeedDialCustom from "../../components/SpeedDial/SpeedDialCustom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Router from "next/router";
import { useMediaQuery } from "@mui/material";
import { addUserDetails } from "../../store/userDetails/action";
import { addStandardDetails } from "../../store/standardDetails/action";
import { useSelector, useDispatch } from "react-redux";

export default function UnauthHome() {
  const dispatch = useDispatch();
  const bigScreenInd = useMediaQuery("(min-width:900px)");

  const [valName, setValName] = React.useState(false);
  const [valStandard, setValStandard] = React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [standard, setStandard] = React.useState(1);

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

  const submit = () => {
    updateUserNameInStore();
    updateStandardInStore();
    Router.push("/intro");
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
          <h2 className={styles.greyText}>
            Who goes there? Identify yourself!
          </h2>

          <Box>
            <Grid container direction={"row"} spacing={3} padding="2rem 0">
              <Grid item>
                <FormControl sx={{ minWidth: "15rem" }}>
                  <TextField
                    id="outlined-required"
                    label="I am"
                    defaultValue=""
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
            {bigScreenInd ? (
              <Grid container direction={"row"} spacing={3} padding="2rem 0">
                <Grid item>
                  <div>
                    <Link href="/launchCampaign">
                      <a>
                        <Button
                          variant="outlined"
                          className={styles.buttonLaunch}
                          sx={{ minWidth: "15rem" }}
                        >
                          MAYBE ANOTHER TIME
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
                      START MY CAMPAIGN
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
                      START MY CAMPAIGN
                    </Button>
                  </div>
                </Grid>
                <Grid item>
                  <div>
                    <Link href="/launchCampaign">
                      <a>
                        <Button
                          variant="outlined"
                          className={styles.buttonLaunch}
                          sx={{ minWidth: "15rem" }}
                        >
                          MAYBE ANOTHER TIME
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
      <ToolbarFooter />
    </Box>
  );
}
