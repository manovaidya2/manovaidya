import mongoose from 'mongoose';

const outcomeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  answer: {
    type: String,
    required: true,
    trim: true
  }
}, { _id: false });

const caseStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    trim: true,
    default: ''
  },
  duration: {
    type: String,
    trim: true,
    default: ''
  },
  image: {
    type: String,
    default: ''
  },
  imageAlt: {
    type: String,
    trim: true,
    default: ''
  },
  metaTitle: {
    type: String,
    trim: true,
    maxlength: 60,
    default: ''
  },
  metaDescription: {
    type: String,
    trim: true,
    maxlength: 160,
    default: ''
  },
  focusKeyword: {
    type: String,
    trim: true,
    default: ''
  },
  metaKeywords: {
    type: String,
    trim: true,
    default: ''
  },
  canonicalUrl: {
    type: String,
    trim: true,
    default: ''
  },
  ogTitle: {
    type: String,
    trim: true,
    default: ''
  },
  ogDescription: {
    type: String,
    trim: true,
    default: ''
  },
  ogImage: {
    type: String,
    trim: true,
    default: ''
  },
  twitterTitle: {
    type: String,
    trim: true,
    default: ''
  },
  twitterDescription: {
    type: String,
    trim: true,
    default: ''
  },
  twitterImage: {
    type: String,
    trim: true,
    default: ''
  },
  robots: {
    type: String,
    enum: ['index,follow', 'index,nofollow', 'noindex,follow', 'noindex,nofollow'],
    default: 'index,follow'
  },
  schemaMarkup: {
    type: String,
    default: ''
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    trim: true,
    default: ''
  },
  outcomes: [outcomeSchema],
  faq: [faqSchema],
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

caseStudySchema.pre('validate', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
});

const CaseStudy = mongoose.model('CaseStudy', caseStudySchema);

export default CaseStudy;
