import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MenuHamburgerMobile from "../menuhamburgermobile/MenuHamburgerMobile";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Logo from "../Logo/Logo";
import { Container, Link, List, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    margin: "auto",
    padding: "auto 35px",
  },

  menuButton: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2),
      display: "none",
    },
  },

  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      marginTop: theme.spacing(3),
      width: "auto",
    },
  },

  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  inputRoot: {
    color: "#000",
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },

  sectionDesktop: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },

  menumain: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      color: "#000",
    },
  },

  toolbarWrapper: {
    "& .MuiToolbar-gutters": {
      paddingLeft: 0,
      paddingRight: 0,
    },
  },

  blackColor: {
    color: "#000",
  },

  linkAnchorDesktopMenu: {
    display: "block",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "0.8",
    color: "#000",
    texttransform: "uppercase",
    padding: "40px 15px",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  //check hamburger menu isOpen
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // open/close hamburger menu
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // for search input
  const [showSearchInput, setshowSearchInput] = useState(false);
  // renderChildMenuForProfile

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Toolbar disableGutters={true}>
            <Logo />
            <div className={classes.grow} />
            <div>
              <List className={classes.menumain}>
                <ListItem
                  button
                  component={Link}
                  to="/home"
                  className={classes.linkAnchorDesktopMenu}
                >
                  HOME
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/home"
                  className={classes.linkAnchorDesktopMenu}
                >
                  ABOUT
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/home"
                  className={classes.linkAnchorDesktopMenu}
                >
                  SERVICES
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/home"
                  className={classes.linkAnchorDesktopMenu}
                >
                  PROJECTS
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/home"
                  className={classes.linkAnchorDesktopMenu}
                >
                  BLOG
                </ListItem>
                <ListItem
                  button
                  component={Link}
                  to="/home"
                  className={classes.linkAnchorDesktopMenu}
                >
                  CONTACT
                </ListItem>
              </List>
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton
                aria-label="show 4 new mails"
                onClick={() => setshowSearchInput((prev) => !prev)}
              >
                <YoutubeSearchedForIcon className={classes.blackColor} />
              </IconButton>
              <IconButton aria-label="show 4 new mails">
                <ShoppingCartOutlinedIcon className={classes.blackColor} />
              </IconButton>
              <IconButton aria-label="show 09 new mails">
                <Badge badgeContent={9} color="secondary">
                  <FavoriteBorderIcon className={classes.blackColor} />
                </Badge>
              </IconButton>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls="menu personal"
                aria-haspopup="true"
              >
                <PersonOutlineOutlinedIcon className={classes.blackColor} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon className={classes.blackColor} />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <MenuHamburgerMobile
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
      />

      {showSearchInput && (
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon style={{ color: "#000" }} />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      )}
    </div>
  );
}
