import React from 'react';

const CustomImage = ({ src, alt, className }) => {
  return <img src={src} alt={alt} className={className}/>;
}

export default CustomImage;

{/*
 <CustomImage src="/path-to-your-image.jpg" alt="Immagine personalizzata" className="******" />
 */}