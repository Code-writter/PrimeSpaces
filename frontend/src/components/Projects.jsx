import React, { useState, useEffect } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/projects/projects');
                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error("Error fetching projects:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading projects...</div>;

    return (
        <section id="projects" style={styles.section}>
            <div className="container" style={styles.container}>
                <div style={styles.header}>
                    <h2 style={styles.heading}>Our Projects</h2>
                    <p style={styles.subheading}>
                        We know what buyers are looking for and suggest projects that will bring clients top dollar.
                    </p>
                </div>

                {error && <div style={{ color: 'red', textAlign: 'center' }}>Error: {error}</div>}

                {!loading && !error && projects.length === 0 && (
                    <p style={{ textAlign: 'center' }}>No projects found. Check back soon!</p>
                )}

                <div style={styles.grid}>
                    {projects.map((project) => (
                        <div key={project._id} style={styles.card}>
                            <div style={styles.imageWrapper}>
                                <img
                                    src={project.image || "https://placehold.co/600x400?text=Project"}
                                    alt={project.projectName}
                                    style={styles.image}
                                    onError={(e) => { e.target.src = "https://placehold.co/600x400?text=No+Image" }}
                                />
                            </div>
                            <div style={styles.cardContent}>
                                <h3 style={styles.projectTitle}>{project.projectName}</h3>
                                <p style={styles.projectDesc}>{project.description}</p>
                                <button className="btn btn-outline" style={{ marginTop: '1rem' }}>
                                    View Details
                                </button>
                            </div>
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
        backgroundColor: 'var(--color-bg-light)',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
    },
    header: {
        textAlign: 'center',
        marginBottom: '3rem',
    },
    heading: {
        fontSize: '2.5rem',
        color: 'var(--color-primary)',
        marginBottom: '1rem',
    },
    subheading: {
        color: 'var(--color-text-light)',
        maxWidth: '600px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '2rem',
    },
    card: {
        backgroundColor: 'var(--color-white)',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-md)',
        transition: 'transform 0.3s ease',
    },
    imageWrapper: {
        height: '250px',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
    },
    cardContent: {
        padding: '1.5rem',
    },
    projectTitle: {
        color: 'var(--color-primary-dark)',
        marginBottom: '0.5rem',
    },
    projectDesc: {
        color: 'var(--color-text-light)',
        fontSize: '0.95rem',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
    },
};

export default Projects;
