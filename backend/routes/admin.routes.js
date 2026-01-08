import express from 'express'
import Subscriber  from '../models/subscriber.model.js'; // Import your Mongoose models
import Project from '../models/project.model.js';
import Client from '../models/user.models.js';
import Contact from '../models/form.model.js';

const adminRoutes = express.Router();


// 5. Add a Project

adminRoutes.post('/admin/projects', async (req, res) => {
    try {
        // NOTE: Ensure 'image' contains the URL from your cloud storage or upload logic
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 6. Add a Client
adminRoutes.post('/admin/clients', async (req, res) => {
    try {
        const client = new Client(req.body);
        await client.save();
        res.status(201).json(client);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// 7. View Contact Submissions
adminRoutes.get('/admin/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json(contacts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// 8. View Subscribers
adminRoutes.get('/admin/subscribers', async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ createdAt: -1 });
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


export default adminRoutes;