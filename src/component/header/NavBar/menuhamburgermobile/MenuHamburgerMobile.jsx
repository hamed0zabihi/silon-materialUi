import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import HomeIcon from "@material-ui/icons/Home";

const MenuHamburgerMobile = ({
  mobileMenuId,
  isMobileMenuOpen,
  handleMobileMenuClose,
  mobileMoreAnchorEl,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileSubMenuHomeAnchorEl, setMobileSubMenuHomeAnchorEl] =
    React.useState(null);

  //check sub menu is open or not
  const isMenuOpen = Boolean(anchorEl);
  const isMobileSubMenuHomeOpen = Boolean(mobileSubMenuHomeAnchorEl);

  // open/close profile sub menu  in hamburger menu
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  // open/close home sub menu  in hamburger menu
  const handleHomeSubMenuOpen = (event) => {
    setMobileSubMenuHomeAnchorEl(event.currentTarget);
  };
  const handleHomeSubMenuClose = () => {
    setMobileSubMenuHomeAnchorEl(null);
    handleMobileMenuClose();
  };

  //subMenuProfile
  const menuId = "primary-search-account-menu";
  const renderChildMenuForProfileone = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "center", horizontal: "left" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "center", horizontal: "right" }}
      open={isMenuOpen && isMobileMenuOpen}
      onClose={handleProfileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleProfileMenuClose}>My account</MenuItem>
    </Menu>
  );

  //subMenuHome
  const menuIdForSubHome = "sub-menu-home-hamburger";
  const renderChildMenuForHome = (
    <Menu
      getContentAnchorEl={null}
      anchorEl={mobileSubMenuHomeAnchorEl}
      anchorOrigin={{ vertical: "center", horizontal: "left" }}
      id={menuIdForSubHome}
      keepMounted
      transformOrigin={{ vertical: "center", horizontal: "right" }}
      open={isMobileSubMenuHomeOpen && isMobileMenuOpen}
      onClose={handleHomeSubMenuClose}
    >
      <MenuItem onClick={handleHomeSubMenuClose}>Home</MenuItem>
      <MenuItem onClick={handleHomeSubMenuClose}>About</MenuItem>
      <MenuItem onClick={handleHomeSubMenuClose}>Services</MenuItem>
      <MenuItem onClick={handleHomeSubMenuClose}>Project</MenuItem>
      <MenuItem onClick={handleHomeSubMenuClose}>Blog</MenuItem>
      <MenuItem onClick={handleHomeSubMenuClose}>Contact</MenuItem>
    </Menu>
  );

  return (
    <>
      <Menu
        getContentAnchorEl={null}
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem>
        <MenuItem>
          <IconButton aria-label="show 11 new notifications" color="inherit">
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
        <MenuItem onClick={handleHomeSubMenuOpen}>
          <IconButton
            aria-label="sub menu home hamburger"
            aria-controls="sub-menu-home-hamburger"
            aria-haspopup="true"
            color="inherit"
          >
            <HomeIcon />
          </IconButton>
          <p>Home</p>
        </MenuItem>
      </Menu>
      {renderChildMenuForProfileone}
      {renderChildMenuForHome}
    </>
  );
};

export default MenuHamburgerMobile;
