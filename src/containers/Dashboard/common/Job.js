/* eslint-disable no-unused-vars */
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import DataService from "../../../services/DataService";
import UnList from "./UnList";

const dataService = new DataService();

function Section({ title, list }) {
  return (
    <>
      <Divider textAlign="left" sx={{ my: 3 }}>
        <Typography variant="h7" gutterBottom>
          {title}
        </Typography>
      </Divider>
      <UnList list={list} />
    </>
  );
}

const Job = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [job, setJob] = useState({});

  useEffect(() => {
    setIsLoading(true);
    dataService.getJob(id).then(({ data, err }) => {
      if (data) {
        setJob(data);
      } else {
        console.log(err);
      }
      setIsLoading(false);
    });
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Typography variant="h4" component="div" gutterBottom>
        {job.title}
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        {job.position}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Rs.{job.salary}
      </Typography>
      <Typography variant="h6" color="error" gutterBottom>
        Deadline - {job.deadline}
      </Typography>
      <Typography variant="body2" gutterBottom>
        {job.description}
      </Typography>
      <Section title="Specifications" list={job.specifications} />
      <Section title="Qualifications" list={job.qualifications} />
      <Section title="Experience" list={job.experiences} />
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={() => {
            setIsLoading(true);
            dataService.applyJob(id).then(({ data, error }) => {
              setIsLoading(false);
              if (data) {
                alert("Successfully applied for this job");
              } else {
                alert(error);
              }
            });
          }}
        >
          Apply
        </Button>
      </Box>
    </Container>
  );
};

export default Job;
