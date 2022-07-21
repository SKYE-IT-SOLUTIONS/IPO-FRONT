import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Update({
  id = 1,
  title = "title dfghdghd dfhd fhdfhdfh dfh dfhdfh dfhdfh dfhd dh hd fhdf hdfh dfh dfhdf d dfhdhd",
  description = "description",
  image = "/static/avatar_3.png",
}) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate(String(id))}
        >
          View more
        </Button>
      </CardActions>
    </Card>
  );
}

const Updates = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Update />
        </Grid>
        <Grid item xs={4}>
          <Update />
        </Grid>
        <Grid item xs={4}>
          <Update title="dssdgd" />
        </Grid>
        <Grid item xs={4}>
          <Update />
        </Grid>
        <Grid item xs={4}>
          <Update />
        </Grid>
        <Grid item xs={4}>
          <Update />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Updates;
