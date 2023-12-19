import React from 'react';

const CustomParagraph = ({ text, className, onClick }) => {
  
  return (
    <p className={className} onClick={onClick}>
      {text}
    </p>
  );
}

export default CustomParagraph;


