import { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { setCartCOpen } from '../../../States/CarrelState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import NavbarTitles from '../../Molecules/NavbarMolecules/NavbarTitles';
import OffCanvasCart from '../../Molecules/NavbarMolecules/OffCanvasCart';
import OffCanvas from '../../Molecules/NavbarMolecules/OffCanvas';
import { useDispatch } from 'react-redux';



const CustomNavbar = () => {
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const dispatch = useDispatch();

    const handleCloseNav = () => setShowNav(false);
    const handleShowNav = () => setShowNav(true);
    const handleCloseCart = () => setShowCart(false);
    const handleShowCart = () => setShowCart(true);
    const handleCartOpen = () => {
        dispatch(setCartCOpen())
    }

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
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="color-light" onClick={handleShowNav}>
                        <FontAwesomeIcon
                            icon={faBars}
                            aria-controls="responsive-navbar-nav"
                            className='navbar-toggler-icon'
                            onClick={handleShowNav}
                        />              
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav" className="d-none d-lg-flex">
                        <Nav className="me-auto">
                            <NavbarTitles />
                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        <Nav.Link eventKey={2} onClick={handleCartOpen}>
                            <FontAwesomeIcon className='color-light' icon={faShoppingCart} />
                        </Nav.Link>
                    </Nav>
                </Container>
                <OffCanvas show={showNav} onHide={handleCloseNav} />
                <OffCanvasCart show={showCart} onHide={handleCloseCart} />
            </Navbar>
        </>

    );
}

export default CustomNavbar;
