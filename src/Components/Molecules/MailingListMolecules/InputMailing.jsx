import { useEffect, useState } from 'react';
import './MailingMolecules.css';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';
import { addToMailing, getEmails, mailingError } from '../../../States/MailingState';
import validator from 'validator';

const InputMailing = () => {
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const error = useSelector(mailingError);

    const dispatch = useDispatch();
    const policy = "By signing up you agree to receive news and offers from GROUP NAME. You can unsubscribe at any time. For more details see the privacy policy.";

    const validateEmail = (email) => {
        return validator.isEmail(email);
    }

    const handleClick = async () => {
        if (!validateEmail(email)) {
            setModalMessage('Invalid email address');
            setShowModal(true);
            return;
        }
        try {
            await dispatch(addToMailing({ email: email }));
            setModalMessage('Email successfully subscribed!');
            setShowModal(true);
        } catch (error) {
            setModalMessage('Failed to subscribe. Please try again.');
            setShowModal(true);
        }
    }

    const handleCloseModal = () => {
        setShowModal(false);
    }
    useEffect(() => {
        dispatch(getEmails())
    }, [])

    return (
        <div className='container-mailing-input'>
            <CustomTitle text='Mailing List' className='mailing-title' />
            <div className="container-input">
                <CustomInput text='Email Address' onChange={(e) => setEmail(e.target.value)} />
                <CustomButton text="Registration" onClick={handleClick} />
            </div>
            <CustomParagraph text={policy} className='policy-text' />
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Subscription Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
                <Modal.Footer>
                    <CustomButton variant="secondary" onClick={handleCloseModal} text='Close' />
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default InputMailing;
