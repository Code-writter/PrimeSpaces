import express from 'express'

import Contact from '../models/form.model.js';

const formRoutes = express.Router();


// 3. Submit Contact Form
formRoutes.post('/contact', async (req, res) => {
    try {
        const newContact = new Contact(req.body);
        await newContact.save();
        res.status(201).json({ message: 'Contact submitted successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default formRoutes;