import{useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CustomImage from '../../Atoms/CustomImage';
import './EventCarousel.css'
import IntroCarousel from './IntroCarousel';
import { Container,Row,Col } from 'react-bootstrap';

const EventCarousel = ({ events }) => {
    const [currentCard, setCurrentCard] = useState(1);
    const onSwipe = (index) => {
        setCurrentCard(index);
    };

    return (
        <Container fluid className='carousel-container'>
                    <Row className='carousel-row'>
                        <Col lg={12} md={12}>
                            <Carousel
                                showThumbs={false}
                                showArrows={true}
                                showStatus={false}
                                centerMode={true}
                                centerSlidePercentage={33.33}
                                selectedItem={currentCard}
                                onChange={onSwipe}
                            >
                                {events.map((event, index) => (
                                    <div
                                        key={index}
                                        className={`card-container ${index === currentCard ? 'main-card' : 'smaller'}`}
                                    >
                                        <CustomImage src={event.image} alt={`Immagine ${index}`} className="carousel-image" />
                                        <IntroCarousel eventsData={event} className={`${index === currentCard ? 'main-description' : 'display-none'}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
    );
};

export default EventCarousel;
