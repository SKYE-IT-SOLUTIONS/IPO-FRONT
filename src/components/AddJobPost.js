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
  justify-content: center;
  padding: 20px 0;
`;

// const Logo = styled.div`
//   background-image: url("https://images.unsplash.com/photo-1555596899-d634257b55bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80");
//   background-position: center;
//   background-repeat: no;
//   background-size: cover;
//   height: 55px;
//   width: 55px;
//   border-radius: 50px;
//   border: 2px solid black;
// `;

const Title = styled.h4`
  padding-bottom: 10px;
  padding-right: 5px;
`;

const ApplyImage = styled.div`
  height: 512px;
  width: 512px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

// const Table = styled.table`
//   margin: 25px auto;
// `;

// const Td = styled.td`
//   padding: 0 10px;
// `;

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

const CustomInput = styled(Input)`
  width: 50%;
`;

const DateInput = styled(Input)`
  width: 30%;
`;

const SalaryInput = styled(Input)`
  width: 90%;
  margin-left: 10px;
  color: #ff0f0f;
`;

const PositionInput = styled(Input)`
  width: 40%;
  height: 37px;
`;
const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;
`;

const ExtraInput = styled.input`
  width: 95%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 1px;
`;

const Position = styled.div`
  display: flex;
  flex-direction: row;
`;

function AddJobPost() {
  const { fonts } = useContext(ThemeContext);
  const [title, setTitle] = useState("Enter Job Title");
  const [position, setPosition] = useState("Enter Job Position");
  const [decription, setDecription] = useState("Enter Description");

  const [specList, setSpecList] = useState([]);
  const [specification, setSpecification] = useState("Enter Job Specification");

  const [qlfList, setQlfList] = useState([]);
  const [qualification, setQualification] = useState("Enter Job Qualification");

  const [expList, setExpList] = useState([]);
  const [experience, setExperience] = useState("Enter Experience");

  const [salary, setSalary] = useState(0);
  const [date, setDate] = useState(null);

  return (
    <JobContainer font={fonts}>
      <TitleDiv>
        <CustomInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </TitleDiv>

      <Position>
        <Title>Job Position : </Title>{" "}
        <PositionInput
          type="text"
          value={position}
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
      </Position>

      <TextArea
        rows="4"
        value={decription}
        onChange={(e) => {
          setDecription(e.target.value);
        }}
      />
      <Row style={{ paddingTop: "15px" }}>
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
                  <SalaryInput
                    type="text"
                    value={salary}
                    onChange={(e) => {
                      setSalary(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
          </SalaryDiv>
        </Col>
        <Col>
          <h4>Specifications</h4>
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
                onChange={(e) => {
                  setSpecification(e.target.value);
                }}
              />{" "}
              <Icon
                icon="akar-icons:circle-plus-fill"
                height="20"
                color="#001e62"
                onClick={() => {
                  setSpecList([...specList, specification]);
                  setSpecification("Enter Job Specification");
                }}
              />
            </li>
          </ul>

          <h4>Qualifications</h4>
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
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
              />{" "}
              <Icon
                icon="akar-icons:circle-plus-fill"
                height="20"
                color="#001e62"
                onClick={() => {
                  setQlfList([...qlfList, qualification]);
                  setQualification("Enter Job Qualification");
                }}
              />
            </li>
          </ul>

          <h4>Experience</h4>
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
                onChange={(e) => {
                  setExperience(e.target.value);
                }}
              />{" "}
              <Icon
                icon="akar-icons:circle-plus-fill"
                height="20"
                color="#001e62"
                onClick={() => {
                  setExpList([...expList, experience]);
                  setExperience("Enter Experience");
                }}
              />
            </li>
          </ul>
        </Col>
      </Row>
      <div style={{ textAlign: "right" }}>
        <CustomButton apply>Apply</CustomButton>
      </div>
      <h6>
        Application Deadline :{" "}
        <DateInput
          type="date"
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
            console.log(e.target.value);
          }}
        />
      </h6>
    </JobContainer>
  );
}

export default AddJobPost;
