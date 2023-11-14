import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import SocialIconsFooter from '../../Molecules/FooterMolecules/SocialIconsFooter';

const Footer = () => {
    return (
        <footer className="mt-auto bg-dark">
            <Container fluid>
                <Row>
                    <Col lg={6} md={6} sm={6}>
                        <SocialIconsFooter />
                    </Col>
                    <Col lg={6} md={6} sm={6}>
                        <SocialIconsFooter />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;

