import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { allCustomers, getCustomers, setOrderAsSent } from '../../../States/CustomerState';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomButton from '../../Atoms/CustomButton';
import './OrderResume.css';

const OrderResume = () => {
    const [isMerchVisible, setIsMerchVisible] = useState(false);
    const [isOrderVisible, setIsOrderVisible] = useState(false);
    const dispatch = useDispatch();
    const customerInfo = useSelector(allCustomers) || [];
    const pendingOrders = customerInfo && customerInfo.customers ? customerInfo.customers.filter(info => !info.sent) : [];
    const sentOrders = customerInfo && customerInfo.customers ? customerInfo.customers.filter(info => info.sent) : [];


    const handleMarkAsSent = (customerId) => {
        dispatch(setOrderAsSent(customerId));
    };

    const handleMerchVisible = () => {
        setIsMerchVisible(!isMerchVisible)
    }
    const handleOrderVisible = () => {
        setIsOrderVisible(!isOrderVisible)

    }
    useEffect(() => {
        dispatch(getCustomers());
    }, [dispatch]);



    return (
        <div className='container-order-resume mt-5'>
            <div className="d-flex flex-column">
                <div className="d-flex gap">
                    {
                        isOrderVisible ? (
                            <FaMinus size={30} onClick={handleOrderVisible} className='cursor-pointer' />
                        ) : (
                            <FaPlus size={30} onClick={handleOrderVisible} className='cursor-pointer' />
                        )
                    }
                    <CustomTitle text='Pending Shipment' className='title-list' />
                </div>
                <hr className='hr' />
            </div>
            <ul className='order-list p-0'>
                {isOrderVisible && pendingOrders.map(info => (
                    <li key={info._id} className='order-item'>
                        <div className='order-details'>
                            <div className="customer-details">
                                <CustomTitle text='Customer Details' />
                                <CustomParagraph text={`Name: ${info.name ?? 'N/A'}`} />
                                <CustomParagraph text={`Surname: ${info.surname ?? 'N/A'}`} />
                                <CustomParagraph text={`Email: ${info.email ?? 'N/A'}`} />
                            </div>
                            <div className="customer-product">
                                <CustomTitle text='Customer Product' />
                                <CustomParagraph text={`Product: ${info.purchases[0]?.name ?? 'N/A'}`} />
                                <CustomParagraph text={`Price: ${info.purchases[0]?.price ?? 'N/A'}`} />
                            </div>
                        </div>
                        <CustomButton
                            text='Mark as Sent'
                            onClick={() => handleMarkAsSent(info._id)}
                        />
                    </li>
                ))}
            </ul>
            <div className="d-flex flex-column">
                <div className="d-flex gap">
                    {
                        isMerchVisible ? (
                            <FaMinus size={30} onClick={handleMerchVisible} className='cursor-pointer' />
                        ) : (
                            <FaPlus size={30} onClick={handleMerchVisible} className='cursor-pointer' />
                        )
                    }
                    <CustomTitle text='Sent Orders' className='title-list' />
                </div>
                <hr className='hr' />
            </div>
            <ul className='order-list p-0 mb-5'>
                {isMerchVisible && sentOrders.map(info => (
                    <li key={info._id} className='order-item'>
                        <div className='order-details'>
                            <div className="customer-details">
                                <CustomTitle text='Customer Details' />
                                <CustomParagraph text={`Name: ${info.name ?? 'N/A'}`} />
                                <CustomParagraph text={`Surname: ${info.surname ?? 'N/A'}`} />
                                <CustomParagraph text={`Email: ${info.email ?? 'N/A'}`} />
                            </div>
                            <div className="customer-product">
                                <CustomTitle text='Customer Product' />
                                <CustomParagraph text={`Product: ${info.purchases[0]?.name ?? 'N/A'}`} />
                                <CustomParagraph text={`Price: ${info.purchases[0]?.price ?? 'N/A'}`} />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OrderResume;
