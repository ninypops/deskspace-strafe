import React from 'react';

// bootstrap components
import { Container, Row, Col } from 'react-bootstrap/';
// import Button from 'react-bootstrap/Button';

// styled components
import { TextWrapper, DarkWrapper } from '../components/styled';

// image
import heroImg from '../images/heroImage.png';

// styled components
import OfficeForm from '../components/officeForm';

const Banner = () => {
    return (
        <React.Fragment>
            <DarkWrapper>
                <Container className="mb-5">
                    <Row>
                        <Col xs={12} md={6}>
                        <TextWrapper className="mt-4">
                        <h1>Flexible
                            <br />
                            coworking
                            <br />
                            spaces
                        </h1>
                        <p className="mt-3">Find the office that’s right for you. With beautifully designed Work Spaces and flexible contracts, you can find a home for your business, and access over 40 lounges whether you’re an established organisation or new venture.</p>
                        <OfficeForm className="bannerForm" />
                        </TextWrapper>
                        </Col>
                        <Col className="imageHero d-none d-md-flex justify-content-end mb-5" xs={12} md={6}>
                            <img src={heroImg} alt="DeskSpace Coworking Space" width="500" height="550" />
                        </Col>
                    </Row>
                </Container>
            </DarkWrapper>
        </React.Fragment>
    )
}

export default Banner;