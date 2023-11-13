import React from 'react';

const CustomButton = ({ text, onClick, className }) => {
  return (
    <button className={`custom-button ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default CustomButton;

{/*
 <CustomButton text="Clicca Qui" onClick={handleClick} className="custom-button-primary" />
 */}