import LeaderboardIcon from "@mui/icons-material/Leaderboard";
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
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getExplorerDataByStandard } from "../../firebase/db/dbUtility";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function LeaderBoardDialog(props) {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const { standardDetails } = useSelector((state) => state.standardDetails);
  const [leadersList, setLeadersList] = React.useState([]);
  const [message, setMessage] = React.useState("");

  useEffect(() => {
    const fetchUserScoreData = async () => {
      let userScoreDataList = await getExplorerDataByStandard(standardDetails);

      if (userScoreDataList.length > 0) {
        userScoreDataList.sort(function (a, b) {
          return b.karma - a.karma;
        });
        setLeadersList(userScoreDataList);
      } else {
        setMessage(
          "We found no deserving Leaders of Realms of Bodhi yet. Perhaps you will be the first!"
        );
      }
    };

    if (user) {
      fetchUserScoreData();
    } else {
      setMessage(
        "If you wish to see where you stand among the Leaders of Realms of Bodhi; you must first login."
      );
    }
  }, []);

  return (
    <div>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Grid container direction="row">
            <Grid item sx={{ padding: "0 1rem 0 0" }}>
              <LeaderboardIcon fontSize="large" color="primary" />
            </Grid>
            <Grid item sx={{ padding: "0.75rem 0 0 0" }}>
              <Typography>Hall of Fame</Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-slide-description">
            {leadersList.length > 0 ? (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Explorer</TableCell>
                      <TableCell align="right">Karma</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {leadersList.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.karma}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            ) : (
              <div>{message}</div>
            )}
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={props.onClose}>OK, got it</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
