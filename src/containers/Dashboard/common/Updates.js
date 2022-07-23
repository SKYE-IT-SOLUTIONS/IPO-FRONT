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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../components/common/Spinner";
import DataService from "../../../services/DataService";

function Update({ news }) {
  const navigate = useNavigate();
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="140" image={news.url} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {news.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {news.description?.[0]} ...
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => navigate(String(news.id))}
        >
          View more
        </Button>
      </CardActions>
    </Card>
  );
}

const dataService = new DataService();

const Updates = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    dataService.getAllNewsByUser().then(({ data, error }) => {
      if (data) {
        setNews(data);
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
        {news.map((news) => (
          <Grid item xs={4} key={news.id}>
            <Update news={news} />
          </Grid>
        )) || <Typography>No updates yet!</Typography>}
      </Grid>
    </Container>
  );
};

export default Updates;
