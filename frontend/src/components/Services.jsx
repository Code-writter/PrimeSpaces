import React from 'react';
import iconHome from '../assets/Lead Generation Landing page (Icons)/home.svg';
import iconPaint from '../assets/Lead Generation Landing page (Icons)/paintbrush-2.svg';
import iconMarketing from '../assets/Lead Generation Landing page (Icons)/circle-dollar-sign.svg';

// Images for the top section - placeholders from assets
import agent1 from '../assets/Lead Generation Landing page (Images)/pexels-brett-sayles-2881232.svg';
import agent2 from '../assets/Lead Generation Landing page (Images)/pexels-fauxels-3182834.svg';
// Assuming agent2 is the group image and agent1 is the single agent.
// The design has a collage. For simplicity and speed, I might put them in a grid or just one main image if constructing the collage is too complex with raw SVGs.
// However, I'll try to layout them side-by-side.

const Services = () => {
    return (
        <section id="services">
            {/* Not Your Average Realtor Section */}
            <div style={styles.topSection}>
                <div className="container" style={styles.container}>
                    <div style={styles.textColumn}>
                        <h2 style={styles.heading}>Not Your Average Realtor</h2>
                        <p style={styles.paragraph}>
                            We provide premium services for buying, selling, and renting.
                            Our team goes beyond just listing your property; we market it
                            to the right audience with modern strategies.
                        </p>
                    </div>
                    <div style={styles.imageColumn}>
                        {/* Collage Layout Mockup */}
                        <div style={styles.collage}>
                            <img src={agent1} alt="Agent" style={styles.agentImage1} />
                            <img src={agent2} alt="Team" style={styles.agentImage2} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div style={styles.bottomSection}>
                <div className="container" style={{ ...styles.container, flexDirection: 'column' }}>
                    <h2 style={{ ...styles.heading, textAlign: 'center', marginBottom: '3rem' }}>Why Choose Us?</h2>

                    <div style={styles.grid}>
                        <div style={styles.card}>
                            <div style={styles.iconBox}>
                                <img src={iconHome} alt="ROI" style={styles.icon} />
                            </div>
                            <h3 style={styles.cardTitle}>Potential ROI</h3>
                            <p style={styles.cardText}>
                                Identify potential ROI for your property through thorough market analysis.
                            </p>
                        </div>

                        <div style={styles.card}>
                            <div style={styles.iconBox}>
                                <img src={iconPaint} alt="Design" style={styles.icon} />
                            </div>
                            <h3 style={styles.cardTitle}>Design</h3>
                            <p style={styles.cardText}>
                                We strategize and design improvements that maximize your property's value.
                            </p>
                        </div>

                        <div style={styles.card}>
                            <div style={styles.iconBox}>
                                <img src={iconMarketing} alt="Marketing" style={styles.icon} />
                            </div>
                            <h3 style={styles.cardTitle}>Marketing</h3>
                            <p style={styles.cardText}>
                                Helping our clients understand and explain the marketing strategy effectively.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    topSection: {
        padding: 'var(--spacing-xl) 0',
        backgroundColor: 'var(--color-bg-light)',
    },
    bottomSection: {
        padding: 'var(--spacing-xl) 0',
        backgroundColor: 'var(--color-white)',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-lg)',
        flexWrap: 'wrap',
    },
    textColumn: {
        flex: 1,
        minWidth: '300px',
    },
    imageColumn: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        minWidth: '300px',
    },
    heading: {
        fontSize: '2rem',
        color: 'var(--color-primary)',
        marginBottom: '1rem',
    },
    paragraph: {
        color: 'var(--color-text-light)',
        marginBottom: '2rem',
    },
    collage: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '1rem',
        alignItems: 'center',
    },
    agentImage1: {
        borderRadius: '50%',
        width: '200px',
        height: '200px',
        objectFit: 'cover',
        border: '5px solid white',
        boxShadow: 'var(--shadow-lg)',
    },
    agentImage2: {
        borderRadius: '50%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        marginTop: '50px', // Offset
        border: '5px solid white',
        boxShadow: 'var(--shadow-lg)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
        width: '100%',
    },
    card: {
        textAlign: 'center',
        padding: '2rem',
    },
    iconBox: {
        width: '80px',
        height: '80px',
        backgroundColor: 'var(--color-bg-light)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '0 auto 1.5rem',
    },
    icon: {
        width: '40px',
        height: '40px',
    },
    cardTitle: {
        color: 'var(--color-primary)',
        marginBottom: '1rem',
    },
    cardText: {
        color: 'var(--color-text-light)',
        fontSize: '0.9rem',
    },
};

export default Services;
