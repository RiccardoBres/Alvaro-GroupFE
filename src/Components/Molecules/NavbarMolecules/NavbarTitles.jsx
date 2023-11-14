import React from 'react';
import './NavbarMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';

const NavbarTitles = () => {
  return (
    <>
      <div className="container-titles-navbar">
        <CustomParagraph text="Home" className="title-nav" />
        <CustomParagraph text="Merch" className="title-nav" />
        <CustomParagraph text="Video" className="title-nav" />
        <CustomParagraph text="Contact" className="title-nav" />
      </div>
    </>
  )
}

export default NavbarTitles
