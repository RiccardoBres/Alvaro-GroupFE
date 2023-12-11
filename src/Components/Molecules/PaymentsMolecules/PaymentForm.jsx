import React, { useRef, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';
import { createPaymentIntent, isPaymentLoading, PaymentError } from '../../../States/PaymentState';
import { createCustomer } from '../../../States/CustomerState';
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
    const customerInfo = useSelector((state) => state.paymentState.customerInfo);


    const [name, setName] = useState(customerInfo.name || '');
    const [surname, setSurname] = useState(customerInfo.surname || '');
    const [email, setEmail] = useState(customerInfo.email || '');
    const [confirmEmail, setConfirmEmail] = useState(customerInfo.email || '');
    const [address, setAddress] = useState(customerInfo.address || '');
    const [postal, setPostal] = useState(customerInfo.postal || '');
    const [city, setCity] = useState(customerInfo.city || '');
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

        if (!name || !surname || !email || !confirmEmail || !address || !city || !postal || !termsAccepted) {
            setError('Please fill in all required fields and accept the terms.');
            setModalError(true);
            return;
        }

        if (email !== confirmEmail) {
            setError('Incorrect email address');
            setModalError(true);
            return;
        }

        if (!stripe || !elements) {
            setError('Please fill in all required fields and accept the terms.');
            setModalError(true);
            return;
        }

        const cardElement = elements.getElement(CardElement);
        try {
            const { paymentMethod, error } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: `${name} ${surname}`,
                    email: email,
                },
            });

            if (error) {
                setError(error.message);
                setModalError(true);
            } else {
                console.log("cartPurchase:", cartPurchase);
                await dispatch(
                    createCustomer({
                        name,
                        surname,
                        email,
                        address,
                        postal,
                        city,
                        purchases: cartPurchase[0],
                    })
                );
                
                console.log('customer-created');
                await dispatch(
                    createPaymentIntent({
                        totalAmountCents,
                        hash,
                        paymentMethodId: paymentMethod.id,
                    })
                );

                setModalSuccess(true);
            }
        } catch (error) {
            setError('Error processing payment');
            setModalError(true);
        }
    };



    return (
        <>
            {loading && <Spinner animation="border" variant="dark" />}
            <form className="payment-form" onSubmit={handleSubmit}>
                <CustomTitle text='User Details' />
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
                    <CustomTitle text='Card Details' />
                    <CardElement className="StripeElement" />
                </label>
                <label className="form-label">
                    <CustomTitle text='Privacy Information' />
                    <CustomParagrapher text='This store is managed by Group Name. Your personal information will only be used to provide the products and services you have requested, in line with the Group Name privacy policy.' />
                </label>
                <label className="form-label">
                    <CustomTitle text='Terms and Conditions ' />
                    <CustomParagrapher text='Please confirm that you accept the terms and conditions' />
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
            <ModalPayment show={modalSuccess || modalError} success={modalSuccess} onClose={handleModalClose} name={name} surname={surname} email={email} error={error} />
        </>
    );

};

export default PaymentForm;
