import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  return (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image="/static/avatar_3.png"
              sx={{ maxHeight: 400 }}
            />
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" component="div" mt={3}>
        this is just a title for update
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={1}>
        this is just a description for update
      </Typography>
    </Container>
  );
};

export default Update;
