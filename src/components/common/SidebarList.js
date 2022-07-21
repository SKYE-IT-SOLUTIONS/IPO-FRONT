// import Divider from "@mui/material/Divider";
import List from "@mui/material/List";

import { useNavigate, useLocation } from "react-router-dom";

import ListItem from "./ListItem";

export default function SidebarList({ items, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <List>
        {items.map((item, id) => (
          <ListItem
            key={id}
            location={location}
            navigate={navigate}
            onClose={onClose}
            path={item.path}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </List>
    </>
  );
}
