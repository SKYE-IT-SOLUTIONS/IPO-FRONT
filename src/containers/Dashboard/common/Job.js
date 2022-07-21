import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Job = () => {
  const { id } = useParams();
  return (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Typography variant="h4" component="div" gutterBottom>
        job title
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        position
      </Typography>
      <Typography variant="body1" gutterBottom>
        Rs.10000
      </Typography>
      <Typography variant="h6" color="error" gutterBottom>
        Deadline - 2020-01-01
      </Typography>
      <Typography variant="body2" gutterBottom>
        description gdg rge gergergergerg er gerge rge gr er. lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </Typography>
      <Divider textAlign="left" sx={{ mt: 3 }}>
        <Typography variant="h7" gutterBottom>
          Specifications
        </Typography>
      </Divider>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        gdg rge gergergergerg er gerge rge gr er. lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Typography>
      <Divider textAlign="left" sx={{ mt: 3 }}>
        <Typography variant="h7" gutterBottom>
          Qualifications
        </Typography>
      </Divider>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        gdg rge gergergergerg er gerge rge gr er. lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Typography>
      <Divider textAlign="left" sx={{ mt: 3 }}>
        <Typography variant="h7" gutterBottom>
          Experience
        </Typography>
      </Divider>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        gdg rge gergergergerg er gerge rge gr er. lorem ipsum dolor sit amet,
        consectetur adipiscing elit.
      </Typography>
      <Box sx={{ textAlign: "right" }}>
        <Button variant="contained" sx={{ mt: 3 }}>
          Apply
        </Button>
      </Box>
    </Container>
  );
};

export default Job;
