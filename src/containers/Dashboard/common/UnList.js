import { Typography } from "@mui/material";

function Body({ key, text }) {
  return (
    <Typography key={key} variant="body2" color="text.secondary" gutterBottom>
      {text}
    </Typography>
  );
}

function UnList({ list }) {
  if (!list || list.length === 0) {
    return null;
  }
  return list.length === 1 ? (
    <Body text={list[0]} />
  ) : (
    <ul>
      {list.map((i, k) => (
        <li>
          <Body key={k} text={i} />
        </li>
      ))}
    </ul>
  );
}

export default UnList;
