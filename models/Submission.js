import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  formData: {
    type: Object,
    required: true,
  },
  generatedResponse: {
    type: Object,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);
