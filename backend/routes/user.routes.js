import express from 'express'
import Client from '../models/user.models.js';

const client = express.Router();

client.get('/clients', async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.json(clients);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


export default client;
