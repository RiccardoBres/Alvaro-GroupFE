import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './FooterOrganism.css'
import InfoFooter from '../../Molecules/FooterMolecules/InfoFooter';
import SocialIconsFooter from '../../Molecules/FooterMolecules/SocialIconsFooter';

const Footer = () => {
    return (
        <footer >
            <Container fluid className="footer-page">
                <Row className='w-100 m-0'>
                    <Col lg={12} md={12} sm={12} className='col-footer'>
                        <InfoFooter />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

