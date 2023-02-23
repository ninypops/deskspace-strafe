import React from 'react';
import { Form, Button } from 'react-bootstrap/';

const OfficeForm = () => {
    return (
        <React.Fragment>
                <Form className="officeForm">
                    <fieldset className="d-sm-flex flex-row justify-content-center align-content-center">
                        <Form.Group className="dropdownWrapper">
                        <Form.Label className="muted-text mt-2" htmlFor="select">Select office location</Form.Label>
                        <Form.Select id="select">
                            <option>London</option>
                            <option>Birmingham</option>
                            <option>Manchester</option>
                            <option>Nottingham</option>
                        </Form.Select>
                        </Form.Group>
                        <Form.Group className="dropdownWrapper px-3">
                        <Form.Label className="muted-text mt-2" htmlFor="select">Select number of people</Form.Label>
                        <Form.Select id="select">
                            <option>2-5 People</option>
                            <option>6-10 People</option>
                            <option>11-25 People</option>
                            <option>26-50 People</option>
                        </Form.Select>
                        </Form.Group>
                        <Button className="primaryBtn" type="submit">Search Offices</Button>
                    </fieldset>  
                </Form>
        </React.Fragment>
    )
}

export default OfficeForm;