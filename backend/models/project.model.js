import mongoose from "mongoose";


const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  // Best Practice: Store the URL/Path to the image (e.g., Cloudinary URL or local path)
  // rather than the binary data itself to keep the DB light.
  image: {
    type: String, 
    required: [true, 'Project image URL is required']
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;

