import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas, Nav } from 'react-bootstrap';
import '../../Organism/Navbar/Navbar.css';
import './NavbarMolecules.css';
import { selectTotalItems, totalPrice, isCartOpen, setCartClose } from '../../../States/CarrelState';
import CartList from './CartList';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const OffCanvasCart = ({ show, onHide }) => {
    const totalItems = useSelector(selectTotalItems);
    const totalItemsPrice = useSelector(totalPrice);
    const cartOpen = useSelector((state) => isCartOpen(state));
    const [localCartOpen, setLocalCartOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(setCartClose())
        console.log(cartOpen);
    };

    return (
        <Offcanvas show={localCartOpen || cartOpen} onHide={handleClose} placement="end" className="offCanvas-cart">
            <Offcanvas.Header closeButton className='header-offCanvas-cart'>
                <FontAwesomeIcon className='icon-cart' icon={faShoppingCart} />
            </Offcanvas.Header>
            <Offcanvas.Body className='d-flex flex-column align-items-start'>
                <div className="info-cart">
                    <CustomParagraph text={'Total amount:' + ' ' + totalItemsPrice + '$'} />
                    <CustomParagraph text={'Total elements:' + ' ' + totalItems} />
                </div>
                <Nav className="me-auto d-flex flex-column">
                    <CartList />
                </Nav>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvasCart
