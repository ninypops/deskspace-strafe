import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap/';

// gallery
import { galleryImages } from '../constants/galleryImages';

const Gallery = () => {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Carousel>
                        { galleryImages.map((g, index) =>
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={g.src}
                                    alt={g.src}
                                />                          
                            </Carousel.Item> 
                        )}
                </Carousel>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default Gallery;