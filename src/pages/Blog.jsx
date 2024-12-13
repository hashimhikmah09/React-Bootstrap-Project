import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner/Banner";
import img1 from '../asset/images/img1.png';
import Blackandwhite from "../components/GetStarted/GetStarted";
//import Cards from "../components/Cards/Cards";
import Merch from "../components/MerchandiseCategory/Merch";
import CardSection from "../components/Cards/CardRender";


const Blog = () => {
    return (
        <div>
            <Container className="container-custom">
                <Row className="d-flex align-items-center">
                    {/* First Column: Banner */}
                    <Col xs={12} md={6} className="text-center text-md-start">
                       <Banner />
                    </Col>
                    {/* Second Column: Image */}
                    <Col xs={12} md={6} className="d-flex justify-content-center">
                        <img src={img1} className="img-fluid responsive-img" alt="myImage" />
                    </Col>
                </Row>
            </Container>
            <Blackandwhite/>
            <CardSection/>
            <Merch/>
        </div>
    );
}

export default Blog;