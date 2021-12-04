// third party imports
import React, { useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import Row from 'react-bootstrap/Row'
import  {Col} from './CommonComponents';
import { CustomButton,Icon } from "./CommonComponents";
import Vision from "./Vision";
import Mission from "./Mission";

const Moverdiv = styled.div`
    width:100%;
    
`;
const MoverNav = styled(Nav)`
background-image: ${({ bg }) => bg};
`;
const Moveritem = styled(Nav.Item)`
    width:33.33%;
    text-align: center;
`;
const MoverNavlink = styled(Nav.Link)`
    padding-top: 60px;
    height: 100px;
    color: white;
    font-size: 15px;
    @media only screen and (min-width: 1160px) {
        padding-top: 45px;
        height: 100px;
    }

    @media (min-width: 1024px) and (max-width: 1160px) {
        padding-top: 45px;
        height: 100px;
    }

    @media (min-width: 700px) and (max-width: 1024px) {
        padding-top: 40px;
        height: 90px;
    }
    @media (min-width: 500px) and (max-width: 700px) {
        padding-top: 35px;
        height: 80px;
        font-size: 9px;
    }
    @media (min-width: 300px) and (max-width: 500px) {
        padding-top: 32px;
        height: 70px;
        font-size: 7px;
    }
    @media (max-width: 300px) {
        padding-top: 20px;
        height: 50px;
        font-size: 6px;
    }
`;
const Maindiv=styled.div`
    margin: 10px;
    font-family:${({fontFamily})=> fontFamily};
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

`;
const Imagediv=styled(Col)`

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
const MoverIcon = styled(Icon)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  ::hover {
    color: red;
  }
`;

function Mover(){
    const { theme, light, dark, fonts } = useContext(ThemeContext);

    const current_theme = theme ? light : dark;
    const [Index,setIndex]=useState(0);
    const [open, setOpen] = useState(false);
    const [button_name, setName] = useState("More");
    return(
        <Moverdiv> 
            <MoverNav bg={current_theme.ui} defaultActiveKey="/"  >
            <Moveritem >
                <MoverNavlink  eventKey="link-0" onClick={()=>{setIndex(0)}} ><MoverIcon icon= "openmoji:overview"/><br/>OverView</MoverNavlink>
            </Moveritem>
            <Moveritem>
                <MoverNavlink eventKey="link-1" onClick={()=>{setIndex(1)}}><MoverIcon icon= "bi:eye-fill"/><br/>Vision</MoverNavlink>
            </Moveritem>
            <Moveritem>
            <MoverNavlink eventKey="link-2" onClick={()=>{setIndex(2)}}><MoverIcon icon= "ant-design:aim-outlined"/><br/>Mission</MoverNavlink>
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
                    {/* Map Section */}
                  </Imagediv>
                  <Paradiv md={7}  sm={12} xs={12} mt={2}>
                      <Pdiv>
                            University of Ruhuna which is envisaged to enhance the
                            relationships with external organizations, Industries and
                            community in view of expanding the scope of the Faculty
                            and its activities.Paragraphs are the building blocks of
                            papers. Many students define paragraphs in terms of
                            length: a paragraph is a group of at least five sentences,
                            a paragraph is half a page long, etc. In reality, though,
                            the unity and coherence of ideas among sentences is what
                            constitutes a paragraph. A paragraph is defined as “a
                            group of sentences or a single sentence that forms a unit”
                            (Lunsford and Connors 116).  
                            <br/><br/>
                            Ultimately, a paragraph is a sentence or group of
                            sentences that support one main idea. In this handout, we
                            will refer to this as the “controlling idea,” because it
                            controls what happens in the rest of the paragraph.  
                      </Pdiv>    
                  </Paradiv>
                  <br />
                <Collapse in={open}>
                  <Pdiv>
                      From its inception in year 2004, it has been engaged in
                      various activities which involves different fields and
                      different people in the field of Agriculture. The office
                      is ran by an Industrial Placement Officer, Under direct
                      supervision of Dean, Faculty of Agriculture. Having
                      fruitful relationships is all that matters in our
                      services. Therefore, for us, you are important than
                      anything else. Please feel free to contact us.
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