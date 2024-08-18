import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this import is at the top

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/logobayside.png" alt="Real Estate Logo" className="logo" />
            </div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/properties">Properties</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/stories">Stories</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/teams">Teams</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/careers">Careers</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                    {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li> Last item without border */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
