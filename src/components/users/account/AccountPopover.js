import { useRef, useState } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// @mui
import { Box, Divider, Typography, Stack, MenuItem } from "@mui/material";
// components
import MenuPopover from "../../common/MenuPopover";
import AccountCircle from "@mui/icons-material/AccountCircle";
export default function AccountPopover() {
  const location = useLocation();
  const navigate = useNavigate();
  const anchorRef = useRef(null);

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const MENU_OPTIONS = [
    {
      label: "Home",
      icon: "eva:home-fill",
      linkTo: "/",
    },
    {
      label: "Profile",
      icon: "eva:person-fill",
      linkTo: "/" + location.pathname.split("/")[1] + "/profile",
    },
  ];

  return (
    <>
      <AccountCircle ref={anchorRef} onClick={handleOpen} />
      <MenuPopover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        sx={{
          p: 0,
          mt: 1.5,
          ml: 0.75,
          "& .MuiMenuItem-root": {
            typography: "body2",
            borderRadius: 0.75,
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {"B G B T B HALANGODA"}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
            {"SC/2018/10659"}/
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              to={option.linkTo}
              component={RouterLink}
              onClick={handleClose}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/logout");
          }}
          sx={{ m: 1 }}
        >
          Logout
        </MenuItem>
      </MenuPopover>
    </>
  );
}
