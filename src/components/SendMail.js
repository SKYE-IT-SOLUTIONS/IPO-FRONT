import React,{useContext,useState,useEffect} from 'react'
import styled from 'styled-components';
import {Container} from "./CommonComponents";
  import sendMail from '../assets/sendMail.svg'
  import { ThemeContext } from "../contexts/ThemeContext";

  const OuterDiv = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: ${({ font }) => font.general};
    margin:auto;
  `

  const LoginImg = styled.img`
    width: 50%;
    margin: auto;

    @media (max-width: 768px) {
    width: 100%;
    }
`;

const Text = styled.h4`
    color : #001e62;

    @media (max-width: 768px) {
        font-size:14px;
    }
`
const Email = styled.span`
    color :#00a5ad;
`

function SendMail() {
    const { fonts } = useContext(ThemeContext);
    const [email, setEmail] = useState("")

    useEffect(() => {
        setEmail(sessionStorage.getItem("email"))
        sessionStorage.removeItem("email")
    }, [])

    return (
        <OuterDiv font={fonts}>
            <LoginImg src={sendMail} />
            <Text>Confirmation mail is send to <Email>{email}</Email></Text>
        </OuterDiv>
    )
}

export default SendMail
