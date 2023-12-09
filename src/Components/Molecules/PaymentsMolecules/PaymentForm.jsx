import React, { useRef, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';
import { createPaymentIntent, PaymentIntent, isPaymentLoading, PaymentError } from '../../../States/PaymentState';
import CryptoJS from 'crypto-js';
import { Spinner } from 'react-bootstrap';
import { selectPurchaseItems } from '../../../States/CarrelState';
import { useDispatch, useSelector } from 'react-redux';
import CustomParagrapher from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import ModalPayment from './ModalPayment';
import './PaymentsMolecules.css';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const dispatch = useDispatch();
    const cartPurchase = useSelector(selectPurchaseItems);
    const errorFromRedux = useSelector(PaymentError);
    const loading = useSelector(isPaymentLoading);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [address, setAddress] = useState('');
    const [postal, setPostal] = useState('');
    const [city, setCity] = useState('');
    const [error, setError] = useState('');
    const [modalSuccess, setModalSuccess] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [modalError, setModalError] = useState(false);

    const totalAmount = Math.max(0.5, cartPurchase.reduce((acc, item) => {
        const itemTotal = parseInt(item.shippingCost) + (parseInt(item.price) * parseInt(item.quantity));
        return acc + itemTotal;
    }, 0));

    const totalAmountCents = Math.max(50, Math.round(totalAmount * 100));
    const hash = CryptoJS.SHA256(totalAmountCents.toString()).toString();

    const handleModalClose = () => {
        setModalSuccess(false);
        setModalError(false);
        resetForm();
    };
    const handleTermsChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const resetForm = () => {
        setName('');
        setSurname('');
        setEmail('');
        setConfirmEmail('');
        setAddress('');
        setPostal('');
        setCity('');
        setError('');
        const cardElement = elements.getElement(CardElement);
        if (cardElement) {
            cardElement.clear();
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements || !termsAccepted) {
            return;
        }
        if (email.current !== confirmEmail.current) {
            error.current = 'Incorrect email address';
            modalError.current = true;
            return;
        }
        const cardElement = elements.getElement(CardElement);

        try {
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: `${name.current} ${surname.current}`,
                    email: email.current,
                },
            });
            if (error) {
                error.current = error.message;
                setModalError(true);
            } else {
                await dispatch(createPaymentIntent({ totalAmountCents, hash, paymentMethodId: paymentMethod.id }));
                setModalSuccess(true);
            }
        } catch (error) {
            error.current = 'Error processing payment';
            modalError.current = true;
        }
    };


    return (
        <>
            {loading && <Spinner animation="border" variant="dark" />}
            <form className="payment-form" onSubmit={handleSubmit}>
                <CustomTitle text='User Details'/>
                <div className="general-info d-flex gap-1">
                    <CustomInput
                        className="form-input"
                        text="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <CustomInput
                        className="form-input"
                        text="Surname"
                        type="text"
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                </div>
                <div className="container-email-confirmation d-flex gap-1">
                    <CustomInput
                        className="form-input"
                        text="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <CustomInput
                        className="form-input"
                        text="Confirm email"
                        type="email"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="address-information d-flex gap-1">
                    <CustomInput
                        className="form-input"
                        text="Address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                    <CustomInput
                        className="form-input medium-input"
                        text="City"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                    <CustomInput
                        className="form-input small-input"
                        text="Postal Code"
                        type="text"
                        value={postal}
                        onChange={(e) => setPostal(e.target.value)}
                        required
                    />
                </div>
                <label className="form-label">
                <CustomTitle text='Card Details'/>
                    <CardElement className="StripeElement" />
                </label>
                <label className="form-label">
                <CustomTitle text='Privacy Information'/>
                <CustomParagrapher text='This store is managed by Group Name. Your personal information will only be used to provide the products and services you have requested, in line with the Group Name privacy policy.'/>
                </label>
                <label className="form-label">
                <CustomTitle text='Terms and Conditions '/>
                <CustomParagrapher text='Please confirm that you accept the terms and conditions'/>
                    <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={handleTermsChange}
                        required
                    />
                </label>
                <div className="error-message">{error}</div>
                <CustomButton type="submit" className="pay-button" disabled={!stripe} text='Pay' />
            </form>
            <ModalPayment show={modalSuccess || modalError} success={modalSuccess} onClose={handleModalClose} />
        </>
    );

};

export default PaymentForm;
