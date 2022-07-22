import React from 'react'
import ImageSlider from '../components/ImageSlider'
import Mover from '../components/Mover'
import NewsList from '../containers/NewsList'
import Subscription from '../components/Subscription'
import { Container,Row, } from '../components/CommonComponents'
import SponsorList from '../components/SponsorList'

export default function HomeContent() {
    return (
        <>
            <ImageSlider />
            <Mover />
            <SponsorList/>
            <NewsList/>
            <Container fluid>
                <Row style={{backgroundColor:"#F0FFFF",}}>
                    <Subscription/>
                </Row>
            </Container>
        </>
    )
}
