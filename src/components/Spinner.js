import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const Spin = styled(Loader)`
  position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform: -webkit-translate(-50%, -50%);
    transform: -moz-translate(-50%, -50%);
    transform: -ms-translate(-50%, -50%);

    
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
    <div>
      <Spin type={types[9]} color="black" height="30%" width="30%"/>
    </div>
  );
}

export default Spinner;
