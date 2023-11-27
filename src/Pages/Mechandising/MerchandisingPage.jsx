import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import CustomNavbar from '../../../src/Components/Organism/Navbar/CustomNavbar'
import PageMerch from '../../Components/Organism/MerchSection/PageMerch';
import Footer from '../../Components/Organism/Footer/Footer';
import { useParams } from 'react-router-dom';
import { resetMerch } from '../../States/MerchState';
import MailingList from '../../Components/Organism/MailingList/MailingList';

const MerchandisingPage = () => {
    const {merchId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            resetMerch();
        };
    }, [navigate]);

    return (
        <>
            <CustomNavbar />
            <PageMerch merchId={merchId} />
            <MailingList/>
            <Footer />
        </>
    )
}

export default MerchandisingPage
