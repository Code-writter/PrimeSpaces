import React, { useState } from 'react';
import linkedinIcon from '../assets/Lead Generation Landing page (Icons)/Linkedin.svg';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('http://localhost:3000/api/subscribers/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email })
            });
            if (response.ok) {
                setStatus('success');
                setEmail('');
                alert('Subscribed successfully!');
            } else {
                throw new Error('Subscription failed');
            }
        } catch (err) {
            setStatus('error');
            console.error(err);
            alert('Failed to subscribe. Please try again.');
        } finally {
            if (status !== 'success') setStatus('');
        }
    };

    return (
        <footer style={styles.footer}>
            {/* Newsletter Section */}
            <div style={styles.newsletterSection}>
                <div className="container" style={styles.newsletterContainer}>
                    <div style={styles.newsletterText}>
                        <h3 style={styles.newsletterTitle}>Learn more about our listing process, as well as our additional staging and design work.</h3>
                    </div>
                    <div style={styles.newsletterFormWrapper}>
                        <form onSubmit={handleSubscribe} style={styles.newsletterForm}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                style={styles.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary" style={styles.button}>
                                {status === 'loading' ? '...' : 'Learn More'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Links and Copyright */}
            <div style={styles.bottomBar}>
                <div className="container" style={styles.bottomContainer}>
                    <div style={styles.links}>
                        <a href="#home" style={styles.link}>Home</a>
                        <a href="#services" style={styles.link}>Services</a>
                        <a href="#projects" style={styles.link}>Projects</a>
                        <a href="#testimonials" style={styles.link}>Testimonials</a>
                        <a href="#contact" style={styles.link}>Contact</a>
                    </div>
                    <div style={styles.socials}>
                        <a href="#" style={styles.socialLink}><img src={linkedinIcon} alt="LinkedIn" /></a>
                        {/* Placeholders for others */}
                        <span style={{ color: 'white' }}>FB</span>
                        <span style={{ color: 'white' }}>IG</span>
                    </div>
                    <div style={styles.copyright}>
                        &copy; {new Date().getFullYear()} PrimeSpaces. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#f4f7fa',
    },
    newsletterSection: {
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // Placeholder background or use asset if available. 
        // I will use a generic dark overlay or one of the assets if appropriate.
        // Let's use `pexels-brett-sayles-2881232-3.svg` as background maybe? It's large.
        // Actually, let's just stick to a dark gray specific style from the design.
        // The design shows a specific image background for "Learn more...".
        backgroundColor: '#333',
        padding: '5rem 0',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    newsletterContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    newsletterText: {
        marginBottom: '2rem',
        maxWidth: '700px',
    },
    newsletterTitle: {
        color: 'white',
        fontSize: '1.8rem',
    },
    newsletterFormWrapper: {
        width: '100%',
        maxWidth: '500px',
    },
    newsletterForm: {
        display: 'flex',
        gap: '1rem',
    },
    input: {
        flex: 1,
        padding: '12px',
        borderRadius: '4px',
        border: 'none',
        outline: 'none',
    },
    button: {
        whiteSpace: 'nowrap',
    },
    bottomBar: {
        backgroundColor: 'var(--color-primary-dark)',
        padding: '2rem 0',
        color: 'white',
    },
    bottomContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    links: {
        display: 'flex',
        gap: '1.5rem',
    },
    link: {
        color: 'rgba(255,255,255,0.8)',
        fontSize: '0.9rem',
    },
    socials: {
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
    },
    socialLink: {
        width: '20px',
        height: '20px',
        display: 'block',
    },
    copyright: {
        width: '100%',
        textAlign: 'center',
        marginTop: '1.5rem',
        fontSize: '0.8rem',
        color: 'rgba(255,255,255,0.5)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: '1rem',
    }
};

export default Footer;
