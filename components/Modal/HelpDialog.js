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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function HelpDialog(props) {
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
                <HelpCenterIcon fontSize="medium" color="primary" />
              </Grid>
              <Grid item>
                <Typography>Describe your problem.</Typography>
                <Typography>We shall get right to it!</Typography>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent dividers>
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
                    >
                      <MenuItem value={1}>Realm Selection</MenuItem>
                      <MenuItem value={2}>Arena Trail</MenuItem>
                      <MenuItem value={3}>Arena</MenuItem>
                      <MenuItem value={4}>Gurukul</MenuItem>
                      <MenuItem value={5}>Kirti Board</MenuItem>
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
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </DialogContentText>
          </DialogContent>
        </div>

        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={props.onClose}
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
