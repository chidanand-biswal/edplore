import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import BrightnessHighIcon from "@mui/icons-material/BrightnessHigh";
import ExploreIcon from "@mui/icons-material/Explore";

const actions = [
  { icon: <BrightnessHighIcon />, name: "Karma" },
  { icon: <EmojiEventsIcon />, name: "Badge" },
  { icon: <ShareIcon />, name: "Share" },
];

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(3),
    left: theme.spacing(2),
  },
}));

export default function SpeedDialCustom() {
  return (
    <Box
      sx={{
        height: 100,
        transform: "translateZ(0px)",
        flexGrow: 1,
      }}
    >
      <StyledSpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: "relative", bottom: "13rem" }}
        icon={<SpeedDialIcon openIcon={<ExploreIcon />} />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </StyledSpeedDial>
    </Box>
  );
}
