import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomImage from '../../Atoms/CustomImage';
import './NavbarMolecules.css'
import { removeFromCart, selectCartItems } from '../../../States/CarrelState';


const CartList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    return (
        <>
            <div className="container-carrel-list">
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => (
                        <div className='container-item-cart' key={item._id}>
                            <CustomImage src={item.image} className='carrell-card-image' />
                            <div className="container-image-title-cart" key={item._id}>
                                <CustomParagraph text={item.name} className='carrell-card-title' />
                                <CustomParagraph text={item.size} className='carrell-card-title' />
                                <CustomParagraph text={item.price + '$'} className='carrell-card-title' />
                                <CustomButton onClick={() => handleRemoveFromCart(item)} text='Delete' />
                            </div>
                        </div>
                    ))
                }
                {cartItems.length == 0 ? <CustomParagraph text='No product in your cart' className='text-center' /> : null}
            </div>
        </>
    );
};

export default CartList;
