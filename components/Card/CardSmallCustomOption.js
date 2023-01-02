import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "../../styles/Home.module.css";
import PentagonIcon from "@mui/icons-material/Pentagon";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

export default function CardSmallCustomOption(props) {
  function renderCardMedia(param) {
    switch (param) {
      case "physics":
        return (
          <CardMedia
            component="img"
            height="50rem"
            src="/assets/physics.png"
            alt="Physics"
          />
        );
      case "chemistry":
        return (
          <CardMedia
            component="img"
            height="50rem"
            src="/assets/chemistry.png"
            alt="Chemistry"
          />
        );
      case "mathematics":
        return (
          <CardMedia
            component="img"
            height="50rem"
            src="/assets/mathematics.png"
            alt="Mathematics"
          />
        );
      case "biology":
        return (
          <CardMedia
            component="img"
            height="50rem"
            src="/assets/biology.png"
            alt="Biology"
          />
        );
      case "superFast":
        return (
          <CardMedia>
            <ElectricBoltIcon fontSize="large" color="primary" />
          </CardMedia>
        );
      case "karma":
        return (
          <CardMedia>
            <PentagonIcon fontSize="large" color="primary" />
          </CardMedia>
        );
      case "badge":
        return (
          <CardMedia>
            <LocalPoliceIcon fontSize="large" color="primary" />
          </CardMedia>
        );
      case "chakra":
        return (
          <CardMedia>
            <BrightnessHighIcon fontSize="large" color="primary" />
          </CardMedia>
        );
      default:
        return (
          <CardMedia
            component="img"
            height="50rem"
            src="/assets/physics.png"
            alt="Physics"
          />
        );
    }
  }

  return (
    <Box>
      <Card className={styles.smallCard} elevation={3}>
        <React.Fragment>
          <CardContent>{renderCardMedia(props.source)}</CardContent>
          <Typography color="text.secondary">{props.message}</Typography>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
