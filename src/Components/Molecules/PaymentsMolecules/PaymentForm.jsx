import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import './PaymentsMolecules.css';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [address, setAddress] = useState('');
    const [postal, setPostal] = useState('');
    const [city, setCity] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        if (email !== confirmEmail) {
            setError('Incorrect email address');
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { token, error } = await stripe.createToken(cardElement, { name });

        if (error) {
            setError(error.message);
        } else {
            console.log('Token:', token);
            const paymentInfo = {
                token,
                name,
                email,
                address,
                postal,
                city,
            };
            console.log('Payment Information:', paymentInfo);
        }
    };

    return (
        <>
            <form className="payment-form" onSubmit={handleSubmit}>
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
                    Card details
                    <CardElement className="StripeElement" />
                </label>
                <div className="error-message">{error}</div>
                <CustomButton type="submit" className="pay-button" disabled={!stripe} text='Pay' />
            </form>
        </>
    );
};

export default PaymentForm;
