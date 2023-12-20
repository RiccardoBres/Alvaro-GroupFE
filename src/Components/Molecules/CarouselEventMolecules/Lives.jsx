import React from 'react';
import Slider from 'react-slick';
import IntroCarousel from '../CarouselEventMolecules/IntroCarousel';
import CustomImage from '../../Atoms/CustomImage';
import { Container } from 'react-bootstrap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './EventCarousel.css';
import CustomParagraph from '../../Atoms/CustomParagraph';

const Live = ({ events }) => {
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
                    <div key={index} className="carousel-content">
                        <div className='intro-car-desci'>
                            <CustomImage
                                src={event.image}
                                alt={event.title}
                                className="image-event"
                            />
                            <div className="container-live-info">
                                <CustomParagraph text={event.name} />
                                <hr className='w-100 m-0'/>
                                <CustomParagraph text={event.generalInfo} />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    );
};

export default Live;

