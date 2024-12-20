
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Books from "../components/Books/Books";


const Platform = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Books />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
 
export default Platform;