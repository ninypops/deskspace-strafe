import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

const WhyChooseUs = () => {
    return (
        <React.Fragment>
            <Container>
                <Row className="mb-4">
                    <h5><strong>Why choose DeskSpace?</strong></h5>
                </Row>
                <Row>
                    <Col xs={12} md ={3}>
                        <p>No minimum contracts</p>
                        <p className="muted-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col xs={12} md ={3}>
                        <p>Designed spaces</p>
                        <p className="muted-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </Col>
                    <Col xs={12} md ={3}>
                        <p>Desirable locations</p>
                        <p className="muted-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col xs={12} md ={3}>
                        <p>Best in class connectivity</p>
                        <p className="muted-text">LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default WhyChooseUs;