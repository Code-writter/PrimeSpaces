import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  clientName: {
        type: String,
        required: [true, 'Client name is required'],
        trim: true
    },
  designation: {
        type: String,
        required: [true, 'Client designation is required'], // e.g., CEO, Designer
        trim: true
    },
  description: {
        type: String,
        required: [true, 'Client testimonial/description is required'],
        trim: true
    },
  clientImage: {
        type: String,
        required: [true, 'Client image URL is required']
    }
}, { timestamps: true });

const Client = mongoose.model('Client', clientSchema);
export default Client;
