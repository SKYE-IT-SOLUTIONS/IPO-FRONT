import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Mover from '../components/Mover'
import NewsList from '../containers/NewsList'
import ContactUs from '../components/ContactUs'
import Subscription from '../components/Subscription'
import { Container,Row,Col } from '../components/CommonComponents'
import SponsorList from '../components/SponsorList'
import MapView from '../components/MapView'
import { styled } from '@mui/material/styles';

const Colm = styled(Col)`
padding:0;
background-color: #265782;

   @media only screen and (min-width: 1024px) {
    height: 450px;
  }
  @media (min-width: 920px) and (max-width: 1024px) {
    height: 475px;
  }
  @media (min-width: 770px) and (max-width: 920px) {
    height: 493px;
  }
  @media (min-width: 300px) and (max-width: 770px) {
    height: 200px;
  }
  @media (max-width: 300px) {
    height: 200px;
  }
`;
export default function HomeContent() {
    return (
        <>
            <ImageSlider />
            <Mover />
            <SponsorList/>
            <NewsList/>
            <Container fluid>
                <Row style={{backgroundColor:"#F0FFFF",}}>
                    {/* <ContactUs/> */}
                    <Subscription/>
                    {/* <Colm md={4} >
                        <MapView/>
                    </Colm> */}
                </Row>
            </Container>
        </>
    )
}
