import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import DataService from "../services/DataService";
import Spinner from "../components/Spinner";

const ContactHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 10px;
  font-size: 20px;
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 5px;
  margin: auto;
`;

const DetailCol = styled(Col)`
  padding-right: 10px;
  padding-left: 20px;
`;

const ContainerDiv = styled(Col)`
  display: "flex";
  flex-direction: column;
  justify-content: center;
  background: ${({ bg }) => bg};
  font-family: ${({ font }) => font.general};
  color: white;
  padding: 15px 0px;
  /* width: 100%; */
  @media only screen and (min-width: 1400px) {
    font-size: 14px;
  }

  @media (min-width: 1200px) and (max-width: 1400px) {
    font-size: 14px;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    font-size: 10px;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    font-size: 10px;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

const arrayMap = (data, index, ob) => {
  return (
    <ContactRow key={index}>
      <DetailCol>{data}</DetailCol>
      <Col>
        <div style={{ paddingLeft: "2px" }}>{ob[data]}</div>
      </Col>
    </ContactRow>
  );
};

function ContactUs(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [contactDetails, setContactDetails] = useState([]);
  const [keyArray, setKeyArray] = useState(null);
  const [error, setError] = useState("");

  const dataService = new DataService();

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } =
        await dataService.handleGetContactDetails();
      if (status) {
        console.log(data);
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchNews();
  }, []);

  const { theme, light, dark, fonts } = useContext(ThemeContext);
  const them = theme ? light : dark;


  return isLoading ? (
    <Spinner/>
  ) : (
    <ContainerDiv bg={them.ui} font={fonts} md={4} sm={12}>
      <ContactHeader>Contact Us</ContactHeader>

      {keyArray
        ? keyArray.map((data, index) => {
            return arrayMap(data, index, contactDetails);
          })
        : ""}
    </ContainerDiv>
  );
}

export default ContactUs;
