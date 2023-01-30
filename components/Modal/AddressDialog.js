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
import * as React from "react";
import { Typography } from "@mui/material";
import Router from "next/router";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddressDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        onClose={(event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
            props.onClose;
          }
        }}
      >
        <div>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Dear Explorer, <br />
              We can see you are destined for greatness. <br />
              And you stand a chance to win glory and awards. <br />
              We need your address details to be able to ship your award if and
              when you win.
            </DialogContentText>
          </DialogContent>
        </div>

        <DialogActions sx={{ justifyContent: "center", paddingBottom: "2rem" }}>
          <Button
            onClick={() => {
              Router.push("/campaign/");
            }}
            variant="outlined"
          >
            I will update address later
          </Button>
          <Button
            onClick={() => {
              Router.push("/explorer/");
            }}
            variant="contained"
          >
            I will update address now
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
