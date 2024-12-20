import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Comic from '../../asset/images/magazinesImg/comic.png';
import '../../asset/styles/Books1.css';

const Book1 = () => {
    return (
        <div >
            {/* FirstBook */}
            <Container fluid className="p-4">
                <Row className="magazine ">
                    {/* Content Column */}
                    <Col xs={12} md={6} className="d-flex flex-column align-items-center align-items-md-start education-text text-center text-md-start px-3 px-md-4">
                        <h3 className="fw-bold fs-4 mb-3 ">
                            Comic magazines <br /> teaching kids soft skills
                        </h3>
                        <p className="magazine-writeup mb-4">
                            We prepare young minds for an innovative<br />
                            by igniting imagination, fostering<br />
                            essential soft skills, and providing engaging<br />
                            hands-on learning experiences in coding, STEM,<br />
                            and interactive classes.
                        </p>
                        <Button variant='dark' className=" align-self-center align-self-md-start">Purchase</Button>
                    </Col>

                    {/* Image Column */}
                    <Col xs={12} md={6} className="text-center">
                        <img
                            className="comic-img img-fluid rounded mx-auto d-block"
                            src={Comic}
                            alt="Comic Magazine"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Book1;
