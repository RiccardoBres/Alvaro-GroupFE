import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { faTicket, faLocationArrow, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './EventCarousel.css';

const IntroCarousel = ({ eventsData, onClick, className }) => {
    const { name, date, location } = eventsData;

    const formatDate = (isoDate) => {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        return new Date(isoDate).toLocaleDateString('it-IT', options);
    };

    const formattedDate = formatDate(date);

    return (
        <div className="info-event">
            <div className="container-location">
                <CustomParagraph text={location} />
            </div>
            <div className="container-location">
                <CustomParagraph text={formattedDate} />
            </div>
            <FontAwesomeIcon onClick={onClick} icon={faTicket} className="ticketIcon" />
        </div>
    );
};

export default IntroCarousel;
