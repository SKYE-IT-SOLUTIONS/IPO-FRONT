import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import DataService from "../../../services/DataService";

function Job({ job }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {job.position}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Salary - Rs.{job.salary}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="error">
              Deadline - {job.deadline}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="right">
            <Button size="small" onClick={() => navigate(String(job.id))}>
              View more
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

const dataService = new DataService();

const Jobs = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    dataService.getAllJobs().then(({ data, error }) => {
      if (data) {
        setJobs(data);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Grid container spacing={3}>
        {jobs.map((job) => (
          <Grid item xs={12} key={job.id}>
            <Job job={job} />
          </Grid>
        )) || <Typography>No jobs available</Typography>}
      </Grid>
    </Container>
  );
};

export default Jobs;
