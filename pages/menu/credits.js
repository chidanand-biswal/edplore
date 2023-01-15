import HandshakeIcon from "@mui/icons-material/Handshake";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React from "react";
import MenuAppBar from "../../components/AppBar/MenuAppBar";
import ToolbarFooter from "../../components/Footer/ToolbarFooter";
import styles from "../../styles/Home.module.css";

export default function CreditsHome() {
  return (
    <Box className={styles.container}>
      <MenuAppBar />

      <Grid container direction="row">
        <Grid item className={styles.main}>
          <Box sx={{ width: "100%", paddingTop: "1rem" }}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <HandshakeIcon color="primary" fontSize="large" />
              </Grid>

              <Grid item sx={{ padding: "0 1rem 0.5rem 1rem" }}>
                <h2 className={styles.greyText}>Credits</h2>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ maxWidth: "50rem" }}>
            <Grid container direction="column">
              <Grid item sx={{ padding: "1rem" }}>
                <Typography>
                  We at &quot;edplore&quot;, are a bootstrapped organization
                  with a noble mission in the sector of education.
                  <br />
                  In order to make the application accessible to most, we have
                  made use of open-source technology platforms and assets while
                  building this from scratch.
                  <br />
                  We remain indebted to the below and announce credits as due:
                </Typography>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ padding: "1rem" }}>
            <a
              title="Subhashish Panigrahi, CC BY-SA 4.0 &lt;https://creativecommons.org/licenses/by-sa/4.0&gt;, via Wikimedia Commons"
              href="https://commons.wikimedia.org/wiki/File:Konarka.svg"
            >
              Subhashish Panigrahi, CC BY-SA 4.0 via Wikimedia Commons
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/hurdy-gurdy"
              title="hurdy gurdy icons"
            >
              Hurdy gurdy icons created by Freepik - Flaticon
            </a>{" "}
            <br />
            <a
              href="https://www.flaticon.com/free-icons/knight"
              title="knight icons"
            >
              Knight icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/knight"
              title="knight icons"
            >
              Knight icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/physics"
              title="physics icons"
            >
              Physics icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/chemistry"
              title="chemistry icons"
            >
              Chemistry icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/mathematics"
              title="mathematics icons"
            >
              Mathematics icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/biology"
              title="biology icons"
            >
              Biology icons created by Eucalyp - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/planet"
              title="planet icons"
            >
              Planet icons created by smalllikeart - Flaticon
            </a>
            <br />
            <a href="https://www.flaticon.com/free-icons/map" title="map icons">
              Map icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/banyan"
              title="banyan icons"
            >
              Banyan icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/stadium"
              title="stadium icons"
            >
              Stadium icons created by Freepik - Flaticon
            </a>
            <br />
            <a
              href="https://www.flaticon.com/free-icons/mindfulness"
              title="mindfulness icons"
            >
              Mindfulness icons created by Freepik - Flaticon
            </a>
          </Box>

          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{ marginTop: "0.75rem" }}
          >
            <Grid item>
              <div>
                <Link href="/">
                  <a>
                    <Button variant="contained" className={styles.buttonLaunch}>
                      BACK TO HOME
                    </Button>
                  </a>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <ToolbarFooter />
    </Box>
  );
}
