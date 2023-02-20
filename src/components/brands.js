import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

const Brands = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <p>The world's leading brands choose DeskSpace</p>
                </Row>
                <Row>
                    <Col>Logo 1</Col>
                    <Col>Logo 2</Col>
                    <Col>Logo 3</Col>
                    <Col>Logo 4</Col>
                    <Col>Logo 5</Col>
                    <Col>Logo 6</Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Brands;