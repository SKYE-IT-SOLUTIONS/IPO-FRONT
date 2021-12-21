import React, { useEffect, useState } from "react";
import { Container } from "../components/CommonComponents";
import NewsCard from "../components/NewsCard";
import Pagination from "../components/Pagination";
import DataService from "../services/DataService";
import Spinner from "../components/Spinner";

function NewsList() {
  const [isLoading, setIsLoading] = useState(false);

  const dataService = new DataService();

  const [newsList, setNewsList] = useState([]);
  // const [newsLoaded, setNewsLoaded] = useState(false)
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } = await dataService.handleGetGlobalNews();
      if (status) {
        setNewsList(data);
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    // fetchNews();

    // const fetchNews = async () => {//this is temporary for demostrate
    //   await fetch(" http://localhost:3005/news").then(res => res.json()).then(data => {
    //     console.log(data)
    //     setNewsList(data)
    //     // setNewsLoaded(true)
    //   }).catch(e=>console.log(e));
    // };
    fetchNews();
    
  }, []);
  console.log("error", error);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        newsList.length >= 1 && (
          <Container fluid>
            <Pagination
              data={newsList}
              RenderComponent={NewsCard}
              title="Posts"
              pageLimit={1}
              dataLimit={6}
            />
          </Container>
        )
      )}
    </>
  );
}

export default NewsList;
