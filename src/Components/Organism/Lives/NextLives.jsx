import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CustomTitle from '../../Atoms/CustomTitle';
import { getEvents, allEvents, isLoading } from '../../../States/EventState';
import IntroCarousel from '../../Molecules/CarouselEventMolecules/IntroCarousel';
import './Lives.css';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import EventCarousel from '../../Molecules/CarouselEventMolecules/EventCarousel'

const NextLives = () => {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => allEvents(state)) || { events: [] };
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch, events]);

    const upcomingEvents = events
        ? events
            .filter((event) => {
                const eventDate = new Date(event.date);
                const currentDate = new Date();
                return eventDate > currentDate;
            })
            .map((event, index) => ({
                ...event,
                showDescription: true,
            }))
        : [];

    return (
        <Container fluid className='container-lives'>
            {loading ? (
                <Row>
                    {upcomingEvents.map((event, index) => (
                        <Col lg={12} md={12} sm={12} key={index}>               
                                <>
                                    <CustomTitle text='GROUP NAME' className='title' />
                                    <EventCarousel events={upcomingEvents} show={true} />
                                </>
                            
                        </Col>
                    ))}
                </Row>
            ) : upcomingEvents.length > 0 ? (
                <>
                    <Row>
                            <CustomTitle text='GROUP NAME' className='title mb-1' />
                            <EventCarousel events={upcomingEvents} show={true} showInfo={false} />
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

