import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
});

const blogSchema = new mongoose.Schema({
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
    required: false,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image: {
    type: String,
    required: false
  },
  shortDescription: {
    type: String,
    required: false,
    trim: true
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
  imageAlt: {
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
  aiSeoScore: {
    type: Number,
    min: 0,
    max: 100,
    default: null
  },
  aiSeoAudit: {
    type: mongoose.Schema.Types.Mixed,
    default: null
  },
  aiSeoModel: {
    type: String,
    default: ''
  },
  aiSeoAnalyzedAt: {
    type: Date,
    default: null
  },
  content: {
    type: String,
    required: true
  },
  authorName: {
    type: String,
    required: true,
    trim: true
  },
  views: {
    type: Number,
    default: 0
  },
  faq: [faqSchema],
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'published'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
blogSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Generate slug from title if not provided
blogSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }
  next();
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
