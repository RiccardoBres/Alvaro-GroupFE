import { useState } from 'react';

const CustomInput = ({ text, className }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    return (
        <>
            <input
                className={className}
                type="text"
                id="atomInput"
                value={inputValue}
                onChange={handleChange}
                placeholder={text}
            />
        </>
    )
}

export default CustomInput
