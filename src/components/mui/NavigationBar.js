import React from "react";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreIcon from "@mui/icons-material/MoreVert";
import { logo } from "../CommonComponents";

import Drawer from "./Drawer";
import { Outlet, useNavigate } from "react-router-dom";
// import FooterContent from "../Footer";

export default function SidebarLayout({ title, sideBarItems }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const navigate = useNavigate();
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    handleMobileMenuClose();
  };

  const handleNotification = () => {
    handleMenuClose();
  };

  const handleProfile = () => {
    navigate("profile");
    handleMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleNotification}>
        <IconButton size="large" color="inherit">
          <Badge badgeContent={6} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfile}>
        <IconButton size="large" color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          backgroundImage: "linear-gradient(to right, #000428, #004e92)",
          boxShadow: "none",
          zIndex: (t) => t.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {sideBarItems && (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Box sx={{ height: "40px", width: "30px",mr:1,display: { xs: "none",sm:"block" } }} component="img" src={logo} />
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: 20,
              fontWeight: 700,
              cursor: "pointer",
              display: { xs: "none",sm:"block" } 
            }}
            onClick={() => navigate("/")}
          >
            Industrial PLacement Office - {title}
          </Typography>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontSize: 20,
              fontWeight: 700,
              cursor: "pointer",
              display: { sm: "none" } 
            }}
            onClick={() => navigate("/")}
          >
            IPO - {title}
          </Typography>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "right",
            }}
          >
            <IconButton
              size="large"
              color="inherit"
              onClick={handleNotification}
            >
              <Badge badgeContent={6} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              onClick={handleProfile}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "right",
            }}
          >
            <IconButton
              size="large"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {sideBarItems && (
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          items={sideBarItems}
        />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: 1, sm: 0 },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 1 }}>
          <Outlet />
        </Box>
        {/* <FooterContent /> */}
      </Box>
    </Box>
  );
}
