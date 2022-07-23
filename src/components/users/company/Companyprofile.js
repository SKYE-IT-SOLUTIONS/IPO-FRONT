/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "../../CommonComponents";
import styled from "styled-components";
import Avatar from "@mui/material/Avatar";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { Icon } from "@iconify/react";
import Card from "../../common/MediaCard";
import AuthServices from "../../../services/AuthServices";
import { useSelector } from "react-redux";

const OuterDiv = styled(Container)`
  text-align: center;
  margin: auto;
`;
const Separatecol = styled(Col)`
  margin-left: 1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #eef2f3;
  border: 3px solid black;
  border-radius: 15px;
`;
const Separaterow = styled(Row)`
  background-image: url(${({ img }) => img});
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 3px solid black;
  border-radius: 15px;
  margin: auto;
`;
const Separaterow2 = styled(Row)`
  margin: 2px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Rowdiv = styled.div`
  background-image: url(${({ img }) => img});
  height: 300px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  &: hover {
    transform: scale(1.02);
    transition-delay: 100ms;
  } ;
`;
const Separatecol2 = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: #eef2f3;
  border: 3px solid black;
  border-radius: 15px;
`;

const Avtdiv = styled.div`
  display: flex;
  justify-content: center;
`;
const ApplyImage = styled.div`
  height: 180px;
  width: 180px;
  background-image: url(${({ image }) => image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 15px auto;
  border-radius: 150px;
  &: hover {
    transform: scale(1.05);
    transition-delay: 100ms;
  }

  @media (min-width: 769px) and (max-width: 1040px) {
    height: 100px;
    width: 100px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    height: 130px;
    width: 130px;
  }

  @media (max-width: 575px) {
    height: 170px;
    width: 170px;
  }
`;
const Icons = styled(Icon)`
  font-size: 28px;
  margin: 0 5px;
  cursor: pointer;

  @media (min-width: 769px) and (max-width: 1040px) {
    font-size: 20px;
  }

  @media (max-width: 768px) and (min-width: 576px) {
    font-size: 23px;
  }

  @media (max-width: 575px) {
    font-size: 22px;
  }
`;

const IconSet = styled.div`
  padding: 12px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const LinkA = styled.a`
  color: inherit;
`;
function Companyprofile() {
  const [isLoading, setIsLoading] = useState(false);

  const dataService = new AuthServices();

  const [userData, setUserData] = useState({});
  // const [newsLoaded, setNewsLoaded] = useState(false)
  const [error, setError] = useState("");
  const id = useSelector((state) => state.user.userId);

  useEffect(() => {
    setIsLoading(true);
    const fetchStatData = async () => {
      const { status, data, error } = await dataService.handleGetCompany(id);
      if (status) {
        setUserData(data);
      } else {
        setError(error);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchStatData();
  }, []);

  return (
    <OuterDiv>
      <Row>
        <Separatecol md={4} sm={12} xs={12}>
          <Avtdiv>
            <ApplyImage image={userData?.imgUrl} />
          </Avtdiv>
          <h1>{userData.companyname}</h1>
          <hr />
          <h5>
            <Icons icon="dashicons:email-alt" />
            {userData.email}
          </h5>
          <h5>
            <Icons icon="fluent:call-20-filled" />
            {userData?.conatctnumber}
          </h5>
          <h5>
            <Icons icon="foundation:address-book" />
            {userData.address?.replace(/(<br\/>)/g, "")}
          </h5>
          <hr />
          <h3>About</h3>
          <div>
            <IconSet>
              <LinkA href={userData.fb} target="_blank">
                <Icons icon="bi:facebook" />
              </LinkA>

              <LinkA href={userData.linkedin} target="_blank">
                <Icons icon="akar-icons:linkedin-fill" />
              </LinkA>
              <LinkA href={userData.twitter} target="_blank">
                <Icons icon="akar-icons:twitter-fill" />
              </LinkA>
            </IconSet>
          </div>
          <h6>
            Contact Person: <b>{userData.conatctperson}</b>
            <br />
            Number:<b>{userData.conatctnumber}</b>
          </h6>
        </Separatecol>
        <Col md={7} sm={12} xs={12}>
          <Separaterow>
            <Rowdiv
              img={
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
              }
            ></Rowdiv>
          </Separaterow>
          <br />
          <Separaterow2>
            <Separatecol2 md={5} sm={12} xs={12}>
              <Card title="requests" count="0" />
            </Separatecol2>
            <Separatecol2 md={5} sm={12} xs={12}>
              <Card title="events" count="0" />
            </Separatecol2>
          </Separaterow2>
          <Separaterow2>
            <Separatecol2 md={5} sm={12} xs={12}>
              <Card title="posts" count="0" />
            </Separatecol2>
            <Separatecol2 md={5} sm={12} xs={12}>
              <Card title="news" count="0" />
            </Separatecol2>
          </Separaterow2>
        </Col>
      </Row>
    </OuterDiv>
  );
}

export default Companyprofile;
