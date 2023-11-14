import React from 'react';

const CustomParagraph = ({ text, className }) => {
  
  return (
    <p className={className}>
      {text}
    </p>
  );
}

export default CustomParagraph;

{/* 
<CustomParagraph text="Questo è un paragrafo" className="****" />
 */}
