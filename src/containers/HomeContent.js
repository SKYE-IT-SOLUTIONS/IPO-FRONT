import React from 'react'
import ImageSlider from '../components/home/ImageSlider'
import Mover from '../components/home/Mover'
import NewsList from '../containers/NewsList'
import Subscription from '../components/home/Subscription'
import { Container,Row, } from '../components/CommonComponents'
import SponsorList from '../components/home/SponsorList'

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
