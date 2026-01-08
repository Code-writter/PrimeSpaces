import React from 'react';
import logo from '../assets/Lead Generation Landing page (Images)/logo.svg';

const Navbar = () => {
    return (
        <nav style={styles.nav}>
            <div className="container" style={styles.container}>
                <div style={styles.logoContainer}>
                    <img src={logo} alt="PrimeSpaces Logo" style={styles.logo} />
                </div>
                <ul style={styles.links}>
                    <li><a href="#home" style={styles.link}>Home</a></li>
                    <li><a href="#services" style={styles.link}>Services</a></li>
                    <li><a href="#projects" style={styles.link}>Projects</a></li>
                    <li><a href="#contact" style={styles.link}>Contact</a></li>
                </ul>
                <a href="#contact" className="btn btn-primary">Get a Quote</a>
            </div>
        </nav>
    );
};

const styles = {
    nav: {
        backgroundColor: 'var(--color-white)',
        boxShadow: 'var(--shadow-sm)',
        padding: '1rem 0',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '40px',
    },
    links: {
        display: 'flex',
        gap: '2rem',
        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    link: {
        fontWeight: '500',
        color: 'var(--color-text-dark)',
    },
};

export default Navbar;
