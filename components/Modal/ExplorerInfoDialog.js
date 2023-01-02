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
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { Grid } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ExplorerInfoDialog(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {props.modalType === "karma" ? (
          <div>
            <DialogTitle>
              <Grid container direction="row">
                <Grid item>
                  <PentagonIcon fontSize="large" />
                </Grid>
                <Grid item sx={{ paddingLeft: "1rem" }}>
                  My Karma Quotient
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                <List>
                  {infoExplorer.karma.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemIcon>
                        <TipsAndUpdatesIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "kavach" ? (
          <div>
            <DialogTitle>
              <Grid container direction="row">
                <Grid item>
                  <LocalPoliceIcon fontSize="large" />
                </Grid>
                <Grid item sx={{ paddingLeft: "1rem" }}>
                  Kavach
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                <List>
                  {infoExplorer.kavach.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemIcon>
                        <TipsAndUpdatesIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "chakra" ? (
          <div>
            <DialogTitle>
              <Grid container direction="row">
                <Grid item>
                  <BrightnessHighIcon fontSize="large" />
                </Grid>
                <Grid item sx={{ paddingLeft: "1rem" }}>
                  Chakra
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                <List>
                  {infoExplorer.chakra.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemIcon>
                        <TipsAndUpdatesIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "vajra" ? (
          <div>
            <DialogTitle>
              <Grid container direction="row">
                <Grid item>
                  <ElectricBoltIcon fontSize="large" />
                </Grid>
                <Grid item sx={{ paddingLeft: "1rem" }}>
                  Vajra
                </Grid>
              </Grid>
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                <List>
                  {infoExplorer.vajra.map((item) => (
                    <ListItem key={item.text} disablePadding>
                      <ListItemIcon>
                        <TipsAndUpdatesIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : (
          <div>
            <DialogTitle>Vidya</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
                Realms of Vidya
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
