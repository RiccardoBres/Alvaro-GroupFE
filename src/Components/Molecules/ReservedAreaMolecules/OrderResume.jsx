import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCustomers, getCustomers, setOrderAsSent } from '../../../States/CustomerState';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import './OrderResume.css';

const OrderResume = () => {
    const dispatch = useDispatch();
    const customerInfo = useSelector(allCustomers) || [];
    const pendingOrders = customerInfo && customerInfo.customers ? customerInfo.customers.filter(info => !info.sent) : [];
    const sentOrders = customerInfo && customerInfo.customers ? customerInfo.customers.filter(info => info.sent) : [];
    

    const handleMarkAsSent = (customerId) => {
        dispatch(setOrderAsSent(customerId));
    };

    
    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch]);
    
    useEffect(() => {
        console.log("Customer data:", customerInfo);
        console.log("Pending orders:", pendingOrders);
        console.log("Sent orders:", sentOrders);
    }, [customerInfo, pendingOrders, sentOrders]);
    

    return (
        <div className='container-order-resume mt-5'>
            <CustomTitle text='Pending Shipment' />
            <ul className='order-list'>
                {pendingOrders.map(info => (
                    <li key={info.id} className='order-item'>
                        <div className='order-details' key={info.id}>
                            <CustomParagraph text={`Name: ${info.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Surname: ${info.surname ?? 'N/A'}`} />
                            <CustomParagraph text={`Email: ${info.email ?? 'N/A'}`} />
                            <CustomParagraph text={`Address: ${info.address ?? 'N/A'}`} />
                            <CustomParagraph text={`Postal: ${info.postal ?? 'N/A'}`} />
                            <CustomParagraph text={`Product: ${info.purchases[0]?.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Price: ${info.purchases[0]?.price ?? 'N/A'}`} />
                        </div>
                        <CustomButton
                            text='Mark as Sent'
                            onClick={() => handleMarkAsSent(info._id)}
                        />
                    </li>
                ))}
            </ul>
            <CustomTitle text='Sent Orders' />
            <ul className='order-list'>
                {sentOrders.map(info => (
                    <li key={info.id} className='order-item'>
                        <div className='order-details' key={info.id}>
                            <CustomParagraph text={`Name: ${info.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Surname: ${info.surname ?? 'N/A'}`} />
                            <CustomParagraph text={`Email: ${info.email ?? 'N/A'}`} />
                            <CustomParagraph text={`Product: ${info.purchases[0]?.name ?? 'N/A'}`} />
                            <CustomParagraph text={`Price: ${info.purchases[0]?.price ?? 'N/A'}`} />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderResume;
