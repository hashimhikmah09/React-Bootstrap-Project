import React from "react";
import {Container, Row, Col} from 'react-bootstrap';
import Comic from '../../asset/images/magazinesImg/comic.png';
import '../../asset/styles/Books1.css';

const Book1 = () => {
    return (
    <div>
        {/* FirstBook */}
        <div className='pt-4'>
            <Container>
                <Row className="magazine mt-4">
                    <Col md={4} className="magazine-text">
                        <h3>Comic magazines <br /> teaching kids soft skills</h3>
                        <p className="magazine-writeup">
                            We prepare young minds for an innovative
                            <br /> by igniting imagination fostering
                            <br /> essential soft skills, and providing engaging
                            <br /> hands-on learning experience in coding, STEM
                            <br /> and interactive classes.
                        </p>
                        <button className="btn btn-dark">Purchase</button>
                    </Col>
                    <Col md={8}>
                        <div className="image">
                            <img
                                className="comic-img"
                                src={Comic}
                                alt=""
                                rounded
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    );
}
 
export default Book1;