import React from 'react';
import EventForm from '../../Molecules/ReservedAreaMolecules/EventForm';
import MerchandiseForm from '../../Molecules/ReservedAreaMolecules/MerchandiseForm';
import { Col, Row, Container } from 'react-bootstrap';
import './ReservedPage.css'

const HomeReservedPage = () => {
    return (
        <>
            <Container fluid className='reserved-page-container'>
                <Row>
                    <div className="container-form">
                        <Col lg={6} md={6} sm={12}>
                            <EventForm />
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <MerchandiseForm />
                        </Col>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default HomeReservedPage
