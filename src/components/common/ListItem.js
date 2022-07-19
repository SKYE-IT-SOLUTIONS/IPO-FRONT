import { Typography } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";

export default function AListItem({ location, navigate, path, icon, text }) {
   return (
      <ListItem
         disablePadding
         selected={location.pathname.startsWith(path) ? true : false}
         onClick={() => navigate(path)}
      >
         <ListItemButton>
            <ListItemIcon
               sx={{
                  minWidth: 45,
                  color:"white"
               }}
            >
               {icon}
            </ListItemIcon>
            <Typography sx={{fontWeight:700}}>{text}</Typography>
         </ListItemButton>
      </ListItem>
   );
}
