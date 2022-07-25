import React, { useState } from "react"; //=================react===================
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  ListItem,
} from "@mui/material"; //==============Components==================================
import MenuIcon from "@mui/icons-material/Menu"; //============menuIcon=============
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";

//===============Drawer Component starting==========================================
//===============Drawer Component starting==========================================
const PAGES = [
  { title: "Home", to: "/" },
  { title: "About", to: "/about" },
  { title: "Services", to: "/services" },
  { title: "Contact Us", to: "/contactus" },
  { title: "Login", to: "/login" },
  { title: "Sign Up", to: "/signup" },
];
function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItemButton>
            <Box
              component="img"
              alt="Your logo."
              src={logo}
              sx={{
                width: 80,
                mt: { xs: 2, sm: 2 },
                ml: { xs: 2, sm: 2 },
                mb: 1,
              }}
            />
          </ListItemButton>
          {PAGES.map((page, index) => (
            <ListItemButton
              onClick={() => {
                setOpenDrawer(false);
                navigate(page.to);
              }}
              key={index}
              sx={{ width: 240 }}
            >
              <ListItemIcon>
                <ListItemText sx={{ ml: { xs: 2, sm: 2 } }}>
                  {page.title}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <ListItem>
            <ListItemText
              primary="Version 1.0 "
              primaryTypographyProps={{
                mt: 16,
                textAlign: "center",
              }}
            />
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        sx={{
          color: "primary",
          marginTop: 2,
        }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
    </div>
  );
}
//===============Drawer Component Ending==========================================
//===============Drawer Component Ending==========================================
export default DrawerComponent;
