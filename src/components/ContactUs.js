import React, { useEffect,useState,useContext} from "react";
import styled from "styled-components";
import { Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";

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
  justify-content: space-evenly;
  padding-bottom: 5px;
`;

const DetailCol = styled(Col)`
  padding-right: 10px;
  padding-left: 10px;
`;

const ContainerDiv = styled(Col)`
  display: "flex";
  flex-direction: column;
  justify-content: center;
  background: ${({bg}) => bg};
  font-family: ${({font}) => font.general};
  color: white;
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

const arrayMap = (data,index,ob) => {
  return(
  <ContactRow key={index}>
        <DetailCol>{data}</DetailCol>
        <Col>
          <div>
            {ob[data]}
          </div>
        </Col>
    </ContactRow>);
}

function ContactUs(props) {

 const [keyArray, setKeyArray] = useState(null);
 const { theme, light, dark, fonts } = useContext(ThemeContext);
 const them = theme ? light : dark;

  const contactData ={
    "Address":<>Industrial Placement Office <br />Dean's Office <br />Faculty of Agricultur<br />University of Ruhuna <br />Mapalana, Kamburupitiya <br />Sri Lanka</>,
    "Telephone":"+94(0)41 229 2200 Ext 361",
    "Fax":"+94(0)41 229 2384",
    "Email":"ipo@agri.ruh.ac.lk",
    "Industrial Placement Officer":"WMCJ Wijekoon (BSc Agric)"
    
  }
  useEffect(() => {
    const keyArray = props.contactData ? Object.keys(props.contactData) : Object.keys(contactData);
    setKeyArray(keyArray)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <ContainerDiv bg={them.ui} font={fonts} md={4} sm={12}>
      <ContactHeader>Contact Us</ContactHeader>

      {keyArray ? keyArray.map((data,index) => {
        return arrayMap(data,index,contactData);
      }):""}

    </ContainerDiv>
  );
}

export default ContactUs;
