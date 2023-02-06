import AccountCircle from "@mui/icons-material/AccountCircle";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CloseIcon from "@mui/icons-material/Close";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import ExploreIcon from "@mui/icons-material/Explore";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HomeIcon from "@mui/icons-material/Home";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PolicyIcon from "@mui/icons-material/Policy";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import Router, { useRouter } from "next/router";
import * as React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { initFirebase } from "../../firebase/firebaseApp";
import styles from "../../styles/Home.module.css";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      //bgcolor: stringToColor(name),
      height: "2rem",
      width: "2rem",
      fontSize: "1rem",
      bgcolor: "transparent",
      border: "3px solid white",
    },
    //children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    children: `${name.split(" ")[0][0]}`,
  };
}

export default function MenuAppBarHome() {
  initFirebase();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openLeftMenu, setOpenLeftMenu] = React.useState(false);
  const [openRightMenu, setOpenRightMenu] = React.useState(false);

  const signIn = async () => {
    Router.push("/auth");
    //const result = await signInWithPopup(auth, provider);
    /*
    await signInWithRedirect(auth, provider)
      .then((user) => {
        if (user) {
          console.log(user);
          user.user.getIdToken().then((token) => {
            user.log(token);
          });
        }
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(Router.push("/"));
      */
  };

  const signOut = async () => {
    auth.signOut();
    Router.push("/launch");
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
                  <LiveHelpIcon />
                </ListItemIcon>
                <ListItemText primary={"FAQ"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"menuParent"} disablePadding>
              <ListItemButton onClick={() => Router.push("/menu/parents")}>
                <ListItemIcon>
                  <EscalatorWarningIcon color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary={"Are you a parent?"}
                  sx={{ color: "#556cd6" }}
                />
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

          <Divider />
          <ListItem key={"menuPolicy"} disablePadding>
            <ListItemButton onClick={() => Router.push("/menu/policy")}>
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <ListItemText primary={"Our policies"} />
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
          <ListItem key={"menuBlog"} disablePadding>
            <ListItemButton onClick={() => Router.push("/menu/blog")}>
              <ListItemIcon>
                <AutoStoriesIcon sx={{ color: "purple" }} />
              </ListItemIcon>
              <ListItemText
                sx={{ color: "purple" }}
                primary={"Chronicles of Bodhi"}
              />
            </ListItemButton>
          </ListItem>
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
            {user ? (
              <img
                alt="profile"
                sx={{
                  height: "1rem",
                  width: "1rem",
                }}
                src={user.photoURL ? user.photoURL : "/assets/rookie.png"}
                referrerPolicy="no-referrer"
                unoptimized="true"
              />
            ) : (
              <AccountCircle fontSize="large" color="primary" />
            )}
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
            {user ? (
              <ListItem key={"menuLogout"} disablePadding>
                <ListItemButton onClick={signOut}>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem key={"menuLogin"} disablePadding>
                <ListItemButton onClick={signIn}>
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

          {user ? (
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
                <Avatar {...stringAvatar(user.displayName)} />
              </IconButton>
            </div>
          ) : (
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
                <AccountCircle fontSize="medium" />
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
