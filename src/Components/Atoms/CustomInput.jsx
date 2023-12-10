import React from 'react';

const CustomInput = ({ text, className, type, value, onChange }) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={text}
        />
    );
};

export default CustomInput;

