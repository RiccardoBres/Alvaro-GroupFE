import React from 'react';
import CustomNavbar from '../../../src/Components/Organism/Navbar/CustomNavbar'
import PageAllMerch from '../../Components/Organism/MerchSection/PageAllMerch';
import Footer from '../../Components/Organism/Footer/Footer';
import MailingList from '../../Components/Organism/MailingList/MailingList';

const MerchandisingList = () => {
   
    return (
        <>
            <CustomNavbar />
            <PageAllMerch />
            <MailingList />
            <Footer />
        </>
    )
}

export default MerchandisingList
