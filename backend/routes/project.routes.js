import express from 'express'
import Project from '../models/project.model.js';

const projectRoutes = express.Router();

// --- PUBLIC ROUTES (Landing Page) ---

// 1. Get All Projects
projectRoutes.get('/projects', async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

export default projectRoutes;