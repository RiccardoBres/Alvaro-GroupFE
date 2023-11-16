import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import './ReservedArea.css'

function LoginModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <CustomButton text="Apri Modale Login" onClick={handleShow} className="btn-primary" />
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <CustomTitle text="Login" className="modal-title" />
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <CustomButton text="Invia" className="btn-primary" />
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default LoginModal;
