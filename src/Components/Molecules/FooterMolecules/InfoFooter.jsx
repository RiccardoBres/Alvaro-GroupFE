import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { useNavigate } from 'react-router-dom';
import ModalMailingList from './ModalMailingList';
import ImageGroup from '../../../Layout/Assets/EventsImage/group4.avif';
import CustomImage from '../../Atoms/CustomImage';

const InfoFooter = () => {
    const [show, setShow] = useState(false)

    const navigate = useNavigate();
    const handleReservedArea = () => {
        navigate('/reserved');
    };
    const handlePolicy =()=>{
        navigate('/policy')
    }
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <div className='container-info-footer'>
                <CustomParagraph text='Connect with us!'/>
                <div className="social-icons">
                    <FontAwesomeIcon icon={faInstagram} className="icon" onClick={() => window.open('https://www.instagram.com/', '_blank')} />
                    <FontAwesomeIcon icon={faFacebook} className="icon" onClick={() => window.open('https://www.facebook.com/', '_blank')} />
                    <FontAwesomeIcon icon={faTwitter} className="icon" onClick={() => window.open('https://twitter.com/', '_blank')} />
                </div>
                <CustomParagraph text='Or come to visit:'/>
                <CustomParagraph text='Rua Duque de Loulè, 40, Porto, Portugal' />
            </div>
            <div className='container-image-footer'>
                <CustomImage src={ImageGroup} className='image-footer'/>
            </div>
            <div className='container-info-footer-last'>
                <CustomParagraph text='To unsubscribe from our mailing list, click here' onClick={handleShow}/>
                <CustomParagraph text='Terms and Conditions' onClick={handlePolicy}/>
                <CustomParagraph text="Reserved Area" onClick={handleReservedArea} />
            </div>
            <ModalMailingList show={show} handleClose={handleClose} />
        </>
    );
};

export default InfoFooter;
