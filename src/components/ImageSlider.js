// third party imports
import React, { useState, useContext } from "react";
import { Carousel } from "react-bootstrap";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";

const ImageTag = styled.img`
    display:block;
    width:100%;
    position:relative;
    object-fit: cover;
    height:350px;
    z-index: -1;
  @media only screen and (min-width: 1160px) {
    height:350px;
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
const Himage = styled.div`
  width: 100%;
`;
const AnimatedText = styled.span`
  font-weight: 800;
  font-family: sans-serif;
  text-transform: uppercase;
  background: white;
  letter-spacing: 6px;
  margin-bottom: 20px;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
  animation: text 10s infinite;

  text-align: center;
  position: absolute;
  
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @keyframes text {
    0% {
      color: black;
      margin-bottom: -40px;
    }
    30% {
      letter-spacing: 20px;
      margin-bottom: -40px;
    }
    65% {
      letter-spacing: 6px;
      margin-bottom: -40px;
    }
  }
  @media only screen and (min-width: 1160px) {
    font-size: 50px;
    top: 475px;
  }

  @media (min-width: 1024px) and (max-width: 1160px) {
    font-size: 45px;
    top: 423px;
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    font-size: 35px;
    top: 394px;
  }
  @media (min-width: 500px) and (max-width: 767px) {
    font-size: 25px;
    top: 320px;
    visibility: hidden;
  }
  @media (min-width: 300px) and (max-width: 500px) {
    font-size: 20px;
    top: 270px;
    visibility: hidden;
  }
  @media (max-width: 300px) {
    font-size: 8px;
    top:220px;
    visibility: hidden;
    
  }
`;

function ImageSlider() {
  const { theme, light, dark, fonts } = useContext(ThemeContext);

    const current_theme = theme ? light : dark;
 
    return(
      
        <Himage>
        <Carousel indicators="" slide="" touch="true" controls="">
          
          <Carousel.Item>
            <ImageTag
              src="https://images.unsplash.com/photo-1594686948539-2709857f7066?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag
              src="https://images.unsplash.com/photo-1506377872008-6645d9d29ef7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
       
        <AnimatedText>
           <span>Welcome to IPO</span>
         {/* </AnimatedText>
         <AnimatedText> */}
            <br />
        </AnimatedText>
        </Himage>
         
         
       
    );
}

export default ImageSlider;
