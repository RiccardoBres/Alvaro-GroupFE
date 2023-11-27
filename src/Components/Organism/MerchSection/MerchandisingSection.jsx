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

  const handleNavigate =(item)=>{
    navigate(`/merchandising/${item._id}`)
  }


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
                                <CardMerch merchData={merch} onClick={() => handleNavigate(merch)} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </>
    );
};

export default MerchandisingSection;

