import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPurchaseItems } from '../../../States/CarrelState';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomImage from '../../Atoms/CustomImage';
import './PaymentsMolecules.css'


const ResumCart = () => {
    const cartPurchase = useSelector(selectPurchaseItems);

    console.log(cartPurchase);

    return (
        <>
            <div className='container-resume-cart'>
                <CustomTitle text='Order Summary' className='resume-cart-title' />
                {cartPurchase.map((item) => (
                    <>
                    <div className="container-image-resume">
                            <CustomImage src={item.image} />
                        </div>
                        <div key={item.id} className='container-info-resume mt-3'>
                            <div className="container-details-resume d-flex">
                                <CustomParagraph text={item.quantity + 'x'} />
                                <CustomParagraph text={item.name} />
                            </div>
                            <CustomParagraph text={'$' + (item.price * item.quantity)} />
                        </div>
                        <div className="container-info-postage">
                            <div className="container-details-shipping">
                                <CustomParagraph text='Postage & Packing' />
                                <CustomParagraph text={'$' + parseInt(item.shippingCost)} />
                            </div>
                        </div>
                        <hr className='em-resume-cart' />
                        <div className="container-info-total">
                            <div className="container-details-shipping">
                                <CustomParagraph text='Total' />
                                <CustomParagraph text={'$' + (parseInt(item.shippingCost) + (item.price * item.quantity))} />
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </>

    )
}

export default ResumCart
