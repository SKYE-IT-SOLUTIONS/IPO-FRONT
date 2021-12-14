import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { CustomButton } from "./CommonComponents";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import { Col } from "./CommonComponents";
import { useNavigate } from "react-router-dom";

const JobDiv = styled(Col)`
  &: hover {
    transform: scale(1.05);
    transition-delay: 100ms;
  };
  padding-top : 10px;
  display : flex;
`;

const Avatar = styled.div`
  height: 40px;
  width: 40px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 25px;
`;

const JobCardView = styled(Card)`
  width: 18rem;
  font-family: ${({ font }) => font.general};
  border-radius: 15px;
  background: #E0EAFC;
`;

const JobImg = styled.div`
  height: 150px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const JobTitle = styled(Card.Title)`
  font-family: ${({ font }) => font};
  font-size: 16px;
  padding-top: 5px;
  margin-bottom: 0px;
  min-height : 60px;
`;

const JobButton = styled(CustomButton)`
  margin: 0px 0px 10px 0px;
  font-size: 12px;
`;

const JobFooter = styled.span`
  font-size: 10px;
  position: absolute;
  bottom: 6px;
  left: 18px;
`;

function JobCard({ news }) {
  const { fonts } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <JobDiv md={4} sm={4} lg={3} xl={3} xxl={2} xs={10}>
      <JobCardView font={fonts}>
        <Card.Body>
          <Avatar image={news.logo} />
          <JobTitle font={fonts.title}>{news.title}</JobTitle>
        </Card.Body>
        <JobImg image={news.url} />
        <Card.Body>
          <JobButton apply onClick={()=>{navigate("/job/1")}}> Read </JobButton>
          <JobFooter> Last updated {news.time} ago </JobFooter>
        </Card.Body>
      </JobCardView>
    </JobDiv>
  );
}

export default JobCard;
