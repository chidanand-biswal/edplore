import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";

export default function CommonFooter() {
  const bigScreenInd = useMediaQuery("(min-width:900px)");

  return bigScreenInd ? (
    <Paper
      style={{
        marginTop: "calc(10% + 5rem)",
        width: "100%",
        position: "fixed",
        bottom: 0,
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Box sx={{ padding: "0 0.5rem" }}>
            <LinkedInIcon fontSize="medium" />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <FacebookIcon fontSize="medium" />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <TwitterIcon fontSize="medium" />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <EmailIcon fontSize="medium" />
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            ©{new Date().getFullYear()} BISWAL Technologies Pvt. Ltd.
          </Typography>
        </Box>
      </Container>
    </Paper>
  ) : (
    <Paper
      style={{
        marginTop: "calc(10% + 7rem)",
        width: "100%",
        position: "sticky",
        bottom: 0,
        borderBottomWidth: "0rem",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container>
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <Box sx={{ padding: "0 0.5rem" }}>
            <LinkedInIcon fontSize="medium" />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <FacebookIcon fontSize="medium" />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <TwitterIcon fontSize="medium" />
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <EmailIcon fontSize="medium" />
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 0,
          }}
        >
          <Typography variant="caption" color="initial">
            ©{new Date().getFullYear()} BISWAL Technologies Private Limited
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
