import React, { useContext, useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { Container, Row, Col } from "./CommonComponents";
import { useParams } from "react-router-dom";
import DataService from "../services/DataService";
import Snackbar from "./CustomSnackBar";
import { useSelector } from "react-redux";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";

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

function NewsView() {
  const dataService = new DataService();
  const navigate = useNavigate();

  const { id } = useParams();

  const [newsData, setNewsData] = useState({
    title: "",
    url: "",
    description: [],
    uploadTime: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const storeTitle = useSelector((state) => state.news.title);
  const storeImage = useSelector((state) => state.news.image);
  const storeDescription = useSelector((state) => state.news.description);

  useEffect(() => {
    setisLoading(true);
    const fetchNews = async () => {
      if (id !== undefined && id !== null) {
        console.log("Databse Call");
        console.log(id);
        const { status, data, error } = id
          ? await dataService.handleGetNews(id)
          : null;
        if (status) {
          setNewsData(data);
        } else {
          setError(error);
          navigate("/404");
        }
      } else {
        setNewsData({
          title: storeTitle,
          url: storeImage,
          description: storeDescription,
          uploadTime: "Not Uploaded Yet",
        });
      }
      setisLoading(false);
    };
    fetchNews();
  }, []);

  const { fonts } = useContext(ThemeContext);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <NewContainer font={fonts}>
          {newsData && (
            <>
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
                  {newsData?.description?.map((d, index) => {
                    return (
                      <Content key={index} className="paragraph">
                        {d}
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
      )}
    </>
  );
}

export default NewsView;
