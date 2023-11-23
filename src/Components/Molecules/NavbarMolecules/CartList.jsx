import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, resetCart, selectCartItems, selectTotalItems } from '../../States/CarrelState';

const CartList = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const totalItems = useSelector(selectTotalItems);

    const handleRemoveFromCart = (item) => {
        dispatch(removeFromCart(item));
    };

    const handleResetCart = () => {
        dispatch(resetCart());
    };
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);
    return (
        <>
            <div className="container-carrel-list">
                {Array.isArray(cartItems) &&
                    cartItems.map((item) => (
                        <div key={item._id}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                            <button onClick={() => handleRemoveFromCart(item)}>
                                Rimuovi dal carrello
                            </button>
                        </div>
                    ))}
                <p>Totale elementi nel carrello: {totalItems}</p>
                <button onClick={handleResetCart}>Azzera il carrello</button>
            </div>
        </>
    );
};

export default CartList;
