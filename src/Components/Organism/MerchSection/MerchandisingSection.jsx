import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allMerch, getMerch, isMerchLoading } from '../../../States/MerchState';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import './MerchandisingSection.css';
import CardMerch from '../../Molecules/CardMerchMolecule/CardMerch';
import { useNavigate } from 'react-router-dom';

const MerchandisingSection = () => {
    const dispatch = useDispatch();
    const { merchandising } = useSelector(allMerch);
    const loading = useSelector(isMerchLoading);
    const navigate = useNavigate();

    const handleNavigate = (item) => {
        const itemCopy = { ...item };
        navigate(`/merchandising/${itemCopy._id}`);
    };

    useEffect(() => {
        dispatch(getMerch());
    }, []);

    return (
        <>
            <Container fluid>
                <Row className='row-merch'>
                    <div className="container-merch">
                        {loading ? (
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        ) : (
                            Array.isArray(merchandising) &&
                            merchandising.slice(0, 10).map((merch) => (
                                <Col lg={3} key={merch._id} md={4} sm={6} className='col-merch-img mb-5'>
                                    <CardMerch merchData={merch} onClick={() => handleNavigate(merch)} />
                                </Col>
                            ))
                        )}
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default MerchandisingSection;
