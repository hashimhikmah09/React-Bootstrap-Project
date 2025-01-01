import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Banner from "../components/Banner/Banner";
import img1 from '../asset/images/img1.png';
import Blackandwhite from "../components/GetStarted/GetStarted";
//import Cards from "../components/Cards/Cards";
import Merch from "../components/MerchandiseCategory/Merch";
import CardSection from "../components/Cards/CardRender";
import Books from "../components/Books/Books";
import JoinTeamSection from "../components/JoinTeam/JoinTeam";
import BuildSmallCards from "../components/SmallCards/SmallCards";
import MoreSection from "../components/More/More";
import OtherCard from "../components/joinOthers/joinOthers";
//import Footer from "../components/Footer/footer";
// import Book1 from "../components/Books/Book1";
// import Book2 from "../components/Books/Book2";


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
                <Row className="mb-4">
                    <Col xs={12}>
                        <Blackandwhite />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={12}>
                        <CardSection />
                    </Col>
                </Row>

                <Row className="mb-4">
                    <Col xs={12}>
                        <Merch />
                    </Col>
                </Row>

                {/* Books Row with spacing and full width */}
                <Row className="w-100 mb-4">
                    <Col xs={12}>
                        <Books />
                    </Col>
                
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <JoinTeamSection />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <BuildSmallCards />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <MoreSection />
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <OtherCard />
                    </Col>
                </Row>
               
            </Container>
            {/* // <Footer /> */}
            
        </div>
    );
}

export default Blog;