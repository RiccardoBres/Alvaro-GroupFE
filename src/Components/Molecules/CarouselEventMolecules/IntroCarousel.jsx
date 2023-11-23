import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import '@fortawesome/free-brands-svg-icons'
import { faTicket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './EventCarousel.css'

const IntroCarousel = ({ eventsData, onClick, className}) => {
    const { name, date } = eventsData;

    return (
        <>
            <div className={className}>
                <CustomParagraph text={name} />
                <CustomParagraph text={date} />
                <FontAwesomeIcon onClick={onClick} icon={faTicket} className="ticketIcon" />
            </div>
        </>
    )
}

export default IntroCarousel
