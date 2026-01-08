import express from 'express'
import Subscriber  from '../models/subscriber.model.js'; // Import your Mongoose models

const subscribeRoutes = express.Router();


// 4. Subscribe to Newsletter
subscribeRoutes.post('/subscribe', async (req, res) => {
    try {
        const newSub = new Subscriber(req.body);
        await newSub.save();
        res.status(201).json({ message: 'Subscribed successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message }); // Handles duplicate emails if unique: true
    }
});

export default subscribeRoutes;
