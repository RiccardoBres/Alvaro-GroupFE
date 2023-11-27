import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomImage from '../../Atoms/CustomImage';
import IntroCarousel from './IntroCarousel';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './EventCarousel.css';

const EventCarousel = ({ events }) => {
    const [currentCard, setCurrentCard] = useState(1);

    const onSwipe = (index) => {
        setCurrentCard(index);
    };

    return (
                    <Carousel
                        showThumbs={false}
                        showArrows={true}
                        showStatus={false}
                        centerMode={true}
                        centerSlidePercentage={33}
                        selectedItem={currentCard}
                        onChange={onSwipe}
                    >
                        {events.map((event, index) => (
                            <Card key={index} className={`card-container ${index === currentCard ? 'main-card' : 'smaller'}`}>
                                <CustomImage src={event.image} alt={`Image ${index}`} className="carousel-image" />
                                <IntroCarousel eventsData={event} className={`${index === currentCard ? 'main-description' : 'display-none'}`} />
                            </Card>
                        ))}
                    </Carousel>
    );
};

export default EventCarousel;
