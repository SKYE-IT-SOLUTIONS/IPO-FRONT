// third party imports
import React, { useState, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import Collapse from "react-bootstrap/Collapse";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
import Row from 'react-bootstrap/Row'
import  {Col} from './CommonComponents';
import { CustomButton } from "./CommonComponents";
// import { Icon } from "@iconify/react";

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
   
`;
const Maindiv=styled.div`
    margin: 10px;
`;
const Welcomep=styled.h1`
    font-family: 'Gluten', cursive;
    font-size: 50px;
    text-align:center;
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
    height:300px;
    z-index: -1;
   
`;
const Paradiv=styled(Col)`

`;
const MoreButton = styled(CustomButton)`
  margin: 5px 0px 10px 10px;
  font-size: 12px;
  width:80px;
`;
function Mover(){
    const { theme, light, dark, fonts } = useContext(ThemeContext);
    console.log(fonts);
    const current_theme = theme ? light : dark;
    const [Index,setIndex]=useState(0);
    const [open, setOpen] = useState(false);
    const [button_name, setName] = useState("More");
    return(
        <Moverdiv> 
            <MoverNav bg={current_theme.ui} defaultActiveKey="/"  >
            <Moveritem>
                <MoverNavlink onClick={()=>{setIndex(0)}} >Home</MoverNavlink>
            </Moveritem>
            <Moveritem>
                <MoverNavlink eventKey="link-1" onClick={()=>{setIndex(1)}}>Vision</MoverNavlink>
            </Moveritem>
            <Moveritem>
            <MoverNavlink eventKey="link-2" onClick={()=>{setIndex(2)}}>Mission</MoverNavlink>
            </Moveritem>
            </MoverNav>
            <div hidden={Index !== 0}>
                <Maindiv>
                    <Welcomep>Industrial Placement Office(IPO)</Welcomep> <hr/>
                  <Contentdiv >
                  <Imagediv md={5}  sm={12} xs={6} mt={2} >
                    <Image
                    src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                    fluid
                    />
                    {/* Map Section */}
                  </Imagediv>
                  <Paradiv md={7}  sm={12} xs={6} mt={2}>
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
                  </Paradiv>
                  <br />
                <Collapse in={open}>
                  <div>
                      From its inception in year 2004, it has been engaged in
                      various activities which involves different fields and
                      different people in the field of Agriculture. The office
                      is ran by an Industrial Placement Officer, Under direct
                      supervision of Dean, Faculty of Agriculture. Having
                      fruitful relationships is all that matters in our
                      services. Therefore, for us, you are important than
                      anything else. Please feel free to contact us.
                  </div>
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
                content2
            </div>
            <div hidden={Index !== 2}>
                content3
            </div>
        </Moverdiv>
        
    );
}
export default Mover;