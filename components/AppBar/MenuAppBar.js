import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import styles from "../../styles/Home.module.css";
import Router from "next/router";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import CloseIcon from "@mui/icons-material/Close";
import HandshakeIcon from "@mui/icons-material/Handshake";
import Grid from "@mui/material/Grid";
import Diversity1Icon from "@mui/icons-material/Diversity1";

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLeftMenu, setOpenLeftMenu] = React.useState(false);
  const [openRightMenu, setOpenRightMenu] = React.useState(false);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getLeftMenuList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => {
        setOpenLeftMenu(false);
      }}
      onKeyDown={() => {
        setOpenLeftMenu(false);
      }}
    >
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "right", padding: "1rem" }}>
          <CloseIcon
            fontSize="large"
            onClick={() => {
              setOpenLeftMenu(false);
            }}
          />
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <Divider>
            <ExploreIcon fontSize="large" color="primary" />
          </Divider>
        </Grid>
        <Grid item>
          <List>
            <ListItem key={"menuAbout"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/about")}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"menuFAQ"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/faq")}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"FAQ"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"menuCredits"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/credits")}>
                <ListItemIcon>
                  <HandshakeIcon />
                </ListItemIcon>
                <ListItemText primary={"Credits"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem key={"menuContact"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/contact")}>
                <ListItemIcon>
                  <Diversity1Icon />
                </ListItemIcon>
                <ListItemText primary={"Who we are"} />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem key={"menuSupport"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/support")}>
                <ListItemIcon>
                  <SupportAgentIcon />
                </ListItemIcon>
                <ListItemText primary={"Support"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
  );

  const getRightMenuList = () => (
    <Box
      sx={{ width: 200 }}
      role="presentation"
      onClick={() => {
        setOpenRightMenu(false);
      }}
      onKeyDown={() => {
        setOpenRightMenu(false);
      }}
    >
      <Grid container direction="column">
        <Grid item sx={{ textAlign: "left", padding: "1rem" }}>
          <CloseIcon
            fontSize="large"
            onClick={() => {
              setOpenRightMenu(false);
            }}
          />
        </Grid>
        <Grid item sx={{ textAlign: "center" }}>
          <Divider>
            <AccountCircle fontSize="large" color="primary" />
          </Divider>
        </Grid>
        <Grid item>
          <List>
            <ListItem key={"menuProfile"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/profile")}>
                <ListItemIcon>
                  <ManageAccountsIcon />
                </ListItemIcon>
                <ListItemText primary={"Profile"} />
              </ListItemButton>
            </ListItem>
            {auth ? (
              <ListItem key={"menuLogout"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem key={"menuLogin"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" className={styles.appBar}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpenLeftMenu(true);
            }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
            onClick={() => Router.push("/")}
          >
            edpl
            <IconButton className={styles.exploreIconMenuAppBar}>
              <ExploreIcon fontSize="small" />
            </IconButton>
            re
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={() => {
                  setOpenRightMenu(true);
                }}
              >
                <AccountCircle />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={openLeftMenu}
        anchor={"left"}
        onClose={() => setOpenLeftMenu(false)}
      >
        {getLeftMenuList()}
      </Drawer>
      <Drawer
        variant="temporary"
        open={openRightMenu}
        anchor={"right"}
        onClose={() => setOpenRightMenu(false)}
      >
        {getRightMenuList()}
      </Drawer>
    </Box>
  );
}
