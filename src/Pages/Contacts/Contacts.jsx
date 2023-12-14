import React from 'react';
import CustomNavbar from '../../Components/Organism/Navbar/CustomNavbar';
import Footer from '../../Components/Organism/Footer/Footer';
import MailingList from '../../Components/Organism/MailingList/MailingList';
import ContactsOrg from '../../Components/Organism/ContactsOrganism/ContactsOrg';

const Contacts = () => {
    return (
        <>
            <CustomNavbar />
            <ContactsOrg />
            <MailingList />
            <Footer />
        </>
    )
}

export default Contacts
