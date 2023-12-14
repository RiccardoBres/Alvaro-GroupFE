import React from 'react'
import { Col, Row, Container } from 'react-bootstrap';
import './ContactOrganism.css'
import InfoContacts from '../../Molecules/ContactsMolecules/InfoContacts';

const ContactsOrg = () => {
    return (
        <>
            <Container fluid className='container-contact'>
                <Row>
                    <Col>
                        <InfoContacts />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ContactsOrg
