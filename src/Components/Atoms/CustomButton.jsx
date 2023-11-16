import React from 'react';
import './CustomButton.css'

const CustomButton = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;

{/*
 <CustomButton text="Clicca Qui" onClick={handleClick} className="****" />
 */}