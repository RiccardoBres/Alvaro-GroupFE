import { useState, useEffect } from 'react';
import './Navbar.css';
import { Navbar, Nav, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import NavbarTitles from '../../Molecules/NavbarMolecules/NavbarTitles';
import OffCanvasCart from '../../Molecules/NavbarMolecules/OffCanvasCart';
import OffCanvas from '../../Molecules/NavbarMolecules/OffCanvas';



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
                <OffCanvas show={showNav} onHide={handleCloseNav} />
                <OffCanvasCart show={showCart} onHide={handleCloseCart} />
            </Navbar>
        </>

    );
}

export default CustomNavbar;
