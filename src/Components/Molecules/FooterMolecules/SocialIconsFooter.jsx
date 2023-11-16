import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './FooterMolecules.css'
import CustomParagraph from '../../Atoms/CustomParagraph';
import {useNavigate} from 'react-router-dom';

const SocialIconsFooter = () => {
    const navigate = useNavigate();
    const handleReservedArea=()=>{
        navigate('/reserved')
    }
    return (
        <>
            <div className="container-icon-footer">
                <CustomTitle text="Social Links" className="title-footer-icons" />
                <div className="d-flex justify-content-center social-icons">
                    <FontAwesomeIcon icon={faSpotify} className="icon-footer" />
                    <FontAwesomeIcon icon={faInstagram} className="icon-footer" />
                    <FontAwesomeIcon icon={faFacebook} className="icon-footer" />
                    <FontAwesomeIcon icon={faTwitter} className="icon-footer" />
                    <FontAwesomeIcon icon={faYoutube} className="icon-footer" />
                </div>
                <CustomParagraph text="Reserved Area" onClick={handleReservedArea}/>
            </div>
        </>

    )
}

export default SocialIconsFooter;
