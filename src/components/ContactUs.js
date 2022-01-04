import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import DataService from "../services/DataService";
import Spinner from "../components/Spinner";
import { Icon } from "@iconify/react";

const ContactHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 0 15px 0;
  font-size: 25px;
  font-family: ${({ font }) => font.title};
`;

const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-bottom: 10px;
  margin: auto;
`;

const TopicCol = styled(Col)`
  padding-right: 10px;
  padding-left: 20px;
  text-align: left;
`;

const DetailCol = styled(Col)`
  text-align: left;
`;

const ContactIcon = styled(Icon)`
  font-size: 60px;
`;

const ContainerDiv = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
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
      <TopicCol>{data}</TopicCol>
      {data === "Address" ? (
        <DetailCol>
          <div style={{ paddingLeft: "2px" }}>
            {ob[data][0]}
            <br />
            {ob[data][1]}
            <br />
            {ob[data][2]}
            <br />
            {ob[data][3]}
            <br />
            {ob[data][4]}
          </div>
        </DetailCol>
      ) : (
        <DetailCol>
          <div style={{ paddingLeft: "2px" }}>{ob[data]}</div>
        </DetailCol>
      )}
    </ContactRow>
  );
};

function ContactUs(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [contactDetails, setContactDetails] = useState({
    Address: "",
    Email: "",
    Phone: "",
    Fax: "",
    Officer: "",
  });
  const [keyArray, setKeyArray] = useState([
    "Address",
    "Email",
    "Phone",
    "Fax",
    "Officer",
  ]);
  const [error, setError] = useState("");

  const dataService = new DataService();

  useEffect(() => {
    setIsLoading(true);
    const fetchNews = async () => {
      const { status, data, error } =
        await dataService.handleGetContactDetails();
      if (status) {
        console.log("In Admin : ", data);
        const AddFormat2 = [
          data?.apartNo,
          data?.line01,
          data?.line02,
          data?.line03,
          data?.city,
        ];
        console.log(AddFormat2);

        let newData = {
          Address: AddFormat2,
          Email: data?.email,
          Phone: data.telephone,
          Fax: data.fax,
          Officer: data.officer,
        };
        setContactDetails(newData);
        // setKeyArray(Object.keys(contactDetails));
        // console.log(Object.keys(contactDetails))
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
    <Spinner />
  ) : (
    <ContainerDiv bg={them.ui} font={fonts} md={4} sm={12}>
      <div>
        <ContactIcon icon="ic:round-contact-phone" />
        <ContactHeader font={fonts}>CONTACT US</ContactHeader>

        {keyArray
          ? keyArray.map((data, index) => {
              return arrayMap(data, index, contactDetails);
            })
          : ""}
      </div>
    </ContainerDiv>
  );
}

export default ContactUs;
