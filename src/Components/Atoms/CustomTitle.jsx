import React from 'react';

const CustomTitle = ({ text, className, onClick }) => {

  return (
    <h2 className={className} onClick={onClick}>
      {text}
    </h2>
  );
}

export default CustomTitle;

