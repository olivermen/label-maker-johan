import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import LoginIcon from "@mui/icons-material/Login";
import FormatColorResetIcon from "@mui/icons-material/FormatColorReset";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import NotListedLocationIcon from "@mui/icons-material/NotListedLocation";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import SendTimeExtensionIcon from "@mui/icons-material/SendTimeExtension";
import FeedIcon from "@mui/icons-material/Feed";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import BugReportIcon from "@mui/icons-material/BugReport";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo1.webp";

import "./sidebar.scss";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const SideNavigation = (text: any) => {
    // let navigate = useNavigate();
    alert("123");
    // navigate("/login");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar sx={{ background: "transparent" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src={logo}
            width={350}
            height={90}
            alt="label maker"
            style={{ border: "5px", borderColor: "white" }}
          />
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          backgroundColor: "black",
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            "Sign In",
            "Reset Design",
            "Browse All Labels",
            "About Our Labels",
            "Pricing",
            "Shipping",
            "News",
            "Refund Policy",
            "Report A Bug",
            "Contact US",
          ].map((text, index) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => SideNavigation(text)}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <LoginIcon />
                  ) : index === 1 ? (
                    <FormatColorResetIcon />
                  ) : index === 2 ? (
                    <ImageSearchIcon />
                  ) : index === 3 ? (
                    <NotListedLocationIcon />
                  ) : index === 4 ? (
                    <LocalAtmIcon />
                  ) : index === 5 ? (
                    <SendTimeExtensionIcon />
                  ) : index === 6 ? (
                    <FeedIcon />
                  ) : index === 7 ? (
                    <LocalPoliceIcon />
                  ) : index === 8 ? (
                    <BugReportIcon />
                  ) : (
                    <MailIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}
