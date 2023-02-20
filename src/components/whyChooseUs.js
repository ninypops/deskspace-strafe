import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

const WhyChooseUs = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <h4>Why choose DeskSpace?</h4>
                </Row>
                <Row>
                    <Col>
                        <p><strong>No minimum contracts</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col>
                        <p><strong>Designed spaces</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </Col>
                    <Col>
                        <p><strong>Desirable locations</strong></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Col>
                        <p><strong>Best in class connectivity</strong></p>
                        <p>LLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default WhyChooseUs;