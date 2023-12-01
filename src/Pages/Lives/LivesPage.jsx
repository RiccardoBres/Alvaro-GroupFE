import React from 'react';
import NextLives from '../../Components/Organism/Lives/NextLives';
import CustomNavbar from '../../Components/Organism/Navbar/CustomNavbar';
import Footer from '../../Components/Organism/Footer/Footer';
import MailingList from '../../Components/Organism/MailingList/MailingList'

const LivesPage = () => {
  return (
    <>
    <CustomNavbar/>
    <NextLives/>
    <MailingList/>
    <Footer/>
    </>
  )
}

export default LivesPage
