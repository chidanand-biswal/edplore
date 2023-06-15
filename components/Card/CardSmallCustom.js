import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import PentagonIcon from "@mui/icons-material/Pentagon";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import styles from "../../styles/Home.module.css";

export default function CardSmallCustom(props) {
  function renderCardMedia(param) {
    switch (param) {
      case "superFast":
        return (
          <CardMedia>
            <ElectricBoltIcon fontSize="large" sx={{ color: "RoyalBlue" }} />
          </CardMedia>
        );
      case "karma":
        return (
          <CardMedia>
            <PentagonIcon fontSize="large" sx={{ color: "DarkMagenta" }} />
          </CardMedia>
        );
      case "badge":
        return (
          <CardMedia>
            <LocalPoliceIcon fontSize="large" sx={{ color: "Goldenrod" }} />
          </CardMedia>
        );
      case "chakra":
        return (
          <CardMedia>
            <BrightnessHighIcon fontSize="large" sx={{ color: "OrangeRed" }} />
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
      <Card className={styles.smallCardLaunch}>
        <React.Fragment>
          <Box sx={{ padding: "1rem" }}>{renderCardMedia(props.source)}</Box>
        </React.Fragment>
      </Card>
    </Box>
  );
}
