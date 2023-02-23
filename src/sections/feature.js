import React from 'react';
import { Container, Row } from 'react-bootstrap/';

// styled components
import { DarkWrapper, FlexWrapper } from '../components/styled';

// image
import spaceFeature from '../images/spaceFeature.png';

const Feature = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                <FlexWrapper className="d-none d-md-flex flex-row flex-wrap justify-content-start feature">
                    <img
                        src={spaceFeature}
                        alt="Two professional colleagues collaborating"
                        width="100%"
                        height="auto"
                    />
                </FlexWrapper>
                <FlexWrapper className="d-sm-block d-md-flex flex-row flex-wrap justify-content-start feature">
                    <DarkWrapper className="feature">
                        <h5><strong>Space to work</strong></h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </DarkWrapper>
                </FlexWrapper>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Feature;