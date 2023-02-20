import React from 'react';
import styled from 'styled-components';

// import bootstrap components
import { Container, Row, Col } from 'react-bootstrap/';
// import Button from 'react-bootstrap/Button';

const TextWrapper = styled.div`
    text-align: left;
`;

const Banner = () => {
    return (
        <React.Fragment>
            <Container class="darkBkg">
                <Row>
                    <Col>
                    <TextWrapper>
                    <h1>Flexible
                        <br />
                        coworking
                        <br />
                        spaces
                    </h1>
                    <p>Find the office that’s right for you. With beautifully designed Work Spaces and flexible contracts, you can find a home for your business, and access over 40 lounges whether you’re an established organisation or new venture.</p>
                    </TextWrapper>
                    </Col>
                    <Col>
                        Test
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Banner;