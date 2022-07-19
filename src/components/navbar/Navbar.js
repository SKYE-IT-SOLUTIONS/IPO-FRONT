import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import Drawercomp from "./NavbarDrawer";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const PAGES = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Services", url: "/services" },
  { title: "Contact Us", url: "/contactus" },
];

//===============Nav bar=========================================
const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "fixed",
        zIndex: 10,
      }}
    >
      <AppBar
        elevation={0}
        sx={{
          background: "transparent",
        }}
      >
        <Toolbar sx={{ marginTop: { lg: 3, md: 2 } }}>
          {/* <Box
            component="img"
            alt="Your logo."
            src={logo}
            sx={{
              marginLeft: { lg: 5, md: 2 },
              display: { xs: "none", sm: "none", lg: "block", md: "block" },
              width: { lg: 80, md: 70 },
            }}
          /> */}
          {/* =====Logo ====== */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Nunito",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <lord-icon
              src="https://cdn.lordicon.com/fihkmkwt.json"
              trigger="loop-on-hover"
              colors="primary:#ffffff,secondary:#1663c7"
              state="loop-spin"
              style={{
                width: "65px",
                height: "65px",
                marginTop: "-10px",
                marginRight: "-55px",
              }}
            />
            <Box
              component="img"
              alt="Your logo."
              src={logo}
              sx={{
                marginTop: { lg: 0.5, md: 0.5 },
                marginLeft: { lg: 1, md: 1 },
                display: { xs: "none", sm: "none", lg: "block", md: "block" },
                width: { lg: 40, md: 70 },
                height: { lg: 60, md: 50 },
              }}
            />
          </Typography>
          {/* =====Logo ending====== */}

          {isMatch ? (
            <>
              <Drawercomp />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor="primary"
                sx={{
                  marginLeft: "auto",
                }}
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page.title}
                    sx={{
                      fontSize: { lg: 18, md: 15 },
                      color: "#06173B",
                    }}
                    onClick={() => {
                      navigate(page.url);
                    }}
                  />
                ))}
              </Tabs>
              <Button
                sx={{
                  marginLeft: "auto",
                  width: { lg: 120 },
                  height: { lg: 45 },
                  backgroundColor: "warning.main",
                  color: "neutral.800",
                  borderRadius: 10,
                  "&:hover":  {
                    color: "warning.main",
                  }
                }}  
                variant="contained"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Log In
              </Button>
              <Button
                onClick={() => {
                  navigate("/signup");
                }}
                sx={{
                  margin: "10px",
                  width: { lg: 120 },
                  height: { lg: 45 },
                  color: "warning.main",
                  borderRadius: 10,
                  "&:hover": {
                    backgroundColor: "warning.main",
                    color: "neutral.800",
                  }
                }}
                variant="contained"
              >
                Sign Up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
