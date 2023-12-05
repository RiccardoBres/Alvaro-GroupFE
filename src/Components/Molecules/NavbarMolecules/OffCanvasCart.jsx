import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Offcanvas } from 'react-bootstrap';
import '../../Organism/Navbar/Navbar.css';
import './NavbarMolecules.css';
import { selectTotalItems, totalPrice, isCartOpen, setCartClose, selectCartItems, resetCart} from '../../../States/CarrelState';
import CartList from './CartList';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const OffCanvasCart = () => {
    const totalItems = useSelector(selectTotalItems);
    const totalItemsPrice = useSelector(totalPrice);
    const cartOpen = useSelector((state) => isCartOpen(state));
    const cartItems = useSelector(selectCartItems);
    const [localCartOpen, setLocalCartOpen] = useState(false);
    const dispatch = useDispatch();

    const handleResetCart = () => {
        dispatch(resetCart());
    };

    const handleClose = () => {
        dispatch(setCartClose());
        console.log(cartOpen);
    };

    return (
        <Offcanvas show={localCartOpen || cartOpen} onHide={handleClose} placement="end" className="offCanvas-cart">
            <Offcanvas.Header className='header-offCanvas-cart'>
                <FontAwesomeIcon className='icon-cart' icon={faShoppingCart} />
                <button className={`close-button hide-on-large-screen`} onClick={handleClose}>
                    &times;
                </button>
            </Offcanvas.Header>
            <Offcanvas.Body className='body-offCanvas'>
                <CartList />
                <div className="footer-offCanvas">
                    <div className="info-cart">
                        <CustomParagraph text={'Total amount:' + ' ' + totalItemsPrice + '$'} />
                        <CustomParagraph text={'Total elements:' + ' ' + totalItems} />
                    </div>
                    {cartItems.length > 0 ? <CustomButton onClick={handleResetCart} text='Reset' /> : null}
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

export default OffCanvasCart;
