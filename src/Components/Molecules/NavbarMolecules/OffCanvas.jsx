import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';

const OffCanvas = ({ show, onHide }) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement="start" className="bg-dark w-50">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='color-light'>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column align-items-start'>
                <Nav className="me-auto d-flex flex-column">
                    <Nav.Link className='color-light' href="#home">Home</Nav.Link>
                    <Nav.Link className='color-light' href="#merch">Merch</Nav.Link>
                    <Nav.Link className='color-light' href="#video">Video</Nav.Link>
                    <Nav.Link className='color-light' href="#contact">Contact</Nav.Link>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvas
