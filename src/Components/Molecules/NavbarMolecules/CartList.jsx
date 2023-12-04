import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import CustomImage from '../../Atoms/CustomImage';
import './NavbarMolecules.css'
import { removeFromCart, selectCartItems } from '../../../States/CarrelState';


const CartList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const cartItems = useSelector(selectCartItems);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };
    const handleBuyItem = ()=>{
        navigate('/purchase')
    }

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
                                <div className="button-cart-d-b">
                                    <CustomButton onClick={() => handleRemoveFromCart(item)} text='Delete' />
                                    <CustomButton onClick={handleBuyItem} text='Buy' />
                                </div>
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
