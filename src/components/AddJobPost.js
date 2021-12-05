import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, CustomButton, Input } from "./CommonComponents";
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

const TitleDiv = styled.div`
  display: flex;
  justify-content:center;
  padding: 20px 0;
`
const RequirementTitle = styled.h4`
  @media (max-width: 1040px){
    font-size: 18px;
  }
`

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
  padding-right: 5px;

  @media (max-width: 1040px){
    font-size: 18px;
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

  @media (min-width: 768px) and (max-width: 1040px){
    height: 360px;
    width: 360px;
  }

  @media (max-width: 768px){
   
    width: 90%;
  }
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

  @media (min-width: 768px) and (max-width: 1040px){
    font-size: 14px;
  }
`;

const CustomInput = styled(Input)`
  width: 50%;

  @media (max-width: 1040px){
    font-size: 13px;
    width: 80%;
  }
`;

const DateInput = styled(Input)`
  width: 30%;

  @media (min-width: 768px) and (max-width: 1040px){
    font-size: 13px;
  }
`;

const SalaryInput = styled(Input)`
  width: 90%;
  margin-left: 10px;
  color: #ff0f0f;

  @media (max-width: 1040px){
    font-size: 13px;
  }
`;

const PositionInput = styled(Input)`
  width: 40%;
  height: 37px;

  @media  (max-width: 1040px){
    font-size: 13px;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;

  @media (min-width: 768px) and (max-width: 1040px){
    font-size: 13px;
  }
`;

const ExtraInput = styled.input`
  width: 95%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 1px;

  @media (min-width: 1041px) and (max-width: 1200px){
    width: 90%;

  }

  /* @media (min-width: 576px) and (max-width: 1040px){
    width: 85%;
    font-size: 13px;
  } */

  @media (max-width: 1040px){
    width: 85%;
    font-size: 13px;
  }

  /* @media (min-width: 576px) and (max-width: 765px){
    width: 85%;
    font-size: 13px;
  } */
`;

const Position = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 15px;
`;

function AddJobPost() {
  const { fonts } = useContext(ThemeContext);
  const [title, setTitle] = useState(null);
  const [position, setPosition] = useState(null);
  const [decription, setDecription] = useState(null);
  
  const [specList, setSpecList] = useState([]);
  const [specification, setSpecification] = useState(null);

  const [qlfList, setQlfList] = useState([]);
  const [qualification, setQualification] = useState(null);
  
  const [expList, setExpList] = useState([]);
  const [experience, setExperience] = useState(null);
  
  const [salary, setSalary] = useState(null)
  const [date, setDate] = useState(null)

  return (
    <JobContainer font={fonts}>
          <TitleDiv><CustomInput
                  type="text"
                  value={title}
                  placeholder="Enter Job Title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                /></TitleDiv>
          
          <Position>
            <Title>Job Position : </Title>{" "}
            <PositionInput
              type="text"
              value={position}
              placeholder="Enter Job Position"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
            />
          </Position>

          <TextArea
            rows="4"
            value={decription}
            placeholder="Enter Description"
            onChange={(e) => {
              setDecription(e.target.value);
            }}
          />
          <Row style={{ padding: "15px 0" }}>
            <Col md={6} sm={12}>
              <ApplyImage image={JobPhoto} />

              <SalaryDiv>
                <table>
                  <tr>
                    <td rowSpan={2}>
                      <Icon icon="emojione:money-bag" height="60" />
                    </td>
                    <td>
                      <Salary>Salary</Salary>
                      <SalaryInput type="text" placeholder="0" value={salary} onChange={(e) => {
                        setSalary(e.target.value)
                      }}/>
                    </td>
                  </tr>
                </table>
              </SalaryDiv>
            </Col>
            <Col md={6} sm={12}>

              <RequirementTitle>Specifications</RequirementTitle>
              <ul>
                {specList && specList.map((value, index) => (
                  <li key={index}>{value}  <Icon icon="ic:round-cancel" style={{marginLeft:"5px"}} color="red" height="20" onClick={() => {
                    setSpecList(specList.filter((_,ind)=> ind !== index))
                  }}/></li>
                ))}
                <li>
                  <ExtraInput
                    type="text"
                    value={specification}
                    placeholder="Enter Job Specification"
                    onChange={(e) => {
                      setSpecification(e.target.value);
                    }}
                  />{" "}
                  <Icon
                    icon="akar-icons:circle-plus-fill"
                    height="20"
                    color="#001e62"
                    onClick={() => {
                      if(specification !== null  && specification !== ""){
                        setSpecList([...specList,specification])
                        setSpecification("")
                      }
                    }}
                  />
                </li>
              </ul>

              <RequirementTitle>Qualifications</RequirementTitle>
              <ul>
                {qlfList && qlfList.map((value, index) => (
                  <li key={index}>{value}  <Icon icon="ic:round-cancel" style={{marginLeft:"5px"}} color="red" height="20" onClick={() => {
                    setQlfList(qlfList.filter((_,ind)=> ind !== index))
                  }}/></li>
                ))}
                <li>
                  <ExtraInput
                    type="text"
                    value={qualification}
                    placeholder="Enter Job Qualification"
                    onChange={(e) => {
                      setQualification(e.target.value);
                    }}
                  />{" "}
                  <Icon
                    icon="akar-icons:circle-plus-fill"
                    height="20"
                    color="#001e62"
                    onClick={() => {
                      if(qualification !== null  && qualification !== ""){
                        setQlfList([...qlfList,qualification])
                        setQualification("")
                      }
                    }}
                  />
                </li>
              </ul>

              <RequirementTitle>Experience</RequirementTitle>
              <ul>
                {expList && expList.map((value, index) => (
                  <li key={index}>{value}  <Icon icon="ic:round-cancel" style={{marginLeft:"5px"}} color="red" height="20" onClick={() => {
                    setExpList(expList.filter((_,ind)=> ind !== index))
                  }}/></li>
                ))}
                <li>
                  <ExtraInput
                    type="text"
                    value={experience}
                    placeholder="Enter Experience"
                    onChange={(e) => {
                      setExperience(e.target.value);
                    }}
                  />{" "}
                  <Icon
                    icon="akar-icons:circle-plus-fill"
                    height="20"
                    color="#001e62"
                    onClick={() => {
                      if(experience !== null  && experience !== ""){
                        setExpList([...expList,experience])
                        setExperience("")
                      }
                    }}
                  />
                </li>
              </ul>

            </Col>
          </Row>
          <h6>
            Application Deadline : <DateInput type="date" value={date} onChange={(e) => {
              setDate(e.target.value)
              console.log(e.target.value)
            }}/>
          </h6>
          <div style={{ textAlign: "right" }}>
            <CustomButton submit>Submit</CustomButton>
          </div>
    </JobContainer>
  );
}

export default AddJobPost;
