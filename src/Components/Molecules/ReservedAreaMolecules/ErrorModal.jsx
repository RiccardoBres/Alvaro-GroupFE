import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ErrorModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Errore</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Error. Please, try again.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ErrorModal;