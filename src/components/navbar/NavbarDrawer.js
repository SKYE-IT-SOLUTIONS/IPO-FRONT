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
import logo from "../../assets/logo.png";

//===============Drawer Component starting==========================================
//===============Drawer Component starting==========================================
const PAGES = ["Home", "About", "Services", "Contact Us", "Login", "Sign Up"];
function Drawercomp() {
  const [openDrawer, setOpenDrawer] = useState(false);
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
              onClick={() => setOpenDrawer(false)}
              key={index}
              sx={{ width: 240 }}
            >
              <ListItemIcon>
                <ListItemText sx={{ ml: { xs: 2, sm: 2 } }}>
                  {page}
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
export default Drawercomp;
