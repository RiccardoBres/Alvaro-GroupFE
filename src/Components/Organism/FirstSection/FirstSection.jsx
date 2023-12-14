import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import './FirstSection.css';
import CustomImage from '../../Atoms/CustomImage';
import ImageGroup from '../../../Layout/Assets/EventsImage/group4.avif'

const FirstSection = () => {
  return (
   <>
   <Container fluid className='container-first-section'>
    <Row className='row-first-section'> 
        <Col lg={12} md={12} sm={12} className='col-first-section'>
          <CustomImage src={ImageGroup} className='image-first-section'/>
        </Col>
    </Row>
   </Container>
   </>
  )
}

export default FirstSection
