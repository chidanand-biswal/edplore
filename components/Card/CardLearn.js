import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "../../styles/Home.module.css";

export default function CardLearn(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={styles.cardLearn}>
        <React.Fragment>
          <CardContent>
            <Box sx={{ paddingBottom: "0.5rem" }}>
              <Typography variant="h6" component="div">
                {props.title}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 275 }}>{props.message}</Box>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
