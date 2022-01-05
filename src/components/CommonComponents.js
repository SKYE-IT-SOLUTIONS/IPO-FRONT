// third party imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import styled, { css } from "styled-components";
import { Icon } from "@iconify/react";
import RECAPTCHA from "react-google-recaptcha";

//assets
import twitter from "../assets/twitter.png";
import insta from "../assets/instagram.png";
import fb from "../assets/facebook.png";
import whatsapp from "../assets/whatsapp.png";
import linkedin from "../assets/linkedin.png";
import youtube from "../assets/youtube.png";
import logo from "../assets/logo.png";
import vision from "../assets/vision.jpg";

export { Container, Row, Col, Navbar, Icon };
export { twitter, insta, fb, whatsapp, linkedin, youtube, logo, vision };

export const CustomButton = styled.button`
  background: linear-gradient(to right, #000428, #004e92);
  color: white;
  border-radius: 20px;
  font-weight: bolder;
  padding: 5px 25px;
  border: 1px solid black;
  text-align: center;

  ${(props) =>
    props.cancle &&
    css`
      background: red;
      border: 1px solid red;
    `}

  ${(props) =>
    props.apply &&
    css`
      background: linear-gradient(to left, #41295a, #2f0743);
      border: 1px solid #41295a;
    `}

  ${(props) =>
    props.submit &&
    css`
      background: linear-gradient(to top, #000000, #434343);
    `}
`;

export const Lable = styled.label`
  color: black;
  padding-top: 5px;
  padding-bottom: 10px;
`;
export const Input = styled.input`
  border-radius: 5px;
  border: 2px solid black;
  padding: 5px;
`;

export const Recaptcha = (props) => {
  return (
    <RECAPTCHA
      sitekey="6LdKyuYdAAAAALtVruhZDuwZg9mLKsdg8D7oC_01"
      onChange={props.onChange}
    />
  );
};