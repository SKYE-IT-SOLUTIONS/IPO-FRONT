import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar: "/static/avatar_3.png",
  role: "Student",
  name: "Supun Tharuka",
};

const handleChange=(e) => {
  const file = e.target.files[0];
  console.log(file);
  //todo: upload file to server
}

const AccountProfile = (props) => (
  <Card {...props}>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Avatar
          id="avatar-user"
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64,
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.role}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions sx={{justifyContent:"center"}}>
    <input type="file" style={{ display: "none" }} id="raised-upload" accept="image/*" onChange={handleChange}/>
      <label htmlFor="raised-upload">
        <Button color="primary" fullWidth variant="text" component="span">
          Upload picture
        </Button>
      </label>
    </CardActions>
  </Card>
);
export default AccountProfile;
