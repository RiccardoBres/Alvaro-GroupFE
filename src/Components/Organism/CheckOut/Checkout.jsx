import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CustomTitle from '../../Atoms/CustomTitle';
import PaymentForm from '../../Molecules/PaymentsMolecules/PaymentForm';
import ResumCart from '../../Molecules/PaymentsMolecules/ResumCart';
import './Checkout.css'

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Checkout = () => {
    return (
        <Container fluid className='container-payments-page'>
            <Row className='w-100'>
            <CustomTitle text='Group Name' className='title-payments' />
                <Col lg={6} md={6} sm={6}>
                    <Elements stripe={stripePromise}>
                        <PaymentForm />
                    </Elements>
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <ResumCart/>
                </Col>
            </Row>
        </Container>
    );
};

export default Checkout;
