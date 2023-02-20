import React from 'react';
import { Container, Row, p } from 'react-bootstrap/';

const Footer = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <p>Logo</p>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                </Row>
                <Row>
                    <p>Link 1</p>
                    <p>Link 2</p>
                    <p>Link 3</p>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Footer;