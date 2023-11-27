import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventCarousel from '../../Molecules/CarouselEventMolecules/EventCarousel';
import { Container, Col, Row } from 'react-bootstrap';
import { getEvents, allEvents } from '../../../States/EventState';
import CustomTitle from '../../Atoms/CustomTitle';
import './CarouselEvent.css'

const CarouselEvent = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(allEvents);

  useEffect(() => {
    dispatch(getEvents())
  }, [])

  return (
    <>
      <Container fluid className='carousel-section'>
          <CustomTitle text='Live Dates' className='event-title'/>
            {Array.isArray(events)  && <EventCarousel events={events} />}
      </Container>
    </>
  )
}

export default CarouselEvent
