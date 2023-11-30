import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allMerch, getMerch } from '../../../States/MerchState';
import { addToCart, removeFromCart, resetCart, selectTotalItems, selectCartItems } from '../../../States/CarrelState';
import { Container, Col, Row } from 'react-bootstrap';
import './MerchandisingSection.css';
import CardMerch from '../../Molecules/CardMerchMolecule/CardMerch';
import { useNavigate } from 'react-router-dom';


const MerchandisingSection = () => {
    const dispatch = useDispatch();
    const { merchandising } = useSelector(allMerch);
    const navigate = useNavigate();

    const handleNavigate = (item) => {
        navigate(`/merchandising/${item._id}`)
    }


    useEffect(() => {
        dispatch(getMerch());
    }, []);

    return (
        <>
            <Container fluid>
                <Row className='row-merch'>
                    <div className="container-merch">
                        {Array.isArray(merchandising) &&
                            merchandising.slice(0, 10).map((merch) => (
                                <Col lg={3} key={merch._id} md={4} sm={6} className='col-merch-img mb-5'>
                                    <CardMerch merchData={merch} onClick={() => handleNavigate(merch)} />
                                </Col>
                            ))}
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default MerchandisingSection;

