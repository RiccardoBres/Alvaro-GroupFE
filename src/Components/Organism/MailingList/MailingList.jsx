import React from 'react';
import './MailingList.css';
import { Col, Container, Row } from 'react-bootstrap';
import InputMailing from '../../Molecules/MailingListMolecules/InputMailing';
import SocialMailingList from '../../Molecules/MailingListMolecules/SocialMailingList';

const MailingList = () => {
    return (
        <>
            <Container fluid className='container-mailing-organism'>
                <Row>
                    <Col lg={6} md={6} sm={12}>
                        <InputMailing />
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <SocialMailingList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MailingList
