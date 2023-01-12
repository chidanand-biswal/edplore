import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PentagonIcon from "@mui/icons-material/Pentagon";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import infoExplorer from "../../static/infoExplorer.json";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Grid } from "@mui/material";

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
                  <FavoriteIcon fontSize="large" color="primary" />
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
                  You want to report this.
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
