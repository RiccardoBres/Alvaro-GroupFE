import React from 'react';
import CustomNavbar from '../../../src/Components/Organism/Navbar/CustomNavbar'
import MailingList from '../../Components/Organism/MailingList/MailingList';
import Footer from '../../Components/Organism/Footer/Footer';
import Checkout from '../../Components/Organism/CheckOut/Checkout';

const PaymentsPage = () => {
  return (
    <>
    <CustomNavbar/>
    <Checkout/>
    <MailingList/>
    <Footer/>
    </>
  )
}

export default PaymentsPage
