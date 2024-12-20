import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import flash from '../../asset/images/magazinesImg/flash.png';
import '../../asset/styles/Books1.css';

const Book3 = () => {
    return (
        <div >
            {/* third Book */}
            <Container fluid className="p-4">
                <Row className="flash-card align-items-center g-4">
                    {/* Content Column */}
                    <Col xs={12} md={6} className="magazine-text d-flex flex-column align-items-center align-items-md-start text-center text-md-start px-3 px-md-4">
                    <h3>Awesome educational<br/> flash cards with gamified<br/> learning concepts</h3>
                        <p className="magazine-writeup mb-4">
                            We prepare young minds for an innovative<br/>by igniting imagination fostering <br/>
                         essential soft skills,and providing engaging <br/>
                         hands-on learning experience in coding,STEM
                        <br/> and interactive classes.
                        </p>
                        <Button variant='dark' className="mt-3 px-4 py-2">Purchase</Button>
                    </Col>

                    {/* Image Column */}
                    <Col xs={12} md={6} className="text-center">
                        <div className="img-wrapper">
                        <img
                            className="comic-img img-fluid rounded"
                            src={flash}
                            alt="Flash card"
                        />
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Book3;
