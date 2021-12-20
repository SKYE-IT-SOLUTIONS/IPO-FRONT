import React, { useEffect, useState } from "react";
import { Container, Row } from "../components/CommonComponents";
import DataService from "../services/DataService";
import { useNavigate } from "react-router-dom";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";

function NewsCollection() {
  const dataService = new DataService();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } = await dataService.handleGetGlobalNews();
      if (status) {
        setNewsData(data);
      } else {
          setError(error);
        //   navigate("/404");
      }
      setIsLoading(false);
    };
    fetchNews();
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container fluid>
          <Row>
            {newsData &&
              newsData.map((news, index) => (
                <NewsCard key={index} news={news} />
              ))}
          </Row>
        </Container>
      )}
    </>
  );
}

export default NewsCollection;
