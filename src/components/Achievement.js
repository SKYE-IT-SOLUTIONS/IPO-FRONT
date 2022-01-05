import React,{useContext} from "react";
import styled from "styled-components";
import { Container, Row, Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import {sliceParagraph} from '../utils/sliceParagraph'
import { useNavigate } from "react-router-dom";

const AchContainer = styled(Container)`
    font-family: ${({ font }) => font.general};
    padding-top: 10px;
    padding-bottom: 20px;
`

const ApplyImage = styled.div`
  height: 150px;
  /* width: 250px; */
  width: 95%;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 150px;
    width: 250px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    height: 200px;
    width: 250px;
  }

  @media (max-width: 576px) {
    height: 200px;
    width: 95%;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 30px;
  padding: 5px 12px;

  @media (min-width: 601px) and (max-width: 1040px) {
    font-size: 25px;
  }

  @media (max-width: 600px) {
    font-size: 25px;
  }
`;

const Title = styled.h2`
  text-align: justify;
  /* padding-bottom: 15px; */
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
  /* padding-top: 20px; */
  font-size: 13px;

  @media (min-width: 601px) and (max-width: 1040px) {
    font-size: 12px;
  }
  
  @media (max-width: 600px) {
    font-size: 13px;
    padding: 5px 10px;
  }
`;

const Read = styled.span`
    cursor: pointer;
    color:red;
`

const CustomRow = styled(Row)`
    padding-bottom: 10px;
`

const data = [
  {
    id:1,
    title:
      "TEAM FALCON E REACHES TOP 20 IN VINUNIVERSITY GLOBAL CASE COMPETITION 2021",
    description:
      "Team Falcon E, a group of students from the Department of Mechanical Engineering, representing the University of Moratuwa has emerged as one out of best 20 teams in VinUniversity Global Case Competition (VGCC) hosted by VinUniversity, Hanoi, Vietnam. The awards ceremony was held on 4th of December ",
    image:
      "https://images.unsplash.com/photo-1640697687394-d02650d7ecc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id:2,
    title:
      "TEAM FALCON E REACHES TOP 20 IN VINUNIVERSITY GLOBAL CASE COMPETITION 2021",
    description:
      "Team Falcon E, a group of students from the Department of Mechanical Engineering, representing the University of Moratuwa has emerged as one out of best 20 teams in VinUniversity Global Case Competition (VGCC) hosted by VinUniversity, Hanoi, Vietnam. The awards ceremony was held on 4th of December ",
    image:
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
  },
  {
    id:3,
    title:
      "TEAM FALCON E REACHES TOP 20 IN VINUNIVERSITY GLOBAL CASE COMPETITION 2021",
    description:
      "Team Falcon E, a group of students from the Department of Mechanical Engineering, representing the University of Moratuwa has emerged as one out of best 20 teams in VinUniversity Global Case Competition (VGCC) hosted by VinUniversity, Hanoi, Vietnam. The awards ceremony was held on 4th of December ",
    image:
      "https://images.unsplash.com/photo-1640590890297-64fd796496f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
];

function Achievement() {
    const { fonts } = useContext(ThemeContext);
    const navigate = useNavigate();
    const characters = 200

  return (
    <AchContainer font={fonts}> 
        <Heading>ACHIEVEMENTS</Heading>
      {data &&
        data.map((value, index) => (
            <>
            <hr style={{height:"2px"}}></hr>
          <CustomRow>
            <Col md={5} sm={6} xs={12}>
              <ApplyImage image={value.image} />
            </Col>
            <Col md={7} sm={6} xs={12}>
              <Title>
                {value.title}
              </Title>
              <Content>
                {value?.description?.length > characters
                    ? sliceParagraph(value.description,characters)
                    : value.description
                }
                <Read onClick={() => {
                        navigate(`/achievement/${value.id}`)
                    }}> Read more</Read>
              </Content>
            </Col>
          </CustomRow>
          
          </>
        ))}
    </AchContainer>
  );
}

export default Achievement;
