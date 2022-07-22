import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";

const user = {
  avatar:
    "https://paravi.ruh.ac.lk/rumis/picture/user_pictures/student_std_pics/foagmis_pic/ag4744.jpg",
  index: "AG/AT/4744",
  name: "Monasha Charubhashi",
};

const handleChange = (e) => {
  const file = e.target.files[0];
  console.log(file);
  //todo: upload file to server
};

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
          variant="rounded"
          sx={{
            height: 100,
            mb: 2,
            width: "auto",
          }}
        />
        <Typography color="textPrimary" gutterBottom variant="h5">
          {user.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {user.index}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <CardActions sx={{ justifyContent: "center" }}>
      <input
        type="file"
        style={{ display: "none" }}
        id="raised-upload"
        accept="image/*"
        onChange={handleChange}
      />
      {/* <label htmlFor="raised-upload">
        <Button color="primary" fullWidth variant="text" component="span">
          Upload picture
        </Button>
      </label> */}
    </CardActions>
  </Card>
);
export default AccountProfile;
