import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './MailingMolecules.css';

const SocialMailingList = () => {
  return (
    <>
      <div className="container-icon">
        <CustomTitle text="Social Links" className="title-icons" />
        <div className="social-icons">
          <FontAwesomeIcon icon={faSpotify} className="icon-social" />
          <FontAwesomeIcon icon={faInstagram} className="icon-social" />
          <FontAwesomeIcon icon={faFacebook} className="icon-social" />
          <FontAwesomeIcon icon={faTwitter} className="icon-social" />
          <FontAwesomeIcon icon={faYoutube} className="icon-social" />
        </div>
      </div>
    </>

  )
}

export default SocialMailingList
