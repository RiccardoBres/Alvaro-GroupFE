import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMerchById, resetMerch, selectedMerch } from '../../../States/MerchState';
import { addToCart } from '../../../States/CarrelState';
import CustomImage from '../../Atoms/CustomImage';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import { Col, Row, Container } from 'react-bootstrap';
import loremIpsum from '../../../Layout/Assets/lorem';
import CustomButton from '../../Atoms/CustomButton';
import './MerchandisingSection.css'
import { nanoid } from '@reduxjs/toolkit';

const PageMerch = ({ merchId }) => {
    const dispatch = useDispatch();
    const merchDetails = useSelector((state) => selectedMerch(state));
    const handleCart = (item) => {
        dispatch(addToCart({ id: item._id, name: item.name, price: item.price, image: item.image }));
        console.log(item._id);
    };

    useEffect(() => {
        if (merchId) {
            dispatch(getMerchById(merchId));
            console.log(merchId);
        }
        dispatch(resetMerch());

    }, [dispatch, merchId]);

    return (
        <Container fluid className='container-details-merch'>
            <CustomTitle text='GROUP NAME' />
            <Row>
                {merchDetails &&
                    <>
                        <Col lg={6} key={nanoid()} md={6} sm={12} className='col-image'>
                            <CustomImage src={merchDetails.image} />
                        </Col>
                        <Col lg={6} key={nanoid()} md={6} sm={12} className='col-details'>
                            <div className="container-descr-details">
                                <CustomParagraph text={merchDetails.name} />
                                <CustomParagraph text={'€' + merchDetails.price} />
                                <CustomButton
                                    text='Add to cart'
                                    onClick={() => handleCart(merchDetails)}
                                    className='w-100'
                                />
                                <CustomParagraph text={merchDetails.description} className='author-description' />
                            </div>
                        </Col>
                    </>
                }
            </Row>
        </Container>
    );
};

export default PageMerch;
