import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Row, Col, CustomButton } from "./CommonComponents";
// import JobPhoto from "../assets/Joboffersbro.svg"
import JobPhoto from "../assets/JobApply.svg";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useParams } from "react-router-dom";
import DataService from "../services/DataService";
import { useNavigate } from "react-router-dom";

const JobContainer = styled(Container)`
  /* display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center; */
  font-family: ${({ font }) => font.general};
  padding: 0 20px;

  @media (max-width: 600px) {
    padding: 10px 20px;
  }
`;

const RequirementTitle = styled.h4`
  padding-top: 10px;
  @media (max-width: 1040px) {
    font-size: 18px;
  }
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

const MainTitle = styled.h2`
  @media (max-width: 1040px) {
    font-size: 25px;
  }
`;

const Title = styled.h4`
  padding-bottom: 10px;

  @media (max-width: 1040px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  text-align: justify;

  @media (max-width: 1040px) {
    font-size: 15px;
  }
`;

const ApplyImage = styled.div`
  height: 512px;
  width: 512px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;

  @media (min-width: 768px) and (max-width: 1040px) {
    height: 360px;
    width: 360px;
  }

  @media (max-width: 768px) {
    height: 360px;
    width: 360px;
  }
`;

const Table = styled.table`
  margin: 25px auto;
`;

const Td = styled.th`
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

  @media (min-width: 768px) and (max-width: 1040px) {
    font-size: 14px;
  }
`;

const SalaryValue = styled.p`
  color: #ff0f0f;
  margin-top: 0;
  padding-left: 10px;

  @media (max-width: 1040px) {
    font-size: 13px;
  }
`;
const Date = styled.span`
  color: #ff0f0f;
`;

const List = styled.li`
  font-size: 15px;
`;

const Deadline = styled.h6`
  @media (max-width: 1040px) {
    font-size: 15px;
  }
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

function PostJob({ dataFromProp }) {
  const navigate = useNavigate();

  const dataService = new DataService();

  const { id } = useParams();

  const [jobData, setJobData] = useState({
    id: "",
    title: "",
    position: "",
    description: "",
    specifications: [],
    qualifications: [],
    experience: [],
    salary: "",
    date: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    setisLoading(true);
    const fetchJob = async () => {
      if (dataFromProp === null || dataFromProp === undefined) {
        console.log(id);
        const { status, data, error } = id
          ? await dataService.handleGetJob(id)
          : null;
        if (status) {
          setJobData(data);
        } else {
          setError(error);
          navigate("/404");
        }
      } else {
        setJobData(dataFromProp);
      }
      setisLoading(false);
    };
    fetchJob();
  }, []);

  const { fonts } = useContext(ThemeContext);
  return (
    <JobContainer font={fonts}>
      {isLoading ? <h1>Loading</h1> : <h1>Done</h1>}
      {jobData && (
        <>
          <Table>
            <tbody>
              <tr>
                <Td>
                  <Logo></Logo>
                </Td>
                <Td>
                  <MainTitle>{jobData?.title}</MainTitle>
                </Td>
              </tr>
            </tbody>
          </Table>
          <Title>Job Position : {jobData?.position}</Title>
          <Description>{jobData?.description}</Description>
          <Row style={{ paddingTop: "15px" }}>
            <Col md={6} sm={12}>
              <ApplyImage image={JobPhoto} />
              {jobData?.salary && (
                <>
                  <SalaryDiv>
                    <table>
                      <tbody>
                        <tr>
                          <td rowSpan={2}>
                            <Icon icon="emojione:money-bag" height="60" />
                          </td>
                          <td>
                            <Salary>Salary</Salary>
                            <SalaryValue>Rs.{jobData?.salary}/=</SalaryValue>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </SalaryDiv>
                </>
              )}
            </Col>
            <Col md={6} sm={12}>
              {jobData?.specifications && (
                <>
                  <RequirementTitle>Specifications</RequirementTitle>
                  <ul>
                    {jobData?.specifications.map((value, index) => (
                      <List key={index}>{value}</List>
                    ))}
                  </ul>
                </>
              )}

              {jobData?.qualifications && (
                <>
                  <RequirementTitle>Qualifications</RequirementTitle>
                  <ul>
                    {jobData?.qualifications.map((value, index) => (
                      <List key={index}>{value}</List>
                    ))}
                  </ul>
                </>
              )}

              {jobData?.experience && (
                <>
                  <RequirementTitle>Experience</RequirementTitle>
                  <ul>
                    {jobData?.experience.map((value, index) => (
                      <List key={index}>{value}</List>
                    ))}
                  </ul>
                </>
              )}
            </Col>
          </Row>
          <div style={{ textAlign: "right" }}>
            <CustomButton apply>Apply</CustomButton>
          </div>
          <Deadline>
            Application Deadline : <Date>{jobData?.date}</Date>
          </Deadline>
        </>
      )}
    </JobContainer>
  );
}

export default PostJob;
