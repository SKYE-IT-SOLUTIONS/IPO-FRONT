import React, { useContext } from "react";
import styled from "styled-components";
import { Container, Row, Col, CustomButton } from "./CommonComponents";
// import JobPhoto from "../assets/Joboffersbro.svg"
import JobPhoto from "../assets/JobApply.svg";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../contexts/ThemeContext";

const JobContainer = styled(Container)`
  /* display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center; */
  font-family: ${({ font }) => font.general};
  margin: 10px 0;
`;

const Logo = styled.div`
  background-image: url("https://images.unsplash.com/photo-1555596899-d634257b55bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
  background-position: center;
  background-repeat: no;
  background-size: cover;
  height: 55px;
  width: 55px;
  border-radius: 50px;
  border: 2px solid black;
`;

const Title = styled.h4`
  padding-bottom: 10px;
`

const ApplyImage = styled.div`
  height: 512px;
  width: 512px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Table = styled.table`
  margin: 25px auto;
`;

const Td = styled.td`
  padding: 0 10px;
`;

const SalaryDiv = styled.div`
  border: 2px solid black;
  width: 200px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Salary = styled.p`
  color: #003c70;
  margin-bottom: 0;
  padding-left: 10px;
  padding-top: 8px;
`;

const SalaryValue = styled.p`
  color: #ff0f0f;
  margin-top: 0;
  padding-left: 10px;
`;
const Date = styled.span`
  color:  #ff0f0f;
`;

const data = {
  title: "Sample Job Title xxx xxxx xxxxx xxxxx xxxxxx",
  position: "Software Engineer",
  description: `Try to think about paragraphs in terms of thematic unity: a paragraph is
  a sentence or a group of sentences that supports one central, unified
  idea. Paragraphs add one idea at a time to your broader argument.Try to
  think about paragraphs in terms of thematic unity: a paragraph is a
  sentence or a group of sentences that supports one central, unified
  idea. Paragraphs add one idea at a time to your broader argument.Try to
  think about paragraphs in terms of thematic unity: a paragraph is a
  sentence or a group of sentences that supports one central, unified
  idea. Paragraphs add one idea at a time to your broader argument.`,
  specifications: [
    "Applicant age should be with in range 25 - 35",
    "Area of residence : Negambo",
  ],
  qualifications: [
    "Requirement 1 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 2 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 3 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 4 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 5 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 6 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
  ],
  experience: [
    "Requirement 1 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 2 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 3 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 4 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 5 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
    "Requirement 6 xxxxx xxxxxx xxxxxx xxxxx xxxx xxxxxx xxxxxx",
  ],
  salary: 100000,
  date: "2021/12/10",
};

function PostJob() {
  const { fonts } = useContext(ThemeContext);
  return (
    <JobContainer font={fonts}>
      {data && (
        <>
          <Table>
            <tr>
              <Td>
                <Logo></Logo>
              </Td>
              <Td>
                <h2>{data.title}</h2>
              </Td>
            </tr>
          </Table>
          <Title>Job Position : {data.position}</Title>
          <p>{data.description}</p>
          <Row  style={{paddingTop :"15px"}}>
            <Col md={6}>
              <ApplyImage image={JobPhoto} />

              <SalaryDiv>
                <table>
                  <tr>
                    <td rowSpan={2}>
                      <Icon icon="emojione:money-bag" height="60" />
                    </td>
                    <td>
                      <Salary>Salary</Salary>
                      <SalaryValue>Rs.{data.salary}/=</SalaryValue>
                    </td>
                  </tr>
                </table>
              </SalaryDiv>
            </Col>
            <Col>
              {data.specifications && (
                <>
                  <h4>Specifications</h4>
                  <ul>
                    {data.specifications.map((value,index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </>
              )}

              {data.qualifications && (
                <>
                  <h4>Qualifications</h4>
                  <ul>
                    {data.qualifications.map((value,index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </>
              )}

              {data.experience && (
                <>
                  <h4>Experience</h4>
                  <ul>
                    {data.experience.map((value,index) => (
                      <li key={index}>{value}</li>
                    ))}
                  </ul>
                </>
              )}
            </Col>
          </Row>
          <div style={{ textAlign: "right" }}>
            <CustomButton apply>Apply</CustomButton>
          </div>
          <h6>
            Application Deadline : <Date>{data.date}</Date>
          </h6>
        </>
      )}
    </JobContainer>
  );
}

export default PostJob;
