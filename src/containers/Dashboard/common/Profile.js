import { Box, Container, Grid, Typography } from "@mui/material";
import AccountProfile from "../../../components/users/account/AccountProfile";
import { PasswordChange } from "../../../components/users/account/PasswordChange";
import ProfileDetails from "../../../components/users/account/ProfileDetails";

const Profile = () => (
  <>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ mb: 3 }} variant="h4">
          Profile
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} xs={12}>
            <AccountProfile />
          </Grid>
          <Grid item lg={8} md={6} xs={12}>
            <ProfileDetails />
          </Grid>
          <Grid item xs={12}>
            <PasswordChange />
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Profile;
