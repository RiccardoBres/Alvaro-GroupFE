import React from 'react';
import EventForm from '../../Molecules/ReservedAreaMolecules/EventForm';
import MerchandiseForm from '../../Molecules/ReservedAreaMolecules/MerchandiseForm';
import { Col, Row, Container } from 'react-bootstrap';
import OrderResume from '../../Molecules/ReservedAreaMolecules/OrderResume';
import './ReservedPage.css'

const HomeReservedPage = () => {
    return (
        <>
            <Container fluid className='reserved-page-container'>
                <Row>
                        <Col lg={6} md={6} sm={12} className='col-reserved-form'>
                            <EventForm />
                            <MerchandiseForm />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                           <OrderResume/> 
                        </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomeReservedPage
