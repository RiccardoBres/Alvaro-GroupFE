import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ReservedPage from './Pages/Reserved Area/ReservedPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="reserved" element={<ReservedPage />} />
      </Routes>
    </Router>
  )
}

export default App

