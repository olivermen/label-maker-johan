import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import "./topmenubar.scss";

import useStore from "../../useStore";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 300;

const TopMenuBar = (props: Props) => {
  const { T } = useStore();
  const G: any = useStore();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [contact, setContact] = React.useState(false);

  const [isVisible, setIsVisible] = React.useState(true);
  const [lang, setLang] = React.useState<any>("/en");
  // React.useEffect(() => {
  //   window?.addEventListener("scroll", listenToScroll);
  //   return () => window?.removeEventListener("scroll", listenToScroll);
  // }, []);
  // const listenToScroll = () => {
  //   let heightToHideFrom = 200;
  //   const winScroll =
  //     document.body.scrollTop || document.documentElement.scrollTop;

  //   if (winScroll > heightToHideFrom) {
  //     isVisible && setIsVisible(false);
  //   } else {
  //     setIsVisible(true);
  //   }
  // };
  // const navigate = useNavigate();
  React.useEffect(() => {
    if(G.lang == "en-US") setLang("/en");
    else if(G.lang == "sw-SW") setLang("/sv");
    else setLang("/es");
  }, []);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onHandleClick = (e: any) => {
    if (e === "Contact us") {
      setContact(true);
    }
  };
  
  const navItems = [
    T("menu.browse"),
    T("menu.about"),
    T("menu.news"),
    T("menu.shipping"),
    T("menu.contact"),
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to={G.lang == "en-US" ? "en/edit" : G.lang == "sw-SW" ? "sw/edit" : "es/edit"}>
        <Typography variant="h6" sx={{ my: 5 }}>
          Label Maker
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <Link
              to={
                item === T("menu.browse")
                  ? lang + "/browse"
                  : item === T("menu.about")
                  ? lang + "/about"
                  : item === T("menu.news")
                  ? lang + "/news"
                  : item === T("menu.shipping")
                  ? lang + "/shippinginfo"
                  : lang + "/edit"
              }
              className="link-menu"
            >
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="top-menu">
      <Box sx={{ display: "flex" }}>
        <AppBar
          component="nav"
          sx={{
            bgcolor: "transparent",
            color: "black",
            position: "relative !important",
          }}
          elevation={0}
        >
          <Toolbar sx={{ height: "100px", mr: 15, ml: 5 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { lg: "none" }, color: "#333" }}
            >
              <MenuIcon />
            </IconButton>
            {/* <Link to="/edit"> */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              <Link to={lang + "/edit"}>
                <svg
                  width="150"
                  height="15"
                  viewBox="0 0 150 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_95_3)">
                    <path
                      d="M18.9939 7.5C18.9939 11.0898 15.1911 14 10.5 14C5.80893 14 2.00607 11.0898 2.00607 7.5C2.00607 3.91015 -6.17327 1 10.5 1C27.1733 1 18.9939 3.91015 18.9939 7.5Z"
                      fill="#FEA150"
                    />
                    <path
                      d="M44.402 12.344H48.632V14H42.35V1.48999H44.402V12.344Z"
                      fill="#333333"
                    />
                    <path
                      d="M49.664 8.99598C49.664 7.99998 49.868 7.11798 50.276 6.34998C50.696 5.58198 51.26 4.98798 51.968 4.56798C52.688 4.13598 53.48 3.91998 54.344 3.91998C55.124 3.91998 55.802 4.07598 56.378 4.38798C56.966 4.68798 57.434 5.06598 57.782 5.52198V4.08198H59.852V14H57.782V12.524C57.434 12.992 56.96 13.382 56.36 13.694C55.76 14.006 55.076 14.162 54.308 14.162C53.456 14.162 52.676 13.946 51.968 13.514C51.26 13.07 50.696 12.458 50.276 11.678C49.868 10.886 49.664 9.99198 49.664 8.99598ZM57.782 9.03198C57.782 8.34798 57.638 7.75398 57.35 7.24998C57.074 6.74598 56.708 6.36198 56.252 6.09798C55.796 5.83398 55.304 5.70198 54.776 5.70198C54.248 5.70198 53.756 5.83398 53.3 6.09798C52.844 6.34998 52.472 6.72798 52.184 7.23198C51.908 7.72398 51.77 8.31198 51.77 8.99598C51.77 9.67998 51.908 10.28 52.184 10.796C52.472 11.312 52.844 11.708 53.3 11.984C53.768 12.248 54.26 12.38 54.776 12.38C55.304 12.38 55.796 12.248 56.252 11.984C56.708 11.72 57.074 11.336 57.35 10.832C57.638 10.316 57.782 9.71598 57.782 9.03198Z"
                      fill="#333333"
                    />
                    <path
                      d="M64.5993 5.55799C64.9473 5.07799 65.4213 4.68799 66.0213 4.38799C66.6333 4.07599 67.3113 3.91999 68.0553 3.91999C68.9313 3.91999 69.7233 4.12999 70.4313 4.54999C71.1393 4.96999 71.6973 5.56999 72.1053 6.34999C72.5133 7.11799 72.7173 7.99999 72.7173 8.99599C72.7173 9.99199 72.5133 10.886 72.1053 11.678C71.6973 12.458 71.1333 13.07 70.4133 13.514C69.7053 13.946 68.9193 14.162 68.0553 14.162C67.2873 14.162 66.6033 14.012 66.0033 13.712C65.4153 13.412 64.9473 13.028 64.5993 12.56V14H62.5473V0.679993H64.5993V5.55799ZM70.6293 8.99599C70.6293 8.31199 70.4853 7.72399 70.1973 7.23199C69.9213 6.72799 69.5493 6.34999 69.0813 6.09799C68.6253 5.83399 68.1333 5.70199 67.6053 5.70199C67.0893 5.70199 66.5973 5.83399 66.1293 6.09799C65.6733 6.36199 65.3013 6.74599 65.0133 7.24999C64.7373 7.75399 64.5993 8.34799 64.5993 9.03199C64.5993 9.71599 64.7373 10.316 65.0133 10.832C65.3013 11.336 65.6733 11.72 66.1293 11.984C66.5973 12.248 67.0893 12.38 67.6053 12.38C68.1333 12.38 68.6253 12.248 69.0813 11.984C69.5493 11.708 69.9213 11.312 70.1973 10.796C70.4853 10.28 70.6293 9.67999 70.6293 8.99599Z"
                      fill="#333333"
                    />
                    <path
                      d="M83.8365 8.79798C83.8365 9.16998 83.8125 9.50598 83.7645 9.80598H76.1865C76.2465 10.598 76.5405 11.234 77.0685 11.714C77.5965 12.194 78.2445 12.434 79.0125 12.434C80.1165 12.434 80.8965 11.972 81.3525 11.048H83.5665C83.2665 11.96 82.7205 12.71 81.9285 13.298C81.1485 13.874 80.1765 14.162 79.0125 14.162C78.0645 14.162 77.2125 13.952 76.4565 13.532C75.7125 13.1 75.1245 12.5 74.6925 11.732C74.2725 10.952 74.0625 10.052 74.0625 9.03198C74.0625 8.01198 74.2665 7.11798 74.6745 6.34998C75.0945 5.56998 75.6765 4.96998 76.4205 4.54998C77.1765 4.12998 78.0405 3.91998 79.0125 3.91998C79.9485 3.91998 80.7825 4.12398 81.5145 4.53198C82.2465 4.93998 82.8165 5.51598 83.2245 6.25998C83.6325 6.99198 83.8365 7.83798 83.8365 8.79798ZM81.6945 8.14998C81.6825 7.39398 81.4125 6.78798 80.8845 6.33198C80.3565 5.87598 79.7025 5.64798 78.9225 5.64798C78.2145 5.64798 77.6085 5.87598 77.1045 6.33198C76.6005 6.77598 76.3005 7.38198 76.2045 8.14998H81.6945Z"
                      fill="#333333"
                    />
                    <path
                      d="M87.9079 0.679993V14H85.8559V0.679993H87.9079Z"
                      fill="#333333"
                    />
                    <path
                      d="M108.454 1.48999V14H106.402V5.43199L102.586 14H101.164L97.3297 5.43199V14H95.2777V1.48999H97.4917L101.884 11.3L106.258 1.48999H108.454Z"
                      fill="#333333"
                    />
                    <path
                      d="M110.467 8.99598C110.467 7.99998 110.671 7.11798 111.079 6.34998C111.499 5.58198 112.063 4.98798 112.771 4.56798C113.491 4.13598 114.283 3.91998 115.147 3.91998C115.927 3.91998 116.605 4.07598 117.181 4.38798C117.769 4.68798 118.237 5.06598 118.585 5.52198V4.08198H120.655V14H118.585V12.524C118.237 12.992 117.763 13.382 117.163 13.694C116.563 14.006 115.879 14.162 115.111 14.162C114.259 14.162 113.479 13.946 112.771 13.514C112.063 13.07 111.499 12.458 111.079 11.678C110.671 10.886 110.467 9.99198 110.467 8.99598ZM118.585 9.03198C118.585 8.34798 118.441 7.75398 118.153 7.24998C117.877 6.74598 117.511 6.36198 117.055 6.09798C116.599 5.83398 116.107 5.70198 115.579 5.70198C115.051 5.70198 114.559 5.83398 114.103 6.09798C113.647 6.34998 113.275 6.72798 112.987 7.23198C112.711 7.72398 112.573 8.31198 112.573 8.99598C112.573 9.67998 112.711 10.28 112.987 10.796C113.275 11.312 113.647 11.708 114.103 11.984C114.571 12.248 115.063 12.38 115.579 12.38C116.107 12.38 116.599 12.248 117.055 11.984C117.511 11.72 117.877 11.336 118.153 10.832C118.441 10.316 118.585 9.71598 118.585 9.03198Z"
                      fill="#333333"
                    />
                    <path
                      d="M127.274 9.04999L131.846 14H129.074L125.402 9.73399V14H123.35V0.679993H125.402V8.41999L129.002 4.08199H131.846L127.274 9.04999Z"
                      fill="#333333"
                    />
                    <path
                      d="M142.407 8.79798C142.407 9.16998 142.383 9.50598 142.335 9.80598H134.757C134.817 10.598 135.111 11.234 135.639 11.714C136.167 12.194 136.815 12.434 137.583 12.434C138.687 12.434 139.467 11.972 139.923 11.048H142.137C141.837 11.96 141.291 12.71 140.499 13.298C139.719 13.874 138.747 14.162 137.583 14.162C136.635 14.162 135.783 13.952 135.027 13.532C134.283 13.1 133.695 12.5 133.263 11.732C132.843 10.952 132.633 10.052 132.633 9.03198C132.633 8.01198 132.837 7.11798 133.245 6.34998C133.665 5.56998 134.247 4.96998 134.991 4.54998C135.747 4.12998 136.611 3.91998 137.583 3.91998C138.519 3.91998 139.353 4.12398 140.085 4.53198C140.817 4.93998 141.387 5.51598 141.795 6.25998C142.203 6.99198 142.407 7.83798 142.407 8.79798ZM140.265 8.14998C140.253 7.39398 139.983 6.78798 139.455 6.33198C138.927 5.87598 138.273 5.64798 137.493 5.64798C136.785 5.64798 136.179 5.87598 135.675 6.33198C135.171 6.77598 134.871 7.38198 134.775 8.14998H140.265Z"
                      fill="#333333"
                    />
                    <path
                      d="M146.478 5.52198C146.778 5.01798 147.174 4.62798 147.666 4.35198C148.17 4.06398 148.764 3.91998 149.448 3.91998V6.04398H148.926C148.122 6.04398 147.51 6.24798 147.09 6.65598C146.682 7.06398 146.478 7.77198 146.478 8.77998V14H144.426V4.08198H146.478V5.52198Z"
                      fill="#333333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_95_3">
                      <rect width="150" height="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              {/* <span onClick={() => update({ lang: "en-US" })}>En</span>
              <span onClick={() => update({ lang: "es-ES" })}>SP</span> */}
            </Typography>
            {/* </Link> */}
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "none", lg: "block" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    ml: 5,
                    color: "#333",
                    textTransform: "none",
                    fontWeight: "700",
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  <Link
                    to={
                      item === T("menu.browse")
                        ? lang + "/browse"
                        : item === T("menu.about")
                        ? lang + "/about"
                        : item === T("menu.news")
                        ? lang + "/news"
                        : item === T("menu.shipping")
                        ? lang + "/shippinginfo"
                        : lang + "/edit"
                    }
                    className="link-menu"
                  >
                    {item}
                  </Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "block", lg: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </div>
  );
};

export default TopMenuBar;
