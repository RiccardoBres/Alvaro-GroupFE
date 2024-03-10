import React from 'react';
import './NavbarMolecules.css';
import CustomTitle from '../../Atoms/CustomTitle';
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
        <CustomTitle onClick={handleHome} text="HOME" className="title-nav" />
        <CustomTitle text="MERCHANDISING" onClick={handleMerch} className="title-nav" />
        <CustomTitle text="LIVE" onClick={handleLive} className="title-nav" />
        <CustomTitle text="CONTACT" onClick={handleContacts} className="title-nav" />
        {session.isAuthenticated == true ? <CustomTitle text='Logout' className="title-nav" onClick={handleLogout}/> : null }
      </div>
    </>
  )
}

export default NavbarTitles
