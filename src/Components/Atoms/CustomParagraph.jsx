import React from 'react';

const CustomParagraph = ({ text, fontSize, className }) => {
  const style = { fontSize: fontSize };
  
  return (
    <p style={style} className={className}>
      {text}
    </p>
  );
}

export default CustomParagraph;

{/* 
<CustomParagraph text="Questo è un paragrafo" fontSize="16px" className="custom-paragraph" />
 */}
