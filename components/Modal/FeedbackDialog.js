import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SendIcon from "@mui/icons-material/Send";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
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
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { saveEdploreUserFeedback } from "../../firebase/db/dbUtility";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FeedbackDialog(props) {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const { userDetails } = useSelector((state) => state.userDetails);
  const [feedback1Up, setFeedback1Up] = React.useState(false);
  const [feedback1Down, setFeedback1Down] = React.useState(false);
  const [feedback2Up, setFeedback2Up] = React.useState(false);
  const [feedback2Down, setFeedback2Down] = React.useState(false);
  const [feedback3Up, setFeedback3Up] = React.useState(false);
  const [feedback3Down, setFeedback3Down] = React.useState(false);

  const [feedbackDetail, setFeedbackDetail] = React.useState("");

  const handleFeedbackDetail = (event) => {
    if (event.target.value !== "") {
      setFeedbackDetail(event.target.value);
    }
  };

  const saveFeedback = () => {
    if (user) {
      saveEdploreUserFeedback(
        user.uid,
        feedback1Up ? true : false,
        feedback2Up ? true : false,
        feedback3Up ? true : false,
        feedbackDetail
      );
    } else if (process.env.NEXT_PUBLIC_SAVE_UNAUTH === "Y") {
      saveEdploreUserFeedback(
        userDetails,
        feedback1Up ? true : false,
        feedback2Up ? true : false,
        feedback3Up ? true : false,
        feedbackDetail
      );
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
                <ThumbsUpDownIcon fontSize="large" color="primary" />
              </Grid>
              <Grid item>
                <Typography variant="h6">
                  Speak your mind!
                  <br /> We are listening.
                </Typography>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent dividers>
            <DialogContentText id="alert-dialog-slide-description">
              <Grid container direction={"column"} spacing={1}>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid item>
                      <InputLabel
                        id="standard-prefer-label"
                        sx={{ marginTop: "0.75rem" }}
                      >
                        Your experience:
                      </InputLabel>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="down"
                        size="large"
                        onClick={() => {
                          setFeedback1Down(!feedback1Down);
                          setFeedback1Up(false);
                        }}
                      >
                        {feedback1Down ? (
                          <ThumbDownAltIcon />
                        ) : (
                          <ThumbDownOffAltIcon />
                        )}
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="up"
                        size="large"
                        onClick={() => {
                          setFeedback1Up(!feedback1Up);
                          setFeedback1Down(false);
                        }}
                      >
                        {feedback1Up ? (
                          <ThumbUpAltIcon />
                        ) : (
                          <ThumbUpOffAltIcon />
                        )}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid item>
                      <InputLabel
                        id="standard-prefer-label"
                        sx={{ marginTop: "0.75rem" }}
                      >
                        Design of Realm:
                      </InputLabel>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="down"
                        size="large"
                        onClick={() => {
                          setFeedback2Down(!feedback2Down);
                          setFeedback2Up(false);
                        }}
                      >
                        {feedback2Down ? (
                          <ThumbDownAltIcon />
                        ) : (
                          <ThumbDownOffAltIcon />
                        )}
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="up"
                        size="large"
                        onClick={() => {
                          setFeedback2Up(!feedback2Up);
                          setFeedback2Down(false);
                        }}
                      >
                        {feedback2Up ? (
                          <ThumbUpAltIcon />
                        ) : (
                          <ThumbUpOffAltIcon />
                        )}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction={"row"}>
                    <Grid item>
                      <InputLabel
                        id="standard-prefer-label"
                        sx={{ marginTop: "0.75rem" }}
                      >
                        Difficulty of quiz:
                      </InputLabel>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="down"
                        size="large"
                        onClick={() => {
                          setFeedback3Down(!feedback3Down);
                          setFeedback3Up(false);
                        }}
                      >
                        {feedback3Down ? (
                          <ThumbDownAltIcon />
                        ) : (
                          <ThumbDownOffAltIcon />
                        )}
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="up"
                        size="large"
                        onClick={() => {
                          setFeedback3Up(!feedback3Up);
                          setFeedback3Down(false);
                        }}
                      >
                        {feedback3Up ? (
                          <ThumbUpAltIcon />
                        ) : (
                          <ThumbUpOffAltIcon />
                        )}
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <FormControl sx={{ minWidth: "15rem" }}>
                    <TextField
                      id="outlined-required"
                      label="Additional feedback"
                      multiline
                      maxRows={3}
                      onChange={handleFeedbackDetail}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </div>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => {
              saveFeedback();
              props.onClose();
            }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            Send it our way!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
