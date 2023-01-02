import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Home.module.css";

export default function CardQuizOption(props) {
  const [selected, setSelected] = useState(false);

  const handleSelect = (event) => {
    setSelected(true);
  };

  return (
    <Box>
      {props.isSelected === true ? (
        <Card
          variant="elevation"
          className={styles.smallQuizOptionCardSelected}
          onClick={(event) => {
            handleSelect(event);
          }}
        >
          <React.Fragment>
            <CardContent>
              <Typography color="text.secondary">{props.message}</Typography>
            </CardContent>
            <CardActions></CardActions>
          </React.Fragment>
        </Card>
      ) : (
        <Card
          variant="outlined"
          className={styles.smallQuizOptionCard}
          onClick={(event) => {
            handleSelect(event);
          }}
        >
          <React.Fragment>
            <CardContent>
              <Typography color="text.secondary">{props.message}</Typography>
            </CardContent>
            <CardActions></CardActions>
          </React.Fragment>
        </Card>
      )}
    </Box>
  );
}
