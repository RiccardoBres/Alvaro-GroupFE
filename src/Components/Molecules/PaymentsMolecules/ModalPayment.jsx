import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CustomButton from '../../Atoms/CustomButton';

const PaymentModal = ({ show, success, onClose, name, surname, email, error }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{success ? 'Payment Successful' : 'An error occurred during the payment.'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success ? `Dear ${name} ${surname}, thank you for your purchase on our website. You will receive an email at ${email} with the details of your order.` : error }
      </Modal.Body>
      <Modal.Footer>
        <CustomButton variant="secondary" onClick={onClose} text='Close'/>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;

