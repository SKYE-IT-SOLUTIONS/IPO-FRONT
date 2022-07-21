import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Job() {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          position
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Salary - Rs.10000
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="error">
              Deadline - 2020-05-14
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="right">
            <Button size="small" onClick={() => navigate("1")}>
              View more
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const Jobs = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Job />
        </Grid>
        <Grid item xs={12}>
          <Job />
        </Grid>
        <Grid item xs={12}>
          <Job />
        </Grid>
        <Grid item xs={12}>
          <Job />
        </Grid>
        <Grid item xs={12}>
          <Job />
        </Grid>
        <Grid item xs={12}>
          <Job />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Jobs;
