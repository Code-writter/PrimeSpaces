import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Thomas Smith",
            role: "Sales Manager",
            text: "I was looking for a real estate agent who could handle my specific needs. PrimeSpaces delivered beyond expectations.",
            img: "https://i.pravatar.cc/150?img=11"
        },
        {
            id: 2,
            name: "Olivia Rhye",
            role: "Product Designer",
            text: "The consultation phase was incredibly helpful. They helped me see the potential in my property I hadn't noticed.",
            img: "https://i.pravatar.cc/150?img=5"
        },
        {
            id: 3,
            name: "John Doe",
            role: "Entrepreneur",
            text: "Fast, professional, and reliable. I highly recommend their marketing services for any property listing.",
            img: "https://i.pravatar.cc/150?img=3"
        },
        {
            id: 4,
            name: "Mary Rosamund",
            role: "Civil Engineer",
            text: "A truly premium experience from start to finish. The team is knowledgeable and very supportive.",
            img: "https://i.pravatar.cc/150?img=9"
        }
    ];

    return (
        <section id="testimonials" style={styles.section}>
            <div className="container" style={styles.container}>
                <h2 style={styles.heading}>Happy Clients</h2>
                <div style={styles.grid}>
                    {testimonials.map((item) => (
                        <div key={item.id} style={styles.card}>
                            <img src={item.img} alt={item.name} style={styles.avatar} />
                            <p style={styles.text}>"{item.text}"</p>
                            <h4 style={styles.name}>{item.name}</h4>
                            <span style={styles.role}>{item.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    section: {
        padding: 'var(--spacing-xl) 0',
        backgroundColor: 'var(--color-white)',
    },
    container: {
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    },
    heading: {
        fontSize: '2rem',
        color: 'var(--color-primary)',
        marginBottom: '3rem',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '2rem',
    },
    card: {
        padding: '2rem',
        backgroundColor: 'var(--color-bg-light)',
        borderRadius: '8px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },
    avatar: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '1rem',
        border: '3px solid var(--color-white)',
        boxShadow: 'var(--shadow-sm)',
    },
    text: {
        fontStyle: 'italic',
        color: 'var(--color-text-light)',
        marginBottom: '1rem',
        fontSize: '0.9rem',
    },
    name: {
        color: 'var(--color-primary)',
        marginBottom: '0.2rem',
    },
    role: {
        fontSize: '0.8rem',
        color: 'var(--color-accent)',
        textTransform: 'uppercase',
        letterSpacing: '1px',
    },
};

export default Testimonials;
