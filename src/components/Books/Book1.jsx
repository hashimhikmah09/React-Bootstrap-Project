import React from "react";
import {Container, Row, Col, Button} from 'react-bootstrap';
import Comic from '../../asset/images/magazinesImg/comic.png';
import '../../asset/styles/Books1.css';

const Book1 = () => {
    return (
    <div>
        {/* FirstBook */}
        <div className='pt-4'>
            <Container fluid className="px-3">
                <Row className="magazine mt-4 align-items-center">
                    <Col xs={12} md={6} className="magazine-text text-center text-md-start mb-3 mb-md-0">
                        <h3>Comic magazines <br /> teaching kids soft skills</h3>
                        <p className="magazine-writeup">
                            We prepare young minds for an innovative
                            <br /> by igniting imagination fostering
                            <br /> essential soft skills, and providing engaging
                            <br /> hands-on learning experience in coding, STEM
                            <br /> and interactive classes.
                        </p>
                        <Button variant='dark' className="mt-3">Purchase</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="image">
                            <img
                                className="comic-img img-fluid mx-auto d-block"
                                src={Comic}
                                alt="Comic Magazine"
                                rounded
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
            
        </div>
        <div className="mb-4"></div>
    </div>
    );
}
 
export default Book1;