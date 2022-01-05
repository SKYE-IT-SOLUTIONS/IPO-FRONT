import React, { useContext } from "react";
import { Container, Row, Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import supun from "../assets/supun.jpg";
import nadun from "../assets/nadun.jpg";
import buddhika from "../assets/buddhika.jpeg";
import sandaruwan from "../assets/sandaruwan.jpg";

const OuterDiv = styled(Container)`
  font-family: ${({ font }) => font.general};
  text-align: center;
  padding: 20px 0;
`;

const InnerDiv = styled.div`
  border: 3px solid black;
  border-radius: 15px;
  background: #eef2f3;
  height: 100%;
  padding: 0 5px;
`;

const Column = styled(Col)`
  padding: 5px 5px;
`;

const RowDiv = styled(Row)`
  margin: 0;

  @media (max-width: 575px) {
    margin: 15px;
  }
`;

const LinkA = styled.a`
  color: inherit;
`;

const Title = styled.h1`
  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 26px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 25px;
  }
  @media (max-width: 575px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  padding: 10px 0;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 15px;
  }
  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 15px;
  }

  @media (max-width: 575px) {
    font-size: 14px;
  }
`;

const IconSet = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SocialIcon = styled(Icon)`
  font-size: 28px;
  margin: 0 5px;
  cursor: pointer;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 20px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 23px;
  }

  @media (max-width: 575px) {
    font-size: 22px;
  }
`;

const ApplyImage = styled.div`
  height: 180px;
  width: 180px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px auto;
  border-radius: 150px;

  @media (min-width: 769px) and (max-width: 1040px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    height: 130px;
    width: 130px;
  }

  @media (max-width: 575px) {
    height: 170px;
    width: 170px;
  }
`;

const Name = styled.h3`
  font-size: 20px;
  color: #001e62;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 13px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 17px;
  }

  @media (max-width: 575px) {
    font-size: 17px;
  }
`;

const Position = styled.p`
  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 11px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 15px;
  }

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const Description = styled.p`
  color: #696969;
  font-size: 15px;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 11px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 12px;
  }

  @media (max-width: 575px) {
    font-size: 12px;
  }
`;

const Proffesional = styled.p`
  font-size: 10px;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 7px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 9px;
  }

  @media (max-width: 575px) {
    font-size: 9px;
  }
`;

const Td = styled.td`
  text-align: left;
  padding-left: 20px;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 13px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 13px;
  }

  @media (max-width: 575px) {
    font-size: 13px;
  }
`;

const TableTitle = styled.p`
  color: #001e62;
  font-size: 18px;
  padding-top: 10px;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 13px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 15px;
  }

  @media (max-width: 575px) {
    font-size: 15px;
  }
`;

const DetailDiv = styled.div`
  margin: 10px 0;
  background: #eef2f3;
  width: 35%;
  border: 3px solid black;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: auto;

  @media (min-width: 769px) and (max-width: 1040px) {
    width: 45%;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    width: 65%;
  }

  @media (max-width: 575px) {
    width: 90%;
  }
`;

const team = [
  {
    name: "Supun Tharuka",
    position: "COO",
    description:
      "Effortlessly cool with a high degree of curiosity to achieve excellence.",
    image: supun,
    fb: "https://www.facebook.com/supun.tharuka.14",
    linkedin: "https://www.linkedin.com/in/supun-wijegunwardhana/",
    twitter: "https://twitter.com/Supun9749",
  },
  {
    name: "Buddhika Halangoda",
    position: "COO",
    description:
      "A constant. In a sea of variables. Will amaze you with the final product.",
    image: buddhika,
    fb: "https://www.facebook.com/buddhika.halangoda.3",
    linkedin: "https://www.linkedin.com/in/buddhika-halangoda-729043210/",
    twitter: "https://twitter.com/BuddhikaHalang1",
  },
  {
    name: "Nadun Nethsara",
    position: "COO",
    description:
      "With the aim of becoming Sri Lanka’s Top in High-Tech Solutions.",
    image: nadun,
    fb: "https://www.facebook.com/nadun.nethsara.9/",
    linkedin: "https://www.linkedin.com/in/nadun-nethsara-a81369195/",
    twitter: "https://twitter.com/NethsaraNadun",
  },
  {
    name: "Sandaruwan Lakshitha",
    position: "COO",
    description: "A software Engineer with Marketing skills at your service.",
    image: sandaruwan,
    fb: "https://www.facebook.com/sandaruwan.lakshitha.5",
    linkedin: "https://www.linkedin.com/in/sandaruwan-lakshitha-a18909187/",
    twitter: "https://twitter.com/Sandaruwanlaks5",
  },
];

function OurTeam() {
  const { fonts } = useContext(ThemeContext);
  return (
    <OuterDiv font={fonts}>
      <Title>Meet the Team</Title>
      <Subtitle>
        If you want the best solution possible for your company our certified
        professionals are here to help.
      </Subtitle>
      <RowDiv>
        {team.map((value, index) => (
          <Column md={3} sm={6} xs={12}>
            <InnerDiv>
              <ApplyImage image={value.image} />
              <Name>{value.name}</Name>
              <Position>{value.position}</Position>
              <Description>{value.description}</Description>
              <Proffesional>
                Bachelor of Computer Science(Ug)
                <br />
                University of Ruhuna
              </Proffesional>
              <IconSet>
                <LinkA href={value.fb} target="_blank">
                  <SocialIcon icon="bi:facebook" />
                </LinkA>

                <LinkA href={value.linkedin} target="_blank">
                  <SocialIcon icon="akar-icons:linkedin-fill" />
                </LinkA>
                <LinkA href={value.twitter} target="_blank">
                  <SocialIcon icon="akar-icons:twitter-fill" />
                </LinkA>
              </IconSet>
            </InnerDiv>
          </Column>
        ))}
      </RowDiv>

      <DetailDiv>
        <TableTitle>SKYE IT Solutions</TableTitle>
        <table style={{ margin: "auto", marginBottom: "15px" }}>
          <tbody>
            <tr>
              <Td>
                <Icon icon="eva:phone-call-fill" height="20" />
              </Td>
              <Td>+94767499316</Td>
            </tr>
            <tr>
              <Td>
                <Icon icon="clarity:email-solid" height="20" />
              </Td>
              <Td>skyeitsolutions@gmail.com</Td>
            </tr>
          </tbody>
        </table>
      </DetailDiv>
    </OuterDiv>
  );
}

export default OurTeam;
