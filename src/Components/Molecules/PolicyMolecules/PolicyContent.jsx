import React from 'react';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import './Policy.css'


const PolicyContent = () => {
    return (
        <div className='container-policy '>
            <CustomTitle text='Group Name' className='title-policy' />
            <CustomTitle text='Privacy Policy' />
            <CustomParagraph text='Last Updated: [Date]' />
            <CustomParagraph text='Welcome to the [Group Name] Privacy Policy. This policy outlines how we collect, use, and protect your personal information when you visit our website, make purchases, or subscribe to our newsletter. By using our services, you agree to the terms outlined in this policy.' />
            <CustomTitle text='1. Information We Collect' />
            <CustomParagraph text='1.1 Personal Information' />
            <CustomParagraph text='When you make a purchase or subscribe to our newsletter, we may collect personal information such as your name, email address, shipping address, and payment details. We use this information for order processing, communication, and to provide you with updates.' />
            <CustomParagraph text='1.2 Usage Data' />
            <CustomParagraph text='We may also collect non-personal information, such as your IP address, browser type, and device information, to improve our website and tailor our content to your preferences.' />
            <CustomTitle text='2. How We Use Your Information' />
            <CustomParagraph text='2.1 Order Processing' />
            <CustomParagraph text='We use your personal information to process orders, send order confirmations, and provide updates on your purchases.' />

            <CustomParagraph text='2.2 Newsletter Subscription' />
            <CustomParagraph text='If you subscribe to our newsletter, we will use your email address to send you updates, promotional materials, and other relevant information. You can opt-out of these communications at any time.' />

            <CustomTitle text='3. Data Security' />
            <CustomParagraph text='We take appropriate measures to ensure the security of your personal information. However, please note that no method of transmission over the internet or electronic storage is completely secure.' />

            <CustomTitle text='4. Third-Party Services' />
            <CustomParagraph text='We may use third-party services, such as payment processors and newsletter platforms, to facilitate our services. These third parties have their own privacy policies, and we recommend reviewing their terms and practices.' />

            <CustomTitle text='5. Your Rights' />
            <CustomParagraph text='You have the right to access, correct, or delete your personal information. If you have any questions or requests regarding your data, please contact us at [contact email].' />

            <CustomTitle text='6. Changes to this Policy' />
            <CustomParagraph text='We reserve the right to update this privacy policy. Any changes will be posted on this page, and the effective date will be indicated at the top of the policy.' />

            <CustomParagraph text='By using our website, you agree to the terms of this privacy policy. If you do not agree with the policy, please do not use our services.' />
        </div>
    );
};

export default PolicyContent;
