import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Example icon
import '../../asset/styles/merch.css';


const Merch = () => {
    const categories = [
        { className: 'stem', label: 'STEM Books' },
        { className: 'skill', label: 'Soft Skills Books' },
        { className: 'code', label: 'Coding Contents' },
        { className: 'design', label: 'Creative Designs' },
        { className: 'comic', label: 'Comic Magazines' },
        { className: 'game', label: 'Game Boards' },
        { className: 'flash', label: 'Flash Cards' },
        { className: 'other', label: 'Other Merchandise' },
      ];
    return (
        <div>
            <Container className="main pt-4">
                <h3 className="container-title">Merchandise Categories</h3>
                <div className="subContainer">
                    <Row className="pt-4">
                        {categories.slice(0, 4).map((category, index) => (
                        <Col md={3} key={index}>
                            <div className={`merch ${category.className}`}>
                                <p className="book">
                                    {category.label} <FontAwesomeIcon icon={faArrowRight} />
                                </p>
                            </div>
                        </Col>
                                    ))}
                    </Row>
                    <Row className="pt-4">
                        {categories.slice(4).map((category, index) => (
        
                        <Col md={3} key={index + 4}>
                            <div className={`merch ${category.className}`}>
                                <p className="book">
                                    {category.label} <FontAwesomeIcon icon={faArrowRight} />
                                </p>
                            </div>
                        </Col> ))}
                    </Row>
                </div>
                
                
            </Container>
        </div>
    );
}
 
export default Merch;