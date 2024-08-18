import React from 'react';
import Layout from '../components/Layout';

const Home = () => {
    return (
        <Layout>
            <div style={homeContainerStyle}>
                <section style={topSectionStyle}>
                    <img src="/logobayside.png" alt="Real Estate Logo" style={logoStyle} />
                </section>
                <section style={bottomSectionStyle}>
                    <div style={contentStyle}>
                        <h1 style={headingStyle}>Home Page</h1>
                        <p>This is where you can add additional content below the horizontal line.</p>
                        {/* Add more content as needed */}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

const homeContainerStyle = {
    textAlign: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/build.jpg")', // Background image
    backgroundSize: 'cover',              // Cover the entire area
    backgroundPosition: 'center',         // Center the background image
    backgroundRepeat: 'no-repeat',        // Prevent the background from repeating
};

const topSectionStyle = {
    padding: '60px 20px',
};

const logoStyle = {
    width: '60%',
    height: 'auto',
    maxWidth: '600px',
    borderRadius: '10px',
};

const bottomSectionStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: '20px',
    borderRadius: '10px',
    display: 'inline-block',   // Center content within the section
    marginTop: '20px',
};

const headingStyle = {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
};

const contentStyle = {
    color: '#555',
};

export default Home;
