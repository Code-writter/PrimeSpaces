import mongoose from "mongoose";

const subscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required for subscription'],
    unique: true, // Prevent duplicate subscriptions
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
  }
}, { timestamps: true });

const Subscriber = mongoose.model('Subscriber', subscriberSchema);
export default Subscriber;
