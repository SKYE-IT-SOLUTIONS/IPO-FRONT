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
import Spinner from "./Spinner";
import { useSelector } from "react-redux";

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
const AnimatedText = styled.span`
  font-weight: 800;
  font-family: sans-serif;
  background: red;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  text-align: center;
  position: absolute;
  text-align: center;
  animation: pop 5s ease-in-out infinite;
  animation-delay: 2s infinite;
  @keyframes pop{
  50%  {
    transform: scale(1.25);
  }
}

  @media only screen and (min-width: 1160px) {
    font-size: 30px;
    margin-top: -10px;
    
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    font-size: 25px;
    margin-top: -10px;
    
  }

  @media (min-width: 848px) and (max-width: 1024px) {
    font-size: 20px;
    margin-top: -5px;
    
  }
  @media (min-width: 767px) and (max-width: 848px) {
    font-size: 15px;
    
  }
  @media (min-width: 500px) and (max-width: 767px) {
    font-size: 12px;

  }
  @media (min-width: 400px) and (max-width: 500px) {
    font-size: 10px;
  
  }
  @media (min-width: 300px) and (max-width: 400px) {
    font-size: 9px;
  
  }
  @media (max-width: 300px) {
    font-size: 8px;  
  }
`;

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

  const storeTitle = useSelector((state) => state.job.title);
  const storePosition = useSelector((state) => state.job.position);
  const storeDescription = useSelector((state) => state.job.description);
  const storeSpecifications = useSelector((state) => state.job.specifications);
  const storeQualifications = useSelector((state) => state.job.qualifications);
  const storeExperience = useSelector((state) => state.job.experience);
  const storeSalary = useSelector((state) => state.job.salary);
  const storeDeadline = useSelector((state) => state.job.deadline );

  useEffect(() => {
    setisLoading(true);
    const fetchJob = async () => {
      if (id !== undefined && id !== null) {
        console.log(id);
        const { status, data, error } = id
          ? await dataService.handleGetJob(id)
          : null;
        if (status) {
          console.log("data", data);
          // setJobData(data);
          setJobData({
            id: data?.id,
            title: data?.title,
            position: data?.position,
            description: data?.description,
            specifications: data?.specifications,
            qualifications: data.qualifications,
            experience: data?.experiences,
            salary: data?.salary,
            date: data?.deadline,
          })
        } else {
          setError(error);
          navigate("/404");
        }
        
      } else {
        setJobData({
          id: "",
          title: storeTitle,
          position: storePosition,
          description: storeDescription,
          specifications: storeSpecifications,
          qualifications: storeQualifications,
          experience: storeExperience,
          salary: storeSalary,
          deadline: storeDeadline,
          date: "Not Posted Yet",
        })
      }
      setisLoading(false);
    };
    fetchJob();
  }, []);

  const { fonts } = useContext(ThemeContext);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <JobContainer font={fonts}>
          {jobData && (
            <>
              <Table>
                <tbody>
                  <tr>
                    <Td>
                      <Logo></Logo>
                    </Td>
                    <Td>
                      {jobData.title && <MainTitle>{jobData.title}</MainTitle>}
                    </Td>
                  </tr>
                </tbody>
              </Table>
              {jobData.position && <Title>Job Position : {jobData.position}</Title>}
              <Description>{jobData?.description}</Description>
              <Row style={{ paddingTop: "15px" }}>
                <Col md={6} sm={12}>
                  <ApplyImage image={JobPhoto} />
                  {jobData.salary && (
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
                                <SalaryValue>
                                  Rs.{jobData?.salary}/=
                                </SalaryValue>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </SalaryDiv>
                    </>
                  )}
                </Col>
                <Col md={6} sm={12}>
                  {jobData?.specifications?.length !== 0 && (
                    <>
                      <RequirementTitle>Specifications</RequirementTitle>
                      <ul>
                        {jobData?.specifications.map((value, index) => (
                          <List key={index}>{value}</List>
                        ))}
                      </ul>
                    </>
                  )}

                  {jobData?.qualifications?.length !== 0  && (
                    <>
                      <RequirementTitle>Qualifications</RequirementTitle>
                      <ul>
                        {jobData?.qualifications?.map((value, index) => (
                          <List key={index}>{value}</List>
                        ))}
                      </ul>
                    </>
                  )}

                  {jobData.experience.length !== 0 && (
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
              Application Deadline :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <AnimatedText>{jobData?.date}</AnimatedText>
              </Deadline>
            </>
          )}
        </JobContainer>
      )}
    </>
  );
}

export default PostJob;
