import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CustomButton from '../../Atoms/CustomButton';

const PaymentModal = ({ show, success, onClose }) => {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{success ? 'Pagamento completato' : 'Errore di pagamento'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success ? 'Il pagamento è andato a buon fine. Grazie!' : 'Si è verificato un errore durante il pagamento.'}
      </Modal.Body>
      <Modal.Footer>
        <CustomButton variant="secondary" onClick={onClose} text='Close'/>
      </Modal.Footer>
    </Modal>
  );
};

export default PaymentModal;
