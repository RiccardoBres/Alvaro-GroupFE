import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomerInfo, markItemAsSent } from '../../../States/PaymentState';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import './OrderResume.css';

const OrderResume = () => {
    const dispatch = useDispatch();
    const customerInfo = useSelector(CustomerInfo);
    const [orderByDate, setOrderByDate] = useState('desc');
    const pendingOrders = customerInfo.filter(info => !info.sent);
    const sentOrders = customerInfo.filter(info => info.sent);


    const handleMarkAsSent = (paymentId) => {
        dispatch(markItemAsSent(paymentId));
    };

    return (
        <div className='container-order-resume mt-5'>
            <CustomTitle text='Pending Shipment' />
            <ul className='order-list'>
                {pendingOrders.map(info => (
                    <li key={info.paymentId} className='order-item'>
                        <div className='order-details'>
                            <CustomParagraph text={`Name: ${info.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Surname: ${info.surname ?? 'N/A'}`} />
                            <CustomParagraph text={`Email: ${info.email ?? 'N/A'}`} />
                            <CustomParagraph text={`Address: ${info.address ?? 'N/A'}`} />
                            <CustomParagraph text={`Postal: ${info.postal ?? 'N/A'}`} />
                            <CustomParagraph text={`Product: ${info.product?.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Price: ${info.product?.price ?? 'N/A'}`} />
                        </div>
                        <CustomButton
                            text='Mark as Sent'
                            onClick={() => handleMarkAsSent(info.paymentId)}
                        />
                    </li>
                ))}
            </ul>
            <CustomTitle text='Sent Orders' />
                <ul className='order-list'>
                {sentOrders.map(info => (
                    <li key={info.paymentId} className='order-item'>
                        <div className='order-details'>
                            <CustomParagraph text={`Name: ${info.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Surname: ${info.surname ?? 'N/A'}`} />
                            <CustomParagraph text={`Email: ${info.email ?? 'N/A'}`} />
                            <CustomParagraph text={`Product: ${info.product?.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Price: ${info.product?.price ?? 'N/A'}`} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderResume;
