import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

const Intro = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <h1>
                            Design led work
                            <br/>
                            spaces
                        </h1>
                    </Col>
                    <Col>
                        <p>Find the office that’s right for you. With beautifully designed Work Spaces and flexible contracts, you can find a home for your business, and access over 40 lounges whether you’re an established organisation or new venture.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Intro;