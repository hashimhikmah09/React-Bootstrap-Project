import React from "react";
import { NavLink } from 'react-router-dom';
import Group from '../../asset/images/Group.svg';
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import SocialMediaBar from "../SocialMedia/social";

const BaseCode = () => {
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col md={3}>
                        <Navbar.Brand as={NavLink} to="/" className='branded'>
                            <img src={Group} className='img-fluid img' alt='Group'/>
                        </Navbar.Brand>
                        <div className="pt-5">
                            <SocialMediaBar />
                        </div>
                    </Col>
                    <Col md={2}>
                        <h6>Company</h6>
                        <Nav className="flex-column">
                            <Nav.Link href="#about" className="text-black">
                                About Us
                            </Nav.Link>
                            <Nav.Link href="#contact" className="text-black">
                                Contact Us
                            </Nav.Link>
                            <Nav.Link href="#contact" className="text-black">
                                FAQ
                            </Nav.Link>
                            <Nav.Link href="#contact" className="text-black">
                                Platforms
                            </Nav.Link>
                        </Nav>
                    </Col>
                    <Col md={2}>
                        <h6>Product</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
 
export default BaseCode;