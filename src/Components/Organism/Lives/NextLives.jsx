import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row, Spinner } from 'react-bootstrap';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import CustomTitle from '../../Atoms/CustomTitle';
import { getEvents, allEvents, isLoading } from '../../../States/EventState';
import Live from '../../Molecules/CarouselEventMolecules/Lives';
import './Lives.css';
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomParagraph from '../../Atoms/CustomParagraph';
import EventCarousel from '../../Molecules/CarouselEventMolecules/EventCarousel';

const NextLives = () => {
    const dispatch = useDispatch();
    const { events = [] } = useSelector(allEvents) || {};
    const loading = useSelector(isLoading);

    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

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
                    <Col lg={12} md={12} sm={12}>
                        <>
                            <CustomTitle text='GROUP NAME' className='title' />
                            <Live events={upcomingEvents} />
                        </>
                    </Col>
                </Row>
            ) : upcomingEvents.length > 0 ? (
                <Row>
                    <CustomTitle text='GROUP NAME' className='title mb-1' />
                    <Live events={upcomingEvents}/>
                </Row>
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
