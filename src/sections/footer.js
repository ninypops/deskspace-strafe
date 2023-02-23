import React from 'react';
import { Container, Row, } from 'react-bootstrap/';

// styled components
import { DarkWrapper } from '../components/styled';

const Footer = () => {
    return (
        <React.Fragment>
            <DarkWrapper>
                <Container>
                    <Row className="mb-5">
                        <h5 className="logo footer-links"><strong>DeskSpace</strong></h5>
                        <p className="footer-links">Locations</p>
                        <p className="footer-links">Explore Spaces</p>
                        <p className="footer-links">Space Facilities</p>
                        <p className="footer-links">About</p>
                    </Row>
                    <Row>
                        <p className="footer-links">©2022 DeskSpace. All rights reserved</p>
                        <p className="footer-links info-links">Privacy Policy</p>
                        <p className="footer-links info-links">Terms & Conditions</p>
                    </Row>
                </Container>
            </DarkWrapper>
        </React.Fragment>
    )
}

export default Footer;