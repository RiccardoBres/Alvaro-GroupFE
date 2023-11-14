import React from 'react';

const CustomTitle = ({ text, className }) => {

  return (
    <h2 className={className}>
      {text}
    </h2>
  );
}

export default CustomTitle;

{/* 
<CustomTitle text="Questo è un titolo" className="****" />
 */}