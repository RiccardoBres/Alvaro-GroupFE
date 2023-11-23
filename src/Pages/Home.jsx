import React from 'react';
import CustomNavbar from '../Components/Organism/Navbar/CustomNavbar';
import Footer from '../Components/Organism/Footer/Footer';
import MerchandisingSection from '../Components/Organism/MerchSection/MerchandisingSection';
import VideoSection from '../Components/Organism/YoutubeSection/VideoSection';
import FirstSection from '../Components/Organism/FirstSection/FirstSection';
import CarouselEvent from '../Components/Organism/CarouselEvent/CarouselEvent';
import MailingList from '../Components/Organism/MailingList/MailingList';

const Home = () => {
  return (
    <>
    <CustomNavbar/>
    <FirstSection/>
    <VideoSection/>
    <MerchandisingSection/>
    <CarouselEvent/>
    <MailingList/>
    <Footer/>
    </>
  )
}

export default Home;
