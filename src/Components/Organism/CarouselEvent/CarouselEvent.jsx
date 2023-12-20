import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EventCarousel from '../../Molecules/CarouselEventMolecules/EventCarousel';
import { Container, Spinner } from 'react-bootstrap';
import { getEvents, allEvents, isLoading } from '../../../States/EventState';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import './CarouselEvent.css';

const CarouselEvent = () => {
  const dispatch = useDispatch();
  const { events } = useSelector(allEvents);
  const loading = useSelector(isLoading);

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  return (
    <>
      <Container fluid className='carousel-section'>
        <CustomTitle className='title-carousel-event' text='Group Name' />
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          Array.isArray(events) && events.length > 0 && (
            <EventCarousel events={events} showInfo={true} />
          )
        )}

        {Array.isArray(events) && events.length <= 0 && (
          <div>
            <CustomParagraph text='No upcoming events scheduled' />
            <FontAwesomeIcon icon={faTicket} className='ticketIcon-lives' />
          </div>
        )}
      </Container>
    </>
  );
};

export default CarouselEvent;
