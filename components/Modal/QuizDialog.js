import FavoriteIcon from "@mui/icons-material/Favorite";
import FlagIcon from "@mui/icons-material/Flag";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import * as React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function QuizDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {props.modalType === "like" ? (
          <div>
            <DialogTitle>
              <Grid container direction="row">
                <Grid item>
                  <FavoriteIcon fontSize="large" color="error" />
                </Grid>
                <Grid item sx={{ paddingLeft: "1rem" }}>
                  You love this!
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                You just made our day! Thank you for the feedback. <br />
                We hope to bring more such interesting quiz questions.
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "report" ? (
          <div>
            <DialogTitle>
              <Grid container direction="row">
                <Grid item>
                  <FlagIcon fontSize="large" color="primary" />
                </Grid>
                <Grid item sx={{ paddingLeft: "1rem" }}>
                  You want to report this
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                Thank you for the feedback. <br />
                We are actively reviewing it.
              </DialogContentText>
            </DialogContent>
          </div>
        ) : (
          <div>
            <DialogTitle>Bodhi</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Realms of Bodhi
              </DialogContentText>
            </DialogContent>
          </div>
        )}

        <DialogActions>
          <Button onClick={props.onClose}>OK, got it</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
