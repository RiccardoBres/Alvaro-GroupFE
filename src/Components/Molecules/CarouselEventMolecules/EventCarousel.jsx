import React from 'react';
import Slider from 'react-slick';
import { Card } from 'react-bootstrap';
import IntroCarousel from '../CarouselEventMolecules/IntroCarousel'
import CustomImage from '../../Atoms/CustomImage';
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
        arrows: false,
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
        <div className="center-carousel"> 
            <Slider {...settings}>
                {events.map((event, index) => (
                    <div key={index} className='intro-car-desci'>
                        <IntroCarousel eventsData={event}/> 
                        <CustomImage src={event.image} alt={event.title} className='image-event' /> 
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EventCarousel;
