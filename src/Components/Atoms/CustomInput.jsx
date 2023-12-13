import React from 'react';

const CustomInput = ({ text, className, type, value, onChange, name }) => {
    return (
        <input
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={text}
            name={name}
        />
    );
};

export default CustomInput;

