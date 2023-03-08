import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InstagramIcon from "@mui/icons-material/Instagram";
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
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/edplore.official/"
            >
              <InstagramIcon fontSize="medium" />
            </a>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100090510970087"
            >
              <FacebookIcon fontSize="medium" />
            </a>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/EdploreOfficial"
            >
              <TwitterIcon fontSize="medium" />
            </a>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <a target="_top" href="mailto:edplore.help@gmail.com">
              <EmailIcon fontSize="medium" />
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Typography variant="caption" color="initial">
            Created with
            <FavoriteIcon fontSize="small" color="error" />
            by a family of educators just for the young ignited minds.
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography variant="caption" color="initial">
            ©{new Date().getFullYear()} BISWAL Technologies. All rights
            reserved.
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
            my: 0.5,
          }}
        >
          <Box sx={{ padding: "0 0.5rem" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/edplore.official/"
            >
              <InstagramIcon fontSize="medium" />
            </a>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100090510970087"
            >
              <FacebookIcon fontSize="medium" />
            </a>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/EdploreOfficial"
            >
              <TwitterIcon fontSize="medium" />
            </a>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box sx={{ padding: "0 0.5rem" }}>
            <a target="_top" href="mailto:edplore.help@gmail.com">
              <EmailIcon fontSize="medium" />
            </a>
          </Box>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            textAlign: "center",
          }}
        >
          <Typography variant="caption" color="initial">
            Created with
            <FavoriteIcon fontSize="small" color="error" />
            by a family of educators <br />
            just for the young ignited minds.
          </Typography>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 1,
          }}
        >
          <Typography variant="caption" color="initial">
            ©{new Date().getFullYear()} BISWAL Technologies. All rights
            reserved.
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
