import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Form } from 'react-bootstrap';
import { loginUser, loginLoading } from '../../../States/LoginState';
import CustomButton from '../../Atoms/CustomButton';
import { useNavigate } from 'react-router-dom';

const ModalLogin = ({ showModal, setShowModal }) => {
    const isLoading = useSelector((state)=> loginLoading.state);
    const dispatch = useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate()
    const [errorLogin, setErrorLogin] = React.useState(null);

    const handleClose = () => {
        setShowModal(false);
        setErrorLogin(null);
        navigate('/')
    };

    const handleLogin = async () => {
        try {
            const response = await dispatch(loginUser({ email, password }));
            if (response.payload === 'Invalid password') {
                setErrorLogin('Invalid password');
            } else {
                setShowModal(false);
            }
        } catch (error) {
        }
    };

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <CustomButton variant="primary" onClick={handleLogin} text={isLoading ? 'Loading...' : 'Login'} />
                <CustomButton variant="secondary" onClick={handleClose} text="Close" />
            </Modal.Footer>
        </Modal>
    );
};

export default ModalLogin;
