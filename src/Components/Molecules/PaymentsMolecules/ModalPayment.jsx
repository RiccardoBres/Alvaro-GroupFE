import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CustomButton from '../../Atoms/CustomButton';

const PaymentModal = ({ show, success, onClose, name, surname, email }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{success ? 'Payment Successful' : 'Payment Error'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success ? `Dear ${name} ${surname}, thank you for your purchase on our website. You will receive an email at ${email} with the details of your order.` : 'An error occurred during the payment.'}
      </Modal.Body>
      <Modal.Footer>
        <CustomButton variant="secondary" onClick={onClose} text='Close'/>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;

