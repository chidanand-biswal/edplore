import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import PentagonIcon from "@mui/icons-material/Pentagon";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Slide from "@mui/material/Slide";
import * as React from "react";
import infoExplorer from "../../static/infoExplorer.json";

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
                  <PentagonIcon fontSize="large" color="primary" />
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
                    <ListItem
                      key={item.text}
                      disablePadding
                      sx={{ alignItems: "flex-start" }}
                    >
                      <ListItemIcon sx={{ paddingTop: "0.35rem" }}>
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
                  <LocalPoliceIcon fontSize="large" color="primary" />
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
                    <ListItem
                      key={item.text}
                      disablePadding
                      sx={{ alignItems: "flex-start" }}
                    >
                      <ListItemIcon sx={{ paddingTop: "0.35rem" }}>
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
                  <BrightnessHighIcon fontSize="large" color="primary" />
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
                    <ListItem
                      key={item.text}
                      disablePadding
                      sx={{ alignItems: "flex-start" }}
                    >
                      <ListItemIcon sx={{ paddingTop: "0.35rem" }}>
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
                  <ElectricBoltIcon fontSize="large" color="primary" />
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
                    <ListItem
                      key={item.text}
                      disablePadding
                      sx={{ alignItems: "flex-start" }}
                    >
                      <ListItemIcon sx={{ paddingTop: "0.35rem" }}>
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
