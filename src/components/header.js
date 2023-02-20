import React from 'react';
import { Row, Col } from 'react-bootstrap/';

const Header = () => {
    return (
        <React.Fragment>
            {/* <Container> */}
                <Row>
                    <Col>Logo</Col>
                    <Col>Item 1</Col>
                    <Col>Item 2</Col>
                    <Col>Item 3</Col>
                    <Col>Item 4</Col>
                    <Col xs={6}>CTA</Col>
                </Row>
            {/* </Container> */}
        </React.Fragment>
    )
}

export default Header;