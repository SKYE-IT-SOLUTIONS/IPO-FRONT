import React, { useContext, useState ,useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import {Icon} from "./CommonComponents";

const StatusDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px 0;
  font-family: ${({ font }) => font.general};
`;
const StatusIcon = styled(Icon)`
  margin: auto;
  width: 120px;
`;

const Heading = styled.p`
  font-size : 38px;
  @media (max-width: 576px) {
    font-size: 25px;
  }
`;

const SubHeading = styled.p`
font-size : 18px;

@media (max-width: 576px) {
    font-size: 15px;
  }

  ${({ status }) => (status ? `color : green` : `color : red`)}
`;

function Status(props) {
  const [windowSize, setwindowSize] = useState("130")

  useEffect(() => {
    const changeSize = () => {
      if(window.innerWidth < 576){
        setwindowSize("100")
      }else{
        setwindowSize("130")
      }
    }
    window.addEventListener("resize",changeSize)
  }, [])

  const { fonts } = useContext(ThemeContext)



  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <StatusDiv font={fonts}>
        {props.status.ok ? (
          <StatusIcon
            icon="teenyicons:tick-circle-outline"
            color="green"
            width={windowSize}
          />
        ) : (
          <StatusIcon
            icon="teenyicons:x-circle-outline"
            color="red"
            width={windowSize}
          />
        )}

        <Heading>{props.status.heading}</Heading>
        <SubHeading status={props.status.ok}>
          {props.status.subheading}
        </SubHeading>
      </StatusDiv>
    </Modal>
  );
}

export default Status;
