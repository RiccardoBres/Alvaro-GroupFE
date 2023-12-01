import React, { useEffect } from 'react';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import { getEvents, allEvents, isLoading } from '../../../States/EventState';
import IntroCarousel from '../../Molecules/CarouselEventMolecules/IntroCarousel';
import './Lives.css';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { useDispatch, useSelector } from 'react-redux';
import CustomImage from '../../Atoms/CustomImage';

const NextLives = () => {
    const dispatch = useDispatch();
    const { events } = useSelector(allEvents);
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch, events]);

    const upcomingEvents = events
        ? events.filter((event) => {
            const eventDate = new Date(event.date);
            const currentDate = new Date();
            return eventDate > currentDate;
        })
        : [];

    return (
        <Container fluid className='container-lives'>
            {loading ? (
                <Row className="text-center">
                    <CustomTitle text='GROUP NAME' className='title' />
                    <Col lg={12} md={12} sm={12}>
                        <Spinner animation='border' role='status'>
                            <span className='sr-only'>Loading...</span>
                        </Spinner>
                    </Col>
                </Row>
            ) : upcomingEvents.length > 0 ? (
                <>
                    <Row>
                        <CustomTitle text='GROUP NAME' className='title' />
                        <div className="row-lives">
                            {upcomingEvents.map((event, index) => (
                                <Col key={index} lg={6} md={6} sm={12} className='col-lives'>
                                    <CustomImage src={event.image} />
                                    <IntroCarousel eventsData={event} />
                                </Col>
                            ))}
                        </div>
                    </Row>
                </>
            ) : (
                <Row className='lives-no-element text-center'>
                    <CustomTitle text='GROUP NAME' className='title' />
                    <Col lg={12} md={12} sm={12}>
                        <CustomParagraph text='No upcoming events scheduled' />
                        <FontAwesomeIcon icon={faTicket} className='ticketIcon-lives' />
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default NextLives;
