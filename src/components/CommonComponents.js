// third party imports
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from "react-bootstrap/Navbar";
import styled, { css } from 'styled-components'

//assets
import twitter from "../assets/twitter.png" ;
import insta from "../assets/instagram.png" ;
import fb from "../assets/facebook.png" ;
import whatsapp from "../assets/whatsapp.png" ;
import linkedin from "../assets/linkedin.png" ;
import youtube from "../assets/youtube.png" ;
import logo from '../assets/logo.png'


export  {Container,Row,Col,Navbar};
export {twitter,insta,fb,whatsapp,linkedin,youtube,logo };

export const CustomButton = styled.button`
  background : linear-gradient(to right, #000428, #004e92);
  color : white;
  border-radius : 20px;
  font-weight : bolder;
  padding : 5px 25px ;
  border: solid;
  text-align : center;

  ${props => props.cancle && css`
    background : red;
  `}

  ${props => props.apply && css`
    background : linear-gradient(to left, #41295a, #2f0743);
  `}
`
