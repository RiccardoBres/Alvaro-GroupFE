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

const NextLives = () => {
    const dispatch = useDispatch();
    const { events } = useSelector((state) => allEvents(state)) || { events: [] };
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
                        <Swiper
                            className='carousel-swiper'
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={true}
                            autoplay={false}
                            modules={[Navigation, Pagination, Autoplay]}
                        >
                            {upcomingEvents.map((event, index) => (
                                <SwiperSlide key={index}>
                                    <Col
                                        lg={12}
                                        md={12}
                                        sm={12}
                                        className='col-lives'
                                    >
                                        <div className='container-image-intro-lives'>
                                            <CustomImage src={event.image} />
                                            <div className="container-info-live">
                                                {/* <CustomTitle text={event.name} className='text-lives' />
                                                <CustomParagraph text={event.location} className='text-lives' />
                                                <CustomParagraph text={event.generalInfo} className='text-lives' />
                                                <CustomParagraph text={event.date} className='text-lives' /> */}
                                                <IntroCarousel eventsData={event} className='live-card-info'/>
                                            </div>
                                        </div>
                                    </Col>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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

