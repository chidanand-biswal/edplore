import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import styles from "../../styles/Home.module.css";

export default function CardIconLargeOption(props) {
  const rookieFeatureList = [
    {
      index: "1",
      feature: "Access all the Realms",
      icon: <CheckIcon color="success" />,
    },
    {
      index: "2",
      feature: "View 'My KARMA Quotient'",
      icon: <CheckIcon color="success" />,
    },
    {
      index: "3",
      feature: "View 'My KIRTI Board'",
      icon: <CheckIcon color="success" />,
    },
    {
      index: "4",
      feature: "Resume Quest where you left off",
      icon: <CloseIcon color="error" />,
    },
    {
      index: "5",
      feature: "Hall of Fame",
      icon: <CloseIcon color="error" />,
    },
  ];

  const explorerFeatureList = [
    {
      index: "1",
      feature: "Access all the Realms",
      icon: <CheckIcon color="success" />,
    },
    {
      index: "2",
      feature: "View 'My KARMA Quotient'",
      icon: <CheckIcon color="success" />,
    },
    {
      index: "3",
      feature: "View 'My KIRTI Board'",
      icon: <CheckIcon color="success" />,
    },
    {
      index: "4",
      feature: "Resume Quest where you left off",
      icon: <CheckIcon color="success" />,
    },
    ,
    {
      index: "5",
      feature: "Hall of Fame",
      icon: <CheckIcon color="success" />,
    },
  ];

  function renderCardMedia(param) {
    switch (param) {
      case "rookie":
        return (
          <CardMedia
            component="img"
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              display: "inline",
            }}
            src="/assets/rookie.png"
            alt="Physics"
          />
        );
      case "explorer":
        return (
          <CardMedia
            component="img"
            sx={{
              width: "3.5rem",
              height: "3.5rem",
              display: "inline",
            }}
            src="/assets/explorer.png"
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

  function renderCardContent(param) {
    switch (param) {
      case "rookie":
        return (
          <List>
            {rookieFeatureList.map((item, index) => (
              <ListItem key={item.index} disablePadding>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.feature} />
              </ListItem>
            ))}
          </List>
        );
      case "explorer":
        return (
          <List>
            {explorerFeatureList.map((item, index) => (
              <ListItem key={item.index} disablePadding>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.feature} />
              </ListItem>
            ))}
          </List>
        );
      default:
        return (
          <List>
            {rookieFeatureList.map((item, index) => (
              <ListItem key={item.index} disablePadding>
                <ListItemIcon>
                  <CheckIcon />
                </ListItemIcon>
                <ListItemText primary={item.feature} />
              </ListItem>
            ))}
          </List>
        );
    }
  }

  return (
    <Box sx={{ minWidth: 250 }}>
      <Card className={styles.cardIconLarge} elevation={5}>
        <React.Fragment>
          {renderCardMedia(props.source)}

          <CardContent sx={{ padding: "0.5rem" }}>
            <Box variant="h6" component="div">
              {props.title}
            </Box>
            <Box color="text.secondary" sx={{ fontSize: 0.5 }}>
              {renderCardContent(props.source)}
            </Box>
          </CardContent>
          <CardActions></CardActions>
        </React.Fragment>
      </Card>
    </Box>
  );
}
