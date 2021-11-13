import React , {useContext} from 'react'
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { Col } from "./CommonComponents";
import { ThemeContext } from "../contexts/ThemeContext";
import { Input, Lable, CustomButton } from "./CommonComponents";

const SubscriptDiv = styled(Col)`
    display : flex;
    flex-direction: column;
    text-align: center;
    font-family: ${({fonts})=>fonts.general};
    background: linear-gradient(to top, #00b09b, #96c93d);
`
const SubLable = styled(Lable)`
    text-align: left;
`
const InfoLable = styled(Lable)`
    font-size: 13px;
    color : white;
    padding-top: 0px;
    padding-bottom : 0px;
`
const EmailInfo = styled(Lable)`
    font-size: 13px;
    color : white;
    padding-top: 0px;
    padding-bottom : 0px;
    text-align: left;
`

const SubInput = styled(Input)`
    width: 100%;
`

const SubIcon = styled(Icon)`
    margin : auto;
`

const SubBttn = styled(CustomButton)`
    margin :10px auto;
    padding: auto;
`


function Subscription() {
    const {fonts} = useContext(ThemeContext)

    return (
        <SubscriptDiv fonts={fonts}>
            <SubIcon icon="entypo:mail" width="70"/>
            <InfoLable>Join our subscribe list to get the latest news & updates</InfoLable>
            <SubLable>Name</SubLable>
            <SubInput type="text"/>
            <SubLable>Email Address</SubLable>
            <SubInput type="email"/>
            <EmailInfo>We'll never share your email with anyone else.</EmailInfo>
            <SubBttn submit>SUBMIT</SubBttn>
        </SubscriptDiv>
    )
}

export default Subscription
