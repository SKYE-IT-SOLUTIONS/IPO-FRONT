import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Mover from '../components/Mover'
import NewsList from '../containers/NewsList'
import ContactUs from '../components/ContactUs'
import Subscription from '../components/Subscription'
import { Container,Row,Col } from '../components/CommonComponents'

export default function HomeContent() {
    return (
        <>
            <ImageSlider />
            <Mover/>
            <NewsList/>
            <Container fluid>
                <Row>
                    <ContactUs/>
                    <Subscription/>
                </Row>
            </Container>
        </>
    )
}
