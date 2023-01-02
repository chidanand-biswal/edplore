import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import StadiumIcon from "@mui/icons-material/Stadium";
import standardArenaMapData from "../../static/standardArenaMap.json";
import { useSelector, useDispatch } from "react-redux";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RealmInfoDialog(props) {
  const { standardDetails } = useSelector((state) => state.standardDetails);

  const findRealmWiseArenaList = (realm) => {
    const filteredArenaList = standardArenaMapData.standardArenaMap.filter(
      (data) => data.standard === standardDetails
    );

    switch (realm) {
      case "PHYSICS":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsPhysics
          : [];
      case "CHEMISTRY":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsChemistry
          : [];
      case "MATHEMATICS":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsMathematics
          : [];
      case "BIOLOGY":
        return typeof filteredArenaList[0] != "undefined"
          ? filteredArenaList[0].stepsBiology
          : [];
      default:
        console.log("Updating No Realm progress");
        return [];
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
        {props.modalType === "physics" ? (
          <div>
            <DialogTitle>Realm of Physics</DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                Here are the arenas that you will traverse while in the Realm of
                Physics.
                <List>
                  {findRealmWiseArenaList("PHYSICS").map((item) => (
                    <ListItem key={item.label} disablePadding>
                      <ListItemIcon>
                        <StadiumIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "chemistry" ? (
          <div>
            <DialogTitle>Realm of Chemistry</DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                Here are the arenas that you will traverse while in the Realm of
                Chemistry.
                <List>
                  {findRealmWiseArenaList("CHEMISTRY").map((value) => (
                    <ListItem key={value.label} disablePadding>
                      <ListItemIcon>
                        <StadiumIcon />
                      </ListItemIcon>
                      <ListItemText primary={value.label} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "biology" ? (
          <div>
            <DialogTitle>Realm of Biology</DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                Here are the arenas that you will traverse while in the Realm of
                Biology.
                <List>
                  {findRealmWiseArenaList("BIOLOGY").map((value) => (
                    <ListItem key={value.label} disablePadding>
                      <ListItemIcon>
                        <StadiumIcon />
                      </ListItemIcon>
                      <ListItemText primary={value.label} />
                    </ListItem>
                  ))}
                </List>
              </DialogContentText>
            </DialogContent>
          </div>
        ) : props.modalType === "mathematics" ? (
          <div>
            <DialogTitle>Mathematics</DialogTitle>
            <DialogContent dividers>
              <DialogContentText id="alert-dialog-slide-description">
                Here are the arenas that you will traverse while in the Realm of
                Mathematics.
                <List>
                  {findRealmWiseArenaList("MATHEMATICS").map((value) => (
                    <ListItem key={value.label} disablePadding>
                      <ListItemIcon>
                        <StadiumIcon />
                      </ListItemIcon>
                      <ListItemText primary={value.label} />
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
