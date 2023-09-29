import Blog from '../models/blog.model.js';


// Create a Blog Post
export const createBlog = async (req, res, next) => {
  try {
    const { blog_id, title, description, author, date, tags, image } = req.body;

    const newBlog = new Blog({
      blog_id,
      title,
      description,
      author,
      date,
      tags,
      image,
    });

    const savedBlog = await newBlog.save();

    return res.status(200).json(savedBlog);
  } catch (err) {
    next(err);
  }
};


// Get All Blog Posts
export const getAllBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find();

    return res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};


// Get a single Blog Post by ID
export const getBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    return res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};


// Update a Blog Post by ID
export const updateBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    return res.status(200).json(blog);
  } catch (err) {
    next(err);
  }
};


// Delete a Blog Post by ID
export const deleteBlogById = async (req, res, next) => {
  try {
    const blog = await Blog.findByIdAndRemove(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    return res.status(200).json({ message: 'Blog post deleted' });
  } catch (err) {
    next(err);
  }
};
