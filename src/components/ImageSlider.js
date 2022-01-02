// third party imports
import React, {  useContext } from "react";
import { Carousel } from "react-bootstrap";

//in app imports-presentational
import styled from "styled-components";
import { ThemeContext } from "../contexts/ThemeContext";
// import Image1 from "https://drive.google.com/uc?id=1qiuj5yXJsj4jTo6a5plFrE8JwZ_3FUK7&export=download"
// import Image2 from "../assets/Faculty 001.jpg"
import Image3 from "../assets/Job Fair 001.jpg"

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

  @media (min-width: 848px) and (max-width: 1024px) {
    font-size: 35px;
    top: 370px;
  }
  @media (min-width: 767px) and (max-width: 848px) {
    font-size: 35px;
    top: 394px;
  }
  @media (min-width: 500px) and (max-width: 767px) {
    font-size: 20px;
    top: 370px;
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
  // const { theme, light, dark } = useContext(ThemeContext);

  //   const current_theme = theme ? light : dark;
  //   console.log(current_theme)
 
    return(
      
        <Himage>
        <Carousel indicators="" slide="" touch="true" controls="">
          
          <Carousel.Item>
            <ImageTag
              src="https://drive.google.com/uc?id=1qiuj5yXJsj4jTo6a5plFrE8JwZ_3FUK7&export=download"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag 
              src="https://drive.google.com/uc?id=1ORDr_fXlqRWeAq_cQrJQBemEpo157zdv&export=download"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag
              src="https://drive.google.com/uc?id=1rNhV-yIsDoeEHw2AKu5n9M0iWLx00JCJ&export=download"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag
              src="https://drive.google.com/uc?id=154keKHftP8LWQAmAb2AREH44rPJhVCEA&export=download"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <ImageTag
              src="https://drive.google.com/uc?id=1bhrSyDG0vJS8lXpKIr83foWV9cNr-EE_&export=download"
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
