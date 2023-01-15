import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "../../styles/Home.module.css";

export default function CardIconOption(props) {
  function renderCardMedia(param) {
    switch (param) {
      case "realms":
        return (
          <CardMedia
            component="img"
            sx={{
              width: "5rem",
              height: "5rem",
              display: "inline",
            }}
            src="/assets/realms.png"
            alt="Physics"
          />
        );
      case "explorerIntro":
        return (
          <CardMedia
            component="img"
            sx={{
              width: "5rem",
              height: "5rem",
              display: "inline",
            }}
            src="/assets/explorerIntro.png"
            alt="Physics"
          />
        );
      default:
        return (
          <CardMedia
            component="img"
            sx={{
              width: "5rem",
              height: "5rem",
              display: "inline",
            }}
            src="/assets/physics.png"
            alt="Physics"
          />
        );
    }
  }

  return (
    <Box sx={{ minWidth: 250 }}>
      <Card className={styles.cardIcon} elevation={8}>
        <React.Fragment>
          {renderCardMedia(props.source)}
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            ></Typography>
            <Typography variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.message}
            </Typography>
            <Typography variant="body2"></Typography>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
