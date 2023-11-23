import React from 'react';
import { Offcanvas ,Nav } from 'react-bootstrap';
import '../../Organism/Navbar/Navbar.css';
import CartList from './CartList';


const OffCanvasCart = ({ show, onHide }) => {
    return (
        <Offcanvas show={show} onHide={onHide} placement="end" className="bg-light w-25">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='color-light'>Carrello</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column align-items-start'>
                <Nav className="me-auto d-flex flex-column">
                    <CartList/>
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvasCart
