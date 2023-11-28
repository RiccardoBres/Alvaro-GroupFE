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
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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
        <div className="center-carousel"> {/* Aggiungi una classe per centrare il carosello */}
            <Slider {...settings}>
                {events.map((event, index) => (
                    <div key={index} className='d-flex w-100 align-items-center justify-content-center gap-5'>
                        <IntroCarousel eventsData={event}/> 
                        <CustomImage src={event.image} alt={event.title} /> 
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default EventCarousel;
