import React from 'react';
import './NavbarMolecules.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import {useNavigate} from 'react-router-dom';
import { useSession, logout } from '../../../Middleware/ProtectedRoutes';

const NavbarTitles = () => {
  const navigate = useNavigate();
  const session = useSession();
  const handleHome =()=>{navigate('/')};
  const handleMerch =()=>(navigate('/merchandising'));
  const handleLive =()=>(navigate('/live'))
  const handleContacts =()=>(navigate('/contacts'))
  const handleLogout = () => {
    logout();
    navigate('/');
   };
  return (
    <>
      <div className="container-titles-navbar">
        <CustomParagraph onClick={handleHome} text="HOME" className="title-nav" />
        <CustomParagraph text="MERCHANDISING" onClick={handleMerch} className="title-nav" />
        <CustomParagraph text="LIVE" onClick={handleLive} className="title-nav" />
        <CustomParagraph text="CONTACT" onClick={handleContacts} className="title-nav" />
        {session.isAuthenticated == true ? <CustomParagraph text='Logout' className="title-nav" onClick={handleLogout}/> : null }
      </div>
    </>
  )
}

export default NavbarTitles
