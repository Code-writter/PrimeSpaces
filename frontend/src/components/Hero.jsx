import React from 'react';
import heroImage from '../assets/Lead Generation Landing page (Images)/young-couple-examining-blueprints-with-real-estate-agent-while-buying-new-home 1.svg';

const Hero = () => {
    return (
        <section id="home" style={styles.hero}>
            <div className="container" style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>
                        Consultation, <br />
                        Design, <br />
                        & Marketing
                    </h1>
                    <p style={styles.subtitle}>
                        Real estate services for buying, selling, and marketing homes.
                        Consultation involves analyzing market trends to advise on optimizing property value.
                    </p>
                    <div style={styles.formBox}>
                        <h3 style={styles.formTitle}>Get a Free Consultation</h3>
                        {/* Simple form representation for visual alignment with design */}
                        <form style={styles.form}>
                            <input type="text" placeholder="Full Name" style={styles.input} />
                            <input type="email" placeholder="Email Address" style={styles.input} />
                            <button type="button" className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
                        </form>
                    </div>
                </div>
                <div style={styles.imageContainer}>
                    <img src={heroImage} alt="Consultation" style={styles.image} />
                </div>
            </div>
            {/* Decorative background elements could go here */}
        </section>
    );
};

const styles = {
    hero: {
        padding: 'var(--spacing-xl) 0',
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#f4f7fa', /* Light blue-ish gray background from design */
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--spacing-lg)',
        flexWrap: 'wrap-reverse', // Image on top on mobile if needed, or stick to flex-direction column on mobile
        position: 'relative',
        zIndex: 1,
    },
    content: {
        flex: 1,
        paddingRight: 'var(--spacing-md)',
    },
    title: {
        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
        color: 'var(--color-primary-dark)', // Or white if over image, but design shows text over image or side-by-side
        marginBottom: 'var(--spacing-md)',
        lineHeight: 1.1,
        // color: 'white', // Based on the user image, text is on the image. Let's adjust layout.
        // The design shows text OVER the image or distinct. 
        // Actually, looking at the user image, it's a full width image background with text overlay.
        // I will adjust the layout to be a background image or overlay.
        // Re-evaluating: The hero section in the user image shows a large background image with text on the left and a form on the right.
        // I shall try to mimic that.
        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
    },
    // Redefining approach for Hero to match the reference image exactly
    // The reference image has a full image background.
};

// Re-writing the component effectively to match the "Overlay" style
const HeroOverlay = () => {
    const [formData, setFormData] = React.useState({
        fullName: '',
        mobileNumber: '',
        city: '',
        email: ''
    });
    const [status, setStatus] = React.useState(''); // '', 'loading', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('http://localhost:3000/api/forms/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', mobileNumber: '', city: '', email: '' });
                alert('Thank you! We will contact you soon.');
            } else {
                const data = await response.json();
                throw new Error(data.error || 'Submission failed');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            alert('Something went wrong. Please try again.');
        } finally {
            if (status !== 'success') setStatus('');
        }
    };

    return (
        <section id="home" style={overlayStyles.section}>
            <div className="container" style={overlayStyles.container}>
                <div style={overlayStyles.textCol}>
                    <h1 style={overlayStyles.heading}>
                        Consultation, <br />
                        Design, <br />
                        & Marketing
                    </h1>
                </div>
                <div style={overlayStyles.formCol}>
                    <div style={overlayStyles.card}>
                        <h3 style={overlayStyles.cardTitle}>Get a Free Consultation</h3>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                style={overlayStyles.input}
                                required
                            />
                            <input
                                type="text"
                                name="mobileNumber"
                                placeholder="Contact number"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                style={overlayStyles.input}
                                required
                            />
                            <input
                                type="text"
                                name="city"
                                placeholder="Your Area/City"
                                value={formData.city}
                                onChange={handleChange}
                                style={overlayStyles.input}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                style={overlayStyles.input}
                                required
                            />
                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{
                                    width: '100%',
                                    marginTop: '1rem',
                                    opacity: status === 'loading' ? 0.7 : 1
                                }}
                                disabled={status === 'loading'}
                            >
                                {status === 'loading' ? 'Sending...' : 'Book Now'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
const overlayStyles = {
    section: {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("${heroImage}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        flexWrap: 'wrap',
    },
    textCol: {
        flex: 1,
        color: 'white',
        paddingRight: '2rem',
        minWidth: '300px',
    },
    heading: {
        fontSize: '3.5rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textShadow: '0 2px 10px rgba(0,0,0,0.5)',
    },
    formCol: {
        flex: '0 0 350px',
        maxWidth: '100%',
        marginTop: '2rem',
    },
    card: {
        backgroundColor: 'rgba(31, 75, 142, 0.85)', // Navy blue transparent
        padding: '2rem',
        borderRadius: '8px',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255,255,255,0.2)',
        boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
    },
    cardTitle: {
        color: 'white',
        marginBottom: '1.5rem',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '0.8rem',
        marginBottom: '1rem',
        borderRadius: '4px',
        border: '1px solid rgba(255,255,255,0.3)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: 'white',
        '::placeholder': { color: 'rgba(255,255,255,0.7)' } // Note: Pseudo-elements in inline styles don't work like this, but standard inputs are okay.
    }
}
export default HeroOverlay;
