import React, { useState } from "react";
import { alpha, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import IconMenu from "../IconMenu/IconMenu";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Logo from "../Logo/Logo";
import { Link, List, ListItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
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
    display: "none",
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
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // for search input
  const [showSearchInput, setshowSearchInput] = useState(false);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <div className={classes.grow} style={{ marginRight: "auto" }}>
      <AppBar position="static" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <Logo />
          <div className={classes.grow} />
          <div>
            <List className={classes.menumain}>
              <ListItem button component={Link} to="/home">
                HOME
              </ListItem>
              <ListItem button component={Link} to="/home">
                ABOUT
              </ListItem>
              <ListItem button component={Link} to="/home">
                SERVICES
              </ListItem>
              <ListItem button component={Link} to="/home">
                PROJECTS
              </ListItem>
              <ListItem button component={Link} to="/home">
                BLOG
              </ListItem>
              <ListItem button component={Link} to="/home">
                CONTACT
              </ListItem>
            </List>
          </div>
          <div className={classes.grow} />

          <div className={classes.sectionDesktop}>
            <IconButton
              aria-label="show 4 new mails"
              color="#000"
              onClick={() => setshowSearchInput((prev) => !prev)}
            >
              <YoutubeSearchedForIcon style={{ color: "#000" }} />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="#000">
              <ShoppingCartOutlinedIcon style={{ color: "#000" }} />
            </IconButton>
            <IconButton aria-label="show 09 new mails" color="#000">
              <Badge badgeContent={9} color="secondary">
                <FavoriteBorderIcon style={{ color: "#000" }} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="#000"
            >
              <PersonOutlineOutlinedIcon style={{ color: "#000" }} />
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
              <MenuIcon style={{ color: "#000" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <IconMenu
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />
      {renderMenu}
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
