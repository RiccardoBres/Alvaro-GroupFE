import React from 'react';
import './MailingMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomInput from '../../Atoms/CustomInput';
import CustomButton from '../../Atoms/CustomButton';

const InputMailing = () => {
    const policy = "By signing up you agree to receive news and offers from Ezra Furman. You can unsubscribe at any time. For more details see the privacy policy.";
    const handleClick=()=>{
        
    }
    return (
        <div className='container-mailing-input'>
            <CustomTitle text='Mailing List' className='mailing-title' />
            <div className="container-input">
                <CustomInput text='Indirizzo Email'/>
                <CustomButton text="Registrati" onClick={handleClick}/>
            </div>
            <CustomParagraph text={policy} className='policy-text'/>
        </div>
    )
}

export default InputMailing;

