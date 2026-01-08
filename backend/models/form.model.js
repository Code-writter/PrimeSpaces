import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email address is required'],
    lowercase: true,
    trim: true,
    // Simple regex for basic email validation
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  },
  mobileNumber: {
    type: String, // String is better for phone numbers to handle '+' or '-' chars
    required: [true, 'Mobile number is required'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true
  }
}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);
export default Contact;

