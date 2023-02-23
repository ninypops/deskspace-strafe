import React from 'react';
import { Container, Row, Col } from 'react-bootstrap/';

import logoFacebook from '../images/brand-logos/logoFacebook.png';
import logoGoogle from '../images/brand-logos/logoGoogle.png';
import logoPinterest from '../images/brand-logos/logoPinterest.png';
import logoTikTok from '../images/brand-logos/logoTikTok.png';
import logoYouTube from '../images/brand-logos/logoYouTube.png';

const Brands = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <p><strong>The world's leading brands choose DeskSpace</strong></p>
                </Row>
                <Row>
                    <Col>
                        <img src={logoGoogle} alt="Google" width="80"/>
                    </Col>
                    <Col>
                        <img src={logoFacebook} alt="Facebook" width="80"/>
                    </Col>
                    <Col>
                        <img src={logoPinterest} alt="Pinterest" width="80"/>
                    </Col>
                    <Col>
                        <img src={logoTikTok} alt="TikTok" width="80"/>
                    </Col>
                    <Col>
                        <img src={logoYouTube} alt="YouTube" width="80"/>
                    </Col>
                    <Col>
                        <img src={logoFacebook} alt="Facebook" width="80"/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Brands;