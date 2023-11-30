import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import { getMerch, allMerch, isMerchLoading } from '../../../States/MerchState';
import CardMerch from '../../Molecules/CardMerchMolecule/CardMerch';
import './PageList.css';
import CustomButton from '../../Atoms/CustomButton';

const PageAllMerch = () => {
    const dispatch = useDispatch();
    const { merchandising, loading } = useSelector((state) => ({
        merchandising: allMerch(state).merchandising || [],
        loading: isMerchLoading(state),
    }));
    const navigate = useNavigate();
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalPages: 1,
    });
    const handleNavigate = (item) => {
        navigate(`/merchandising/${item._id}`);
    };

    useEffect(() => {
        dispatch(getMerch()).then(() => {
            const totalMerchandising = merchandising.length;
            const totalPages = Math.ceil(totalMerchandising / 8);
            setPagination({
                currentPage: 1,
                totalPages: totalPages,
            });
        });
    }, [dispatch, merchandising.length]);
    const goToPage = (page) => {
        setPagination({
            ...pagination,
            currentPage: page,
        });
    };

    const goToNextPage = () => {
        if (pagination.currentPage < pagination.totalPages) {
            goToPage(pagination.currentPage + 1);
        }
    };

    const goToPrevPage = () => {
        if (pagination.currentPage > 1) {
            goToPage(pagination.currentPage - 1);
        }
    };

    return (
        <Container fluid className='container-merch-list'>
            <CustomTitle text='GROUP NAME' className='title-merch-list' />
            {loading ? (
                <Spinner animation="border" role="status" className='loading-spinner'>
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <>
                    <Row className='row-merc-list'>
                        {merchandising &&
                            merchandising.slice(
                                (pagination.currentPage - 1) * 12,
                                pagination.currentPage * 12
                            ).map((merch) => (
                                <Col lg={3} md={4} sm={6} key={merch._id} className='col-merch-list'>
                                    <CardMerch merchData={merch} onClick={() => handleNavigate(merch)} />
                                </Col>
                            ))}
                    </Row>
                    <div className="pagination">
                        <CustomButton text='Previous' onClick={goToPrevPage} disabled={pagination.currentPage === 1}/>
                        <CustomButton text='Next' onClick={goToNextPage} disabled={pagination.currentPage === pagination.totalPages}/>
                    </div>
                </>
            )}
        </Container>
    );
};

export default PageAllMerch;
