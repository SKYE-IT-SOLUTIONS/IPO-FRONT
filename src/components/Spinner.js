import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Mdiv=styled.div`
  position: relative;
  
`;
const Bdiv=styled.div`
  background-color: rgba(75,119,190,0.4);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  z-index: 99999;
  backdrop-filter: blur(5px);
`;

const Spin = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: -webkit-translate(-50%, -50%);
    transform: -moz-translate(-50%, -50%);
    transform: -ms-translate(-50%, -50%);
    text-align: center;
    /* background:red; */
`

function Spinner() {
  const types = [
    "Audio",
    "ThreeDots",
    "TailSpin",
    "Rings",
    "Puff",
    "Oval",
    "Hearts",
    "Grid",
    "Circles",
    "Bars",
    "Ball-Triangle",
  ];

  return (
    
    <Mdiv>
      <Bdiv>
        <Spin>
          <Loader type={types[9]} color="black" height="25%" width="25%"/>
        </Spin>
      </Bdiv>
    </Mdiv>
      

  );
}

export default Spinner;
