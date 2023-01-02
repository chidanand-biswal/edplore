import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Home.module.css";

export default function CardLearn(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className={styles.cardLearn}>
        <React.Fragment>
          <CardContent>
            <Box sx={{ paddingBottom: "0.75rem" }}>
              <Typography variant="h5" component="div">
                {props.title}
              </Typography>
            </Box>
            <Box sx={{ minWidth: 275 }}>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.message}
              </Typography>
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
