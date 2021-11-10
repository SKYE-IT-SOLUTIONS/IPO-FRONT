import React from "react";
import { Container, Row } from "./CommonComponents";
import NewsCard from "./NewsCard";

function NewsList() {
  const news1 = {
    title: "Eminem Terrified As Daughteraaaaaaaaaa Begins Dating Man Raised On His Music Raised On His Mu",
    content:
      "Triller, a budding competitor to popular short - video app TikTok, is in discussions with blank - check acquisition companies about a merger which would take the US social media ompanies about a merger which would take the US social media.",
    time: "4 min",
    url : "https://images.unsplash.com/photo-1636061455170-32ec066453f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
  };

  const news2 = {
    title: "Eminem Terrified As Daughter Begins Dating Man Raised On His Music ",
    content:
      "Triller, a budding competitor to popular short - video app TikTok.",
    time: "4 min",
    url : "https://images.unsplash.com/photo-1636013605963-e64b6d7ba716?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=392&q=80"
  };

  return (
    <Container fluid>
      <Row>
        <NewsCard news={news1}/>
        <NewsCard news={news2}/>
        <NewsCard news={news1}/>
        <NewsCard news={news2}/>
        <NewsCard news={news1}/>
        <NewsCard news={news2}/>
      </Row>
    </Container>
  );
}

export default NewsList;
