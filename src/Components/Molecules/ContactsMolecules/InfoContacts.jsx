import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'; 
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import './InfoContacts.css';

const InfoContacts = () => {
    return (
        <div className='info-contacts-container'>
            <CustomTitle text='Group Name' className='title' />

            <div className="contact-info">
                <div className="icon-contact-container">
                    <FaEnvelope className="custom-icon-contact-pg" />
                    <CustomParagraph text='For inquiries and support:' />
                </div>
                <CustomParagraph text='groupname@gmail.com' />
            </div>
            <div className="contact-info">
                <div className="icon-contact-container">
                    <FaWhatsapp className="custom-icon-contact-pg" />
                    <CustomParagraph text='Chat with us on WhatsApp:' />
                </div>
                <CustomParagraph text='+351 913 436 264' />
            </div>
        </div>
    );
}

export default InfoContacts;






