import mongoose from 'mongoose';

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  consultationMode: {
    type: String,
    enum: ['online', 'clinic'],
    required: true
  },
  preferredDate: {
    type: Date,
    required: true
  },
  preferredTime: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    trim: true,
    default: ''
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'completed'],
    default: 'new'
  }
}, {
  timestamps: true
});

const Consultation = mongoose.model('Consultation', consultationSchema);

export default Consultation;
