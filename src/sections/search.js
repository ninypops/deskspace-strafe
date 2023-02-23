import React from 'react';
import { Container } from 'react-bootstrap/';

// styled components
import OfficeForm from '../components/officeForm';

const Search = () => {
    return (
        <React.Fragment>
            <Container className="d-flex flex-column text-center search pt-5 pb-5">
                <h4 className="muted-text mt-4"><strong>With over 25 spaces across the UK</strong></h4>
                <h1 className="mt-2 mb-4">
                    Let's find your
                    <br/ >
                    new DeskSpace
                </h1>
                <OfficeForm />
            </Container>
        </React.Fragment>
    )
}

export default Search;