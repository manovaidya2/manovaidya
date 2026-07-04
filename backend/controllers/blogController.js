import Blog from '../models/Blog.js';

// Create a new blog
export const createBlog = async (req, res) => {
  try {
    const blogData = req.body;
    
    // Handle image upload
    if (req.file) {
      blogData.image = `/uploads/${req.file.filename}`;
    }

    // Parse faq if sent as string (FormData)
    if (typeof blogData.faq === 'string') {
      try {
        blogData.faq = JSON.parse(blogData.faq);
      } catch (e) {
        blogData.faq = [];
      }
    }

    // Check if slug already exists
    const existingBlog = await Blog.findOne({ slug: blogData.slug });
    if (existingBlog) {
      return res.status(400).json({
        success: false,
        message: 'A blog with this slug already exists'
      });
    }

    const blog = new Blog(blogData);
    await blog.save();

    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      data: blog
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create blog',
      error: error.message
    });
  }
};

// Get all blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: error.message
    });
  }
};

// Get single blog by slug
export const getBlogBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const blog = await Blog.findOne({ slug });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog',
      error: error.message
    });
  }
};

// Get single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      data: blog
    });
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blog',
      error: error.message
    });
  }
};

// Update blog
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    
    // Handle image upload
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }

    // Parse faq if sent as string (FormData)
    if (typeof updateData.faq === 'string') {
      try {
        updateData.faq = JSON.parse(updateData.faq);
      } catch (e) {
        updateData.faq = [];
      }
    }

    // Check if slug already exists for another blog
    if (updateData.slug) {
      const existingBlog = await Blog.findOne({ 
        slug: updateData.slug, 
        _id: { $ne: id } 
      });
      if (existingBlog) {
        return res.status(400).json({
          success: false,
          message: 'A blog with this slug already exists'
        });
      }
    }

    // Remove seo audit fields from updateData to prevent conflict with $unset
    delete updateData.aiSeoScore;
    delete updateData.aiSeoAudit;
    delete updateData.aiSeoModel;
    delete updateData.aiSeoAnalyzedAt;

    const blog = await Blog.findByIdAndUpdate(
      id,
      {
        $set: { ...updateData, updatedAt: Date.now() },
        $unset: {
          aiSeoScore: 1,
          aiSeoAudit: 1,
          aiSeoModel: 1,
          aiSeoAnalyzedAt: 1
        }
      },
      { new: true, runValidators: true }
    );

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog updated successfully',
      data: blog
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update blog',
      error: error.message
    });
  }
};

// Delete blog
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Blog deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete blog',
      error: error.message
    });
  }
};

// Get blogs by category
export const getBlogsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const blogs = await Blog.find({ category }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error('Error fetching blogs by category:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to fetch blogs',
      error: error.message
    });
  }
};

// Search blogs
export const searchBlogs = async (req, res) => {
  try {
    const { q } = req.query;
    const blogs = await Blog.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { shortDescription: { $regex: q, $options: 'i' } },
        { content: { $regex: q, $options: 'i' } },
        { authorName: { $regex: q, $options: 'i' } }
      ]
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: blogs
    });
  } catch (error) {
    console.error('Error searching blogs:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to search blogs',
      error: error.message
    });
  }
};
