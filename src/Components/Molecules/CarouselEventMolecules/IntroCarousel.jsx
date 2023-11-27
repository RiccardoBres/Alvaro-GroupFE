import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import '@fortawesome/free-brands-svg-icons'
import { faTicket, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './EventCarousel.css'

const IntroCarousel = ({ eventsData, onClick, className }) => {
    const { name, date, location } = eventsData;

    return (
        <>
            <div className={className}>
                <CustomTitle text={name} />
                <CustomParagraph text={date} />
                <div className="container-location">
                    <FontAwesomeIcon icon={faLocationArrow} className="locationIcon" />
                    <CustomParagraph text={location} />
                </div>
                <FontAwesomeIcon onClick={onClick} icon={faTicket} className="ticketIcon" />
            </div>
        </>
    )
}

export default IntroCarousel
