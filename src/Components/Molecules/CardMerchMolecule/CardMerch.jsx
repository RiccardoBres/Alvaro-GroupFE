import React from 'react';
import CustomImage from '../../Atoms/CustomImage';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import { } from '@fortawesome/free-brands-svg-icons';
import './CardMerch.css'

const CardMerch = ({ merchData, onClick }) => {
    const { name, size, price,image } = merchData;
    

    return (
        <>
         <div className="card-merch">
            <CustomImage src={image} alt="Immagine merch" className="merch-image" />
            <div className="merch-details">
                <CustomTitle text={name} className="merch-title" />
                <CustomParagraph text={size} className="merch-description" />
                <CustomParagraph text={price +  "$"}  className="merch-description" />
                <CustomParagraph onClick={onClick} text='Details' className="details"/>
            </div>
        </div>
        </>
    );
}

export default CardMerch;
