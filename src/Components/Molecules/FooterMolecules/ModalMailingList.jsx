import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CustomButton from '../../Atoms/CustomButton';
import {useDispatch, useSelector} from 'react-redux'
import { unsubscribeFromMailing } from '../../../States/MailingState';
import CustomInput from '../../Atoms/CustomInput';
import CustomParagraph from '../../Atoms/CustomParagraph';

const ModalMailingList = ({ show, handleClose }) => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleUnsubscribe = () => {
       dispatch(unsubscribeFromMailing(email))
       setEmail("")
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Unsubscribe Mailing List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CustomParagraph text='To unsubscribe from our mailing list, please enter your email address below:' />
                <CustomInput
                    type='email'
                    placeholder='Enter your email address'
                    value={email}
                    onChange={handleEmailChange}
                />
                <CustomParagraph text='By unsubscribing, you will no longer receive updates and promotional materials from us.' />
                <CustomParagraph text='Please note that it may take a few days for the changes to take effect.' />
                <CustomParagraph text='For more details, please refer to our Terms and Conditions and Privacy Policy.' />
            </Modal.Body>
            <Modal.Footer>
                <CustomButton text='Close' onClick={handleClose} />
                <CustomButton text='Unsubscribe' onClick={handleUnsubscribe} />
            </Modal.Footer>
        </Modal>
    );
};

export default ModalMailingList;
