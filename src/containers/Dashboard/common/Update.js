/* eslint-disable no-unused-vars */
import { Card, CardMedia, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../../components/Spinner";
import DataService from "../../../services/DataService";
import UnList from "./UnList";

const dataService = new DataService();

const Update = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState({});

  useEffect(() => {
    setIsLoading(true);
    dataService.getNews(id).then(({ data, error }) => {
      if (data) {
        setNews(data);
      } else {
        console.log(error);
      }
      setIsLoading(false);
    });
  }, [id]);

  return isLoading ? (
    <Spinner />
  ) : (
    <Container component="main" maxWidth="md" sx={{ my: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              image={news.url}
              sx={{ maxHeight: 400 }}
            />
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h4" component="div" my={3}>
        {news.title}
      </Typography>
      <UnList list={news.description} />
    </Container>
  );
};

export default Update;
