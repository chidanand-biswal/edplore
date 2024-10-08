import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Slide from "@mui/material/Slide";
import { Typography } from "@mui/material";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { saveEdploreUserIssue } from "../../firebase/db/dbUtility";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HelpDialog(props) {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const { userDetails } = useSelector((state) => state.userDetails);

  const [issueArea, setIssueArea] = React.useState("");
  const [issueDesc, setIssueDesc] = React.useState("");

  const handleIssueArea = (event) => {
    if (event.target.value !== "") {
      setIssueArea(event.target.value);
    }
  };

  const handleIssueDesc = (event) => {
    if (event.target.value !== "") {
      setIssueDesc(event.target.value);
    }
  };

  const saveUserIssue = () => {
    if (user) {
      saveEdploreUserIssue(user.uid, issueArea, issueDesc);
    } else {
      saveEdploreUserIssue(userDetails, issueArea, issueDesc);
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
        <div>
          <DialogTitle>
            <Grid container direction="row">
              <Grid item sx={{ padding: "0.5rem 0.75rem 0.5rem 0" }}>
                <HelpCenterIcon fontSize="large" color="primary" />
              </Grid>
              <Grid item>
                <Typography>Describe your problem.</Typography>
                <Typography>We shall get right to it!</Typography>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <Grid container direction={"column"} spacing={3} padding="2rem 0">
                <Grid item>
                  <FormControl sx={{ minWidth: "15rem" }}>
                    <InputLabel id="location-select-label">Where</InputLabel>
                    <Select
                      labelId="location-select-label"
                      id="location-select-id"
                      label="location"
                      defaultValue=""
                      onChange={handleIssueArea}
                    >
                      <MenuItem value={1}>Realm Selection</MenuItem>
                      <MenuItem value={2}>Arena Trail</MenuItem>
                      <MenuItem value={3}>Arena</MenuItem>
                      <MenuItem value={4}>Gurukul</MenuItem>
                      <MenuItem value={5}>Score</MenuItem>
                      <MenuItem value={6}>Karma Quotient</MenuItem>
                      <MenuItem value={7}>Login/logout</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl sx={{ minWidth: "15rem" }}>
                    <TextField
                      id="outlined-required"
                      label="What"
                      multiline
                      maxRows={3}
                      onChange={handleIssueDesc}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </div>

        <DialogActions sx={{ justifyContent: "center", paddingBottom: "2rem" }}>
          <Button
            onClick={() => {
              saveUserIssue();
              props.onClose();
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send to us
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
