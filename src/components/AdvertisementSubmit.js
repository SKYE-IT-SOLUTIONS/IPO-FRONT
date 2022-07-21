import React, {useState } from "react";
import styled from "styled-components";
import {  Row, Col, CustomButton, Input } from "./CommonComponents";
// import JobPhoto from "../assets/Joboffersbro.svg"
import AddSubmit from "../assets/addsubmit.svg";

const Title = styled.h2`
  padding-top: 10px;
  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;
const SubTitle = styled.h5`
  padding-top: 10px;
  @media (max-width: 1040px) {
    font-size: 18px;
  }
`;
const PositionInput = styled(Input)`
  width: 100%;
  height: 37px;

  @media (max-width: 1040px) {
    font-size: 13px;
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
const TextArea = styled.textarea`
  width: 100%;
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;

  @media (min-width: 768px) and (max-width: 1040px) {
    font-size: 13px;
  }
`;
export default function AdvertisementSubmit() {
    const [companyName, setCompanyName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [offers, setOffers] = useState("");
    const [file, setFile] = useState("");
  return (
    <div>
         <Row style={{ padding: "15px 0" }}>
            <Col md={6} sm={12}>
                <form>
                <Title>Enter Your Advertisement Details</Title>
                <SubTitle>Company Name</SubTitle>
                    <PositionInput
                    type="text"
                    value={companyName}
                    placeholder="Enter Company Name"
                    onChange={(e) => {
                        setCompanyName(e.target.value);
                      }}
                    />
                <SubTitle>Advertisement Title</SubTitle>
                    <PositionInput
                    type="text"
                    value={title}
                    placeholder="Enter Advertisement Title"
                    onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                <SubTitle>Advertisement Content</SubTitle>
                <TextArea
                    rows="3"
                    value={content}
                    placeholder="Enter Advertisement content"
                    onChange={(e) => {
                    setContent(e.target.value);
                    }}
                />
                <SubTitle>Special Offers</SubTitle>
                    <PositionInput
                    type="text"
                    value={offers}
                    placeholder="Enter Special Offers"
                    onChange={(e) => {
                        setOffers(e.target.value);
                      }}
                    />
                <SubTitle>Advertisement file</SubTitle>
                    <input
                    type="file"
                    value={file}
                    placeholder="Enter Advertisement Content"
                    onChange={(e) => {
                        setFile(e.target.value);
                      }}
                    /><br/><br/>
                <div style={{ textAlign: "center" }}></div>
                    <CustomButton submit>Submit</CustomButton>
                 <div style={{ textAlign: "right" }}></div>
                </form>
            </Col>
            <Col md={6} sm={12}>
            <ApplyImage image={AddSubmit} />
            </Col>
        </Row>
    </div>
  )
}
