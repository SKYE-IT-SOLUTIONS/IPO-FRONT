import React, { useContext, useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { Container, Row, Col } from "./CommonComponents";
import { useParams } from "react-router-dom";
import DataService from "../services/DataService";
import Snackbar from "./CustomSnackBar";

const NewContainer = styled(Container)`
  font-family: ${({ font }) => font.general};
  padding: 20px 0;

  @media (max-width: 600px) {
    padding: 20px 20px;
  }
`;

const Title = styled.h2`
  text-align: justify;
  padding-bottom: 15px;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

const Content = styled.p`
  text-align: justify;
  padding-top: 20px;

  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const Date = styled.p`
  color: #001e62;
  font-family: ${({ font }) => font.title};
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

// const newsdata = {
//   title: " 7 Ways to Make Money While Waiting for Disability Benefits",
//   url: "https://images.unsplash.com/photo-1638727751809-2de7202d138a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   message: `If your headlines sound like they belong in the “bad” or “ugly” category, you can easily recover with a few tips. Great headlines give your content more visibility and help you rank better in search engines, so it pays to enhance your skill at writing them.
//     Start with the main idea of your article. Do you want to educate your audience? Entertain your readers? Inspire action?
//     Use adjectives and action verbs in your headline that appeal to your target audience or that serve the subject matter. Write three or four different headlines, then compare them. Why do you like one over the others?
//     The more you play with different headline formulas and constructions, the better you’ll get. As long as you keep your audience in mind, you’ll craft headlines that will encourage users to click on your article titles and read your content to the very end.`,
//     uploadTime : "2021 Nov 25"
// };

function NewsView({ dataFromProp }) {
  const dataService = new DataService();

  const { id } = useParams();

  const [newsData, setNewsData] = useState({
    title: "",
    url: "",
    description: [],
    uploadTime: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    setisLoading(true);
    const fetchNews = async () => {
      if (dataFromProp === null || dataFromProp === undefined) {
        console.log(id);
        const { status, data, error } = id
          ? await dataService.handleGetNews(id)
          : null;
        if (status) {
          setNewsData(data);
        } else {
          setError(error);
        }
      } else {
        setNewsData(dataFromProp);
      }
      setisLoading(false);
    };
    fetchNews();
  }, []);

  const { fonts } = useContext(ThemeContext);
  return (
    <NewContainer font={fonts}>
      {newsData && (
        <>
          {isLoading ? <h1>Loading</h1> : <h1>Done</h1>}
          <Row>
            <Col md={6} sm={12}>
              <Title>{newsData?.title}</Title>
            </Col>
            <Col md={6} sm={12}>
              <Image src={newsData?.url} thumbnail />
            </Col>
          </Row>
          <Row>
            <Col>
              {newsData?.description?.map((d) => {
                return (
                  <Content key={d.id} className="paragraph">
                    {d.content}
                  </Content>
                );
              })}
            </Col>
          </Row>{" "}
          <Date font={fonts}>
            {newsData.uploadTime !== ""
              ? `Last updated - ${newsData.uploadTime}`
              : ""}
          </Date>
        </>
      )}
    </NewContainer>
  );
}

export default NewsView;
