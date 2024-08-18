import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={footerContentStyle}>
                <p style={footerTextStyle}>© 2024 Your Company Name. All rights reserved.</p>
                <div style={footerLinksStyle}>
                    <a href="/privacy-policy" style={footerLinkStyle}>Privacy Policy</a>
                    <a href="/terms-of-service" style={footerLinkStyle}>Terms of Service</a>
                    <a href="/contact" style={footerLinkStyle}>Contact</a>
                </div>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#f1f1f1', // Light gray background color
    padding: '20px 0',         // Padding for top and bottom
    color: '#333',             // Dark gray color for text
    textAlign: 'center',       // Center the text and links
    position: 'relative',      // Ensure it stays at the bottom
    width: '100%',             // Full width
};

const footerContentStyle = {
    maxWidth: '1200px',        // Maximum width to align with header
    margin: '0 auto',          // Center the content
    padding: '0 20px',         // Padding for sides
};

const footerTextStyle = {
    margin: '0',               // Remove margin
    fontSize: '1rem',          // Font size
};

const footerLinksStyle = {
    marginTop: '10px',         // Space between text and links
};

const footerLinkStyle = {
    color: '#333',             // Dark gray color for links
    textDecoration: 'none',    // Remove underline from links
    margin: '0 10px',          // Space between links
    fontSize: '0.9rem',        // Slightly smaller font size for links
};

export default Footer;
