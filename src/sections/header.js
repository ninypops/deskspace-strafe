import React from 'react';
import { Row, Dropdown, Button } from 'react-bootstrap/';

// styled components
import { FlexWrapper } from '../components/styled';

const Header = () => {
    return (
        <React.Fragment>
            <Row className="navigation-header">
                <FlexWrapper className="d-sm-flex flex-row flex-wrap justify-content-start mx-3 pt-1">
                    <h5 className="logo"><strong>DeskSpace</strong></h5>
                    <Dropdown>
                        <Dropdown.Toggle variant="customToggle" id="dropdown-basic">
                            Locations
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">London</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Manchester</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Birmingham</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Nottingham</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="customToggle" id="dropdown-basic">
                            Explore Spaces
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Our Vision</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Corporate Bookings</Dropdown.Item>
                            <Dropdown.Item href="#/action-3"></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle variant="customToggle" id="dropdown-basic">
                            Space Facilities
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Coworking Space</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Meeting Rooms</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Hot Desks</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Button variant="link">
                        About
                    </Button>
                </FlexWrapper>
                <FlexWrapper className="d-sm-flex flex-row flex-wrap justify-content-end mx-3 pt-1 pb-1">
                    <button className="primaryBtn">Search Offices</button>
                </FlexWrapper>
            </Row>
        </React.Fragment>
    )
}

export default Header;