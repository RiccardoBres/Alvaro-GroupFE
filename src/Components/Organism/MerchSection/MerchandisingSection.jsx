import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allMerch, getMerch } from '../../States/MerchState';
import { addToCart, removeFromCart, resetCart, selectTotalItems, selectCartItems } from '../../States/CarrelState';
import { Container, Col, Row } from 'react-bootstrap';
import './MerchandisingSection.css';
import CardMerch from '../../Molecules/CardMerchMolecule/CardMerch';

// ... (import rimanenti)

const MerchandisingSection = () => {
    const dispatch = useDispatch();
    const { merchandising } = useSelector(allMerch);

    const handleCart = (item) => {
        dispatch(addToCart({ id: item._id, name: item.name, price: item.price}));
        console.log(`Item added to the cart:`, item);
    };

    useEffect(() => {
        dispatch(getMerch());
    }, []);

    return (
        <>
            <Container fluid className='container-merch'>
                <Row className='row-merch'>
                    {Array.isArray(merchandising) &&
                        merchandising.map((merch) => (
                            <Col lg={3} key={merch._id} md={4} sm={2} className='col-merch-img mb-5'>
                                <CardMerch merchData={merch} onClick={() => handleCart(merch)} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default MerchandisingSection;

