import React from 'react';
import './NavbarMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import {useNavigate} from 'react-router-dom';

const NavbarTitles = () => {
  const navigate = useNavigate();
  const handleHome =()=>{navigate('/')}
  const handleMerch =()=>(navigate('/merchandising'))
  const handleLive =()=>(navigate('/live'))
  return (
    <>
      <div className="container-titles-navbar">
        <CustomParagraph onClick={handleHome} text="Home" className="title-nav" />
        <CustomParagraph text="Merch" onClick={handleMerch} className="title-nav" />
        <CustomParagraph text="Live" onClick={handleLive} className="title-nav" />
        <CustomParagraph text="Video" className="title-nav" />
        <CustomParagraph text="Contact" className="title-nav" />
      </div>
    </>
  )
}

export default NavbarTitles
