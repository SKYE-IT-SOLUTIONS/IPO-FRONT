import Toolbar from "@mui/material/Toolbar";
import BaseDrawer from "@mui/material/Drawer";

import SidebarList from "../common/SidebarList";
import { Box } from "@mui/material";

const drawerWidth = 240;

export default function Drawer({ open, onClose, items }) {
  const drawer = (
    <Box
      style={{
        backgroundImage: "linear-gradient(to bottom, #000428, #004e92)",
        height: "100%",
        color: "white",
        p: 1,
      }}
    >
      <Toolbar />
      <SidebarList items={items} onClose={onClose} />
    </Box>
  );

  return (
    <>
      <BaseDrawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          width: drawerWidth,
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </BaseDrawer>
      <BaseDrawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRightWidth: 1,
          },
        }}
        open
      >
        {drawer}
      </BaseDrawer>
    </>
  );
}
