import React from 'react';
import { Nav, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './OffCanvas.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { faSpotify, faInstagram, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


const OffCanvas = ({ show, onHide }) => {
    const policy = "By signing up you agree to receive news and offers from Ezra Furman. You can unsubscribe at any time. For more details see the privacy policy.";
    const navigate = useNavigate();

    const handleHome = () => {navigate('/')};
    const handleMerch =()=>{navigate('/merchandising')};
    const handleLive =()=>{navigate('/live')};


    return (
        <Offcanvas show={show} onHide={onHide} placement="start" className="w-75">
            <Offcanvas.Body className='body-offCanvas-left'>
                <Nav className="me-auto d-flex flex-column w-100">
                    <Nav.Link className='link-ofCanvas-left' onClick={handleHome} >Home</Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' onClick={handleMerch}>Merch</Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' onClick={handleLive}>Live</Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' href="#video">Video</Nav.Link>
                    <Nav.Link className='link-ofCanvas-left' href="#contact">Contact</Nav.Link>
                </Nav>
                <div className="social-icons-offCanvas">
                    <FontAwesomeIcon icon={faSpotify} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className='container-mailing-input-left'>
                    <div className="container-input-left">
                        <CustomInput text='Indirizzo Email' />
                        <CustomButton text="Registrati"/>
                    </div>
                    <CustomParagraph text={policy} className='text-light' />
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default OffCanvas
