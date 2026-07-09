import mongoose from 'mongoose';

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    default: ''
  },
  category: {
    type: String,
    trim: true,
    default: 'General'
  },
  embedCode: {
    type: String,
    required: true,
    trim: true
  },
  videoId: {
    type: String,
    required: true,
    trim: true
  },
  thumbnail: {
    type: String,
    trim: true,
    default: ''
  },
  sortOrder: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'published'
  }
}, {
  timestamps: true
});

const Video = mongoose.model('Video', videoSchema);

export default Video;
