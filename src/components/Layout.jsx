import React from 'react';
import Header from './Header'; // Adjust the path as needed
import Footer from './Footer'; // Adjust the path as needed

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;