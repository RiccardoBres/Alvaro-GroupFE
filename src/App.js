import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import ReservedPage from './Pages/Reserved Area/ReservedPage';
import MerchandisingPage from './Pages/Mechandising/MerchandisingPage';
import MerchandisingList from './Pages/Mechandising/MerchandisingList';
import PaymentsPage from './Pages/Payments/PaymentsPage';
import LivesPage from './Pages/Lives/LivesPage';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="reserved" element={<ReservedPage />} />
                <Route path="merchandising/:merchId" element={<MerchandisingPage />} />
                <Route path="merchandising" element={<MerchandisingList />} />
                <Route path="live" element={<LivesPage />} />
                <Route path="purchase" element={<PaymentsPage />} />
            </Routes>
            <ScrollToTop />
        </Router>
    );
}

export default App;
