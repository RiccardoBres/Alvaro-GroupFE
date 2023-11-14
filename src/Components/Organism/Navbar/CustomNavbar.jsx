import { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import NavbarTitles from '../../Molecules/NavbarMolecules/NavbarTitles';



const CustomNavbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className={`nav-size customNav ${scrolled ? 'scrolled' : ''}`}>
                <Container fluid className='m-0'>
                    <Navbar.Toggle className='color-light' aria-controls="responsive-navbar-nav color-light" onClick={handleShowNav} />
                    <Navbar.Collapse id="responsive-navbar-nav display-none" className="d-none d-lg-flex">
                        <Nav className="me-auto">
                            <NavbarTitles />
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes" onClick={handleShowCart}>
                            <FontAwesomeIcon className='color-light' icon={faShoppingCart} />
                        </Nav.Link>
                    </Nav>
                </Container>
                <Offcanvas show={showNav} onHide={handleCloseNav} placement="start" className="bg-dark w-50">
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
                <Offcanvas show={showCart} onHide={handleCloseCart} placement="end" className="bg-dark w-25">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className='color-light'>Carrello</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column align-items-start'>
                        <Nav className="me-auto d-flex flex-column">
                            <Nav.Link className='color-light' href="#item1">Articolo 1</Nav.Link>
                            <Nav.Link className='color-light' href="#item2">Articolo 2</Nav.Link>
                            <Nav.Link className='color-light' href="#item3">Articolo 3</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </Navbar>
        </>

    );
}

export default CustomNavbar;
