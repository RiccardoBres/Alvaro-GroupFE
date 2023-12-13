import React from 'react';
import Slider from 'react-slick';
import IntroCarousel from '../CarouselEventMolecules/IntroCarousel'
import CustomImage from '../../Atoms/CustomImage';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Col, Container, Row } from 'react-bootstrap';
import './EventCarousel.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';

const EventCarousel = ({ events, show, showInfo }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <Container fluid className="center-carousel">
            <Slider {...settings}>
                {events.map((event, index) => (
                    <>
                        <Row>
                            <Col lg={showInfo ? 12 : 4} md={6} sm={6} className='col-lives'>
                                <div className='intro-car-desci'>
                                    {showInfo && <IntroCarousel eventsData={event} />}
                                    <CustomImage
                                        src={event.image}
                                        alt={event.title}
                                        className={`image-event ${showInfo ? 'image-event' : 'image-event-page'}`}
                                    />
                                </div>
                            </Col>
                            {show && (
                                <Col lg={8} md={6} sm={6} key={`${index}-general-info`} className="description-event">
                                    <CustomTitle text={event.name} />
                                    <hr />
                                    <CustomParagraph text={event.generalInfo} />
                                </Col>
                            )}
                        </Row>
                    </>

                ))}
            </Slider>
        </Container>
    );
};

export default EventCarousel;
