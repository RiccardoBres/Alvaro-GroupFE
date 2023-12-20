import React from 'react';
import Slider from 'react-slick';
import IntroCarousel from '../CarouselEventMolecules/IntroCarousel';
import CustomImage from '../../Atoms/CustomImage';
import { Container } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventCarousel.css';

const EventCarousel = ({ events }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
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
                    <div key={index} className="carousel-content">
                        <CustomTitle text={event.name} />
                        <hr className='w-100'/>
                        <div className='intro-car-desci'>
                            <CustomImage
                                src={event.image}
                                alt={event.title}
                                className="image-event"
                            />
                            <IntroCarousel eventsData={event} />
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default EventCarousel;
