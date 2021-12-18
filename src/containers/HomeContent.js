import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Mover from '../components/Mover'
import NewsList from '../containers/NewsList'
import ContactUs from '../components/ContactUs'
import Subscription from '../components/Subscription'
import { Container,Row,Col } from '../components/CommonComponents'
import SponsorList from '../components/SponsorList'
import MapView from '../components/MapView'

export default function HomeContent() {
    return (
        <>
            <SponsorList/>
            <NewsList/>
            <Container fluid>
                <Row>
                    <ContactUs/>
                    <Subscription/>
                    <Col md={4} lg={4} style={{padding:"0",height:"200px"}}>
                        <MapView/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
