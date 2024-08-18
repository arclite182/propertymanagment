import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Stories from './pages/Stories';
import Teams from './pages/Teams';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/about/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/properties" element={<Properties />} />
                <Route path="/stories" element={<Stories />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}

export default App;