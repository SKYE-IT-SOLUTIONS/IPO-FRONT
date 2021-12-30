import React ,{useContext} from 'react'
import styled from "styled-components";
import { Container, Row, Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";

const AchContainer = styled(Container)`
    font-family: ${({ font }) => font.general};
    padding-top: 20px;
    padding-bottom: 20px;
`

const ApplyImage = styled.div`
  height: 350px;
  width: 95%;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 300px;
    width: 95%;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    height: 300px;
  width: 100%;
  }

  @media (max-width: 576px) {
    height: 250px;
    width: 95%;
  }
`;

const Title = styled.h2`
  text-align: justify;
  font-size: 22px;

  @media (min-width: 601px) and (max-width: 1040px) {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    font-size: 18px;
    padding: 5px 10px;
  }
`;

const Content = styled.p`
  text-align: justify;
  font-size: 13px;

  @media (min-width: 601px) and (max-width: 1040px) {
    font-size: 12px;
  }
  
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const CustomRow = styled(Row)`
    padding-bottom: 10px;
`;

const data = 
    {
      id:1,
      title:
        "TEAM FALCON E REACHES TOP 20 IN VINUNIVERSITY GLOBAL CASE COMPETITION 2021",
      description:
        ["Team Falcon E, a group of students from the Department of Mechanical Engineering, representing the University of Moratuwa has emerged as one out of best 20 teams in VinUniversity Global Case Competition (VGCC) hosted by VinUniversity, Hanoi, Vietnam. The awards ceremony was held on 4th of December ",
    "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose"
    ],
      image:
        "https://images.unsplash.com/photo-1640697687394-d02650d7ecc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    }

export default function AchievementView() {
    const { fonts } = useContext(ThemeContext);

  return (
    <AchContainer font={fonts}> 
      {data &&
          <CustomRow>
            <Col md={6} sm={6} xs={12}>
              <ApplyImage image={data.image} />
            </Col>
            <Col md={6} sm={6} xs={12}>
              <Title>
                {data.title}
              </Title>
              <Content>
                {data?.description[0]}
              </Content>
              <Content>
                {data?.description[1]}
              </Content>
            </Col>
          </CustomRow>
       }
    </AchContainer>
  );
}
