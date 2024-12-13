import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import cartoon1 from '../../asset/images/avatar/cartoon1.png';
import cartoon2 from '../../asset/images/avatar/cartoon2.png';
import cartoon3 from '../../asset/images/avatar/cartoon3.png';
import cartoon4 from '../../asset/images/avatar/cartoon4.png';
import cartoon5 from '../../asset/images/avatar/cartoon5.png';
import '../../asset/styles/GetStarted.css';


const Blackandwhite = () => {
    return (
        <div>
            {/* White Section */}
            <div>
                <Container className='white-section'>
                    <Row className='align-items-center bg-white white-row'>
                        <Col md={6}>
                            <h3 className="white-title p-3">
                                Unleash their creativity with<br/>
                                 coding, stem & soft skills
                            </h3>
                        </Col>
                        <Col md={6}>
                            <p className="white-description p-3">
                                We prepare young minds for an innovative future by igniting
                                imagination, fostering essential soft skills, and providing
                                engaging hands-on learning experiences in coding, STEM, and
                                interactive classes.
                            </p>
                        </Col>

                    </Row>
                </Container>
            </div>


            {/* Black Section */}
            <div >
                <Container className='black-section'>
                    <Row className='align-items-center black-row'>
                        <Col md={5}>
                            <h2 className="black-title">Join our students</h2>
                            <p className="black-description">Building NEXT GEN Innovators</p>
                            <Button variant="outline-light" className="black-btn" id="get">Get Started</Button>
                        </Col>
                        <Col md={7} className="avatars-row">
                            <img src={cartoon1} alt="Avatar 1" className="avatar" />
                            <img src={cartoon2} alt="Avatar 1" className="avatar" />
                            <img src={cartoon3} alt="Avatar 1" className="avatar" />
                            <img src={cartoon4} alt="Avatar 1" className="avatar" />
                            <img src={cartoon5} alt="Avatar 1" className="avatar" />

                            </Col>
                    </Row>
                </Container>
            </div>
        </div>
        
    );
}

export default Blackandwhite;