// third party imports
import React, { useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../../contexts/ThemeContext";
import Row from 'react-bootstrap/Row'
import  {Col} from '../CommonComponents';
// import { Icon } from "@iconify/react";
import { CustomButton } from "../CommonComponents";
import Vision from "./Vision";
import Mission from "./Mission";
import DashboardIcon from '@mui/icons-material/Dashboard';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const Moverdiv = styled.div`
    width:100%;
    
`;
const MoverNav = styled(Nav)`
background-image: ${({ bg }) => bg};
`;
const Moveritem = styled(Nav.Item)`
    width:33.33%;
    text-align: center;
    
    @media (min-width: 500px) and (max-width: 767px) {
        height: 50px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        height: 40px;
    }
    @media (max-width: 300px) {
        height: 30px;
    }
`;
const MoverNavlink = styled(Nav.Link)`
    padding-top: 60px;
    height: 100px;
    color: white;
    @media only screen and (min-width: 1024px) {
        padding-top: 30px;
        height: 80px;
        font-size: 15px;
    }
    @media (min-width: 767px) and (max-width: 1024px) {
        padding-top: 35px;
        height: 80px;
        font-size: 12px;
    }
    @media (min-width: 500px) and (max-width: 767px) {
        padding-top: 8px;
        height: 80px;
        font-size: 10px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        padding-top: 5px;
        height: 70px;
        font-size: 7px;
    }
    @media (max-width: 300px) {
        padding-top: 0px;
        height: 50px;
        font-size: 6px;
    }
`;
const Maindiv=styled.div`
    /* margin: 10px; */
    font-family:${({fontFamily})=> fontFamily};
    background: linear-gradient(to right, #8e9eab, #eef2f3);
    padding:20px 10px;
`;
const Welcomep=styled.h1`
    font-family: 'Gluten', cursive;
    text-align:center;
    @media only screen and (min-width: 1160px) {
        font-size: 50px;
    }
    @media (min-width: 1024px) and (max-width: 1160px) {
        font-size: 40px;
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        font-size: 30px;
    }
    @media (min-width: 500px) and (max-width: 700px) {
        font-size: 25px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        font-size: 20px;
    }
    @media (max-width: 300px) {
        font-size: 18px;
    }
`;
const Contentdiv= styled(Row)`
    margin:0;
`;
const Imagediv=styled(Col)`
    position:absoulte;
    z-index:99;
`;
const Image = styled.img`
    float: right;
    display:block;
    width:100%;
    position:relative;
    object-fit: cover;
   
    z-index: -1;
    @media only screen and (min-width: 1160px) {
        height:300px;
    }
    @media (min-width: 1024px) and (max-width: 1160px) {
        height:300px;
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        height:250px;
    }
    @media (min-width: 500px) and (max-width: 700px) {
        height:200px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        height:150px;
    }
    @media (max-width: 300px) {
        height:100px;
    }
   
`;
const Paradiv=styled(Col)`
  
`;
const Pdiv=styled.div`
    
    @media only screen and (min-width: 1160px) {
        font-size: 15px;
    }
    @media (min-width: 1024px) and (max-width: 1160px) {
        font-size: 15px;
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        font-size: 14px;
    }
    @media (min-width: 500px) and (max-width: 700px) {
        font-size: 13px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        font-size: 12px;
    }
    @media (max-width: 300px) {
        font-size: 11px;
    }
`;
const MoreButton = styled(CustomButton)`
  margin: 5px 0px 10px 10px;
  font-size: 12px;
  width:80px;
`;
// const MoverIcon = styled(Icon)`
//   cursor: pointer;
//   width: 20px;
//   height: 20px;
//   ::hover {
//     color: red;
//   }
// `;

function Mover(){
    const { theme, light, dark, fonts } = useContext(ThemeContext);
    // console.log(fonts);
    const current_theme = theme ? light : dark;
    const [Index,setIndex]=useState(0);
    const [open, setOpen] = useState(false);
    const [button_name, setName] = useState("More");
    return(
        <Moverdiv id="visionMission"> 
            <MoverNav bg={current_theme.ui} defaultActiveKey="/"  >
            <Moveritem >
                <MoverNavlink  eventKey="link-0" onClick={()=>{setIndex(0)}}><DashboardIcon fontSize="small"/><br/>OverView</MoverNavlink>
            </Moveritem>
            <Moveritem>
                <MoverNavlink eventKey="link-1" onClick={()=>{setIndex(1)}}><VisibilityIcon fontSize="small"/><br/>Vision</MoverNavlink>
            </Moveritem>
            <Moveritem>
            <MoverNavlink eventKey="link-2" onClick={()=>{setIndex(2)}}><TrackChangesIcon fontSize="small"/><br/>Mission</MoverNavlink>
            </Moveritem>
            </MoverNav>
            <div hidden={Index !== 0}>
                <Maindiv fontFamily={fonts.general}>
                    <Welcomep>Industrial Placement Office(IPO)</Welcomep> <hr/>
                  <Contentdiv >
                  <Imagediv md={5}  sm={12} xs={12} mt={2} >
                    <Image
                    src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    fluid
                    />
                    
                  </Imagediv>
                  <Paradiv md={7}  sm={12} xs={12} mt={2}>
                  
                      <Pdiv><br/>
                            The Professional Development Unit (PDU) is intended to develop effective and collaborative
                            professional services through academic and industry involvement in curriculum development to
                            meet the changing knowledge, skills, and technological requirements of the workplace. Our
                            primary function is to improve the quality and relevance of higher education to produce a
                            SMART industry workforce through applied research using the most recent technological
                            innovations and industry practices.  
                            <br/><br/>
                            The PDU primarily intervenes in the provision of career
                            development services, the establishment of university-industry relations, the development of
                            alumni networks, and other professional-related services. We create an environment in which
                            students can define their career interests while being prepared to handle the working norms of
                            industry and commerce in both the public and private sectors.  
                      </Pdiv>    
                  </Paradiv>
                 
                <Collapse in={open}>
                  <Pdiv><br/>
                    We are on the verge of launching
                    an effective collaboration between industry and faculty to solicit assistance for business
                    start-ups, innovations through corporate venture capital, and corporate acceleration.<br/>
                  </Pdiv>
                </Collapse>
                <MoreButton apply onClick={() => {
                    setOpen(!open);
                    setName(button_name === "More" ? "Less" : "More");
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}>{button_name}</MoreButton>
                </Contentdiv>
                </Maindiv>
            </div>
            <div hidden={Index !== 1}>
                <Vision/>
            </div>
            <div hidden={Index !== 2}>
                <Mission/>
            </div>
        </Moverdiv>
        
    );
}
export default Mover;