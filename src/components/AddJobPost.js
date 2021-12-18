import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Container, Row, Col, CustomButton, Input } from "./CommonComponents";
import JobPhoto from "../assets/JobApply.svg";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Simple_Validator } from "../utils/validation";

const JobContainer = styled(Container)`
  font-family: ${({ font }) => font.general};
  margin: 10px 0;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px 0;
`;
const RequirementTitle = styled.h4`
  padding-top: 10px;
  font-size: 20px;

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

const Title = styled.h4`
  margin: auto 0;
  padding-right: 5px;
  font-size: 20px;
  padding: 15px 0 10px 0;

  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;

const ApplyImage = styled.div`
  height: 450px;
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

const Salary = styled.p`
  margin: auto;
  padding-right: 15px;
  font-size: 20px;

  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;

const CustomInput = styled(Input)`
  width: 100%;

  @media (max-width: 1040px) {
    font-size: 13px;
  }
`;

const PositionInput = styled(Input)`
  width: 40%;

  @media (max-width: 1040px) {
    font-size: 13px;
    width: 80%;
  }
`;

const DateInput = styled(Input)`
  width: 150px;
  margin-left: 15px;

  @media (min-width: 768px) and (max-width: 1040px) {
    font-size: 13px;
  }
`;

const SalaryInput = styled(Input)`
  width: 150px;
  margin-left: 15px;
  /* margin-bottom: 10px; */

  @media (max-width: 1040px) {
    font-size: 13px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;

  @media (min-width: 768px) and (max-width: 1040px) {
    font-size: 13px;
  }
`;

const ExtraInput = styled.input`
  width: 95%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;

  @media (min-width: 1041px) and (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1040px) {
    width: 85%;
    font-size: 13px;
  }
`;

const TableTr = styled.tr`
  height: auto;
`;

const Error = styled.p`
  color: red;
  font-size: 14px;
  margin: 0px;
  padding: 5px 0px;
`;

const SubmitBttn = styled(CustomButton)`
  margin: 15px 0;
`;

function AddJobPost() {
  const { fonts } = useContext(ThemeContext);
  const [title, setTitle] = useState("");
  const [titleInfo, setTitleInfo] = useState({ error: null, status: false });

  const [position, setPosition] = useState("");
  const [positionInfo, setPositionInfo] = useState({
    error: null,
    status: false,
  });

  const [decription, setDecription] = useState("");

  const [specList, setSpecList] = useState([]);
  const [specification, setSpecification] = useState("");

  const [qlfList, setQlfList] = useState([]);
  const [qualification, setQualification] = useState("");

  const [expList, setExpList] = useState([]);
  const [experience, setExperience] = useState("");

  const [salary, setSalary] = useState("");
  const [date, setDate] = useState("");

  return (
    <JobContainer font={fonts}>
      <TitleDiv>

        <Title>Job Title</Title>
        <CustomInput
          type="text"
          value={title}
          placeholder="Enter Job Title"
          onChange={(e) => {
            let val = e.target.value;
            setTitle(val);
            setTitleInfo(Simple_Validator(val, "Title"));
          }}
        />
        {!titleInfo.status && <Error>{titleInfo.error}</Error>}

        <Title>Job Position</Title>
        <PositionInput
          type="text"
          value={position}
          placeholder="Enter Job Position"
          onChange={(e) => {
            let val = e.target.value;
            setPosition(val);
            setPositionInfo(Simple_Validator(val, "Job Position"));
          }}
        />
        {!positionInfo.status && <Error>{positionInfo.error}</Error>}

      </TitleDiv>

      <Title>Job Description</Title>
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
        </Col>
        <Col md={6} sm={12}>
          <RequirementTitle>Specifications</RequirementTitle>
          <ul>
            {specList &&
              specList.map((value, index) => (
                <li key={index}>
                  {value}{" "}
                  <Icon
                    icon="ic:round-cancel"
                    style={{ marginLeft: "5px" }}
                    color="red"
                    height="20"
                    onClick={() => {
                      setSpecList(specList.filter((_, ind) => ind !== index));
                    }}
                  />
                </li>
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
                  if (specification !== "") {
                    setSpecList([...specList, specification]);
                    setSpecification("");
                  }
                }}
              />
            </li>
          </ul>

          <RequirementTitle>Qualifications</RequirementTitle>
          <ul>
            {qlfList &&
              qlfList.map((value, index) => (
                <li key={index}>
                  {value}{" "}
                  <Icon
                    icon="ic:round-cancel"
                    style={{ marginLeft: "5px" }}
                    color="red"
                    height="20"
                    onClick={() => {
                      setQlfList(qlfList.filter((_, ind) => ind !== index));
                    }}
                  />
                </li>
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
                  if (qualification !== "") {
                    setQlfList([...qlfList, qualification]);
                    setQualification("");
                  }
                }}
              />
            </li>
          </ul>

          <RequirementTitle>Experience</RequirementTitle>
          <ul>
            {expList &&
              expList.map((value, index) => (
                <li key={index}>
                  {value}{" "}
                  <Icon
                    icon="ic:round-cancel"
                    style={{ marginLeft: "5px" }}
                    color="red"
                    height="20"
                    onClick={() => {
                      setExpList(expList.filter((_, ind) => ind !== index));
                    }}
                  />
                </li>
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
                  if (experience !== "") {
                    setExpList([...expList, experience]);
                    setExperience("");
                  }
                }}
              />
            </li>
          </ul>

          <table>
            <tbody>
              <TableTr>
                <td>
                  <Salary>Salary</Salary>
                </td>
                <td>
                  :{" "}
                  <SalaryInput
                    type="string"
                    placeholder="0.00"
                    value={salary}
                    onChange={(e) => {
                      let value = parseInt(e.target.value)
                      setSalary(value.toFixed(2));
                    }}
                  />
                </td>
              </TableTr>
              <br />
              <TableTr>
                <td>
                  <Salary>Application Deadline</Salary>
                </td>
                <td>
                  :{" "}
                  <DateInput
                    type="date"
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                      console.log(e.target.value);
                    }}
                  />
                </td>
              </TableTr>
            </tbody>
          </table>
        </Col>
      </Row>

      <div style={{ textAlign: "right" }}>
        <SubmitBttn submit>Submit</SubmitBttn>
      </div>

    </JobContainer>
  );
}

export default AddJobPost;
