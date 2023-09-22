import express from 'express';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlogById,
  deleteBlogById,
} from '../controllers/blog.controller.js';

const router = express.Router();

router.post('/createBlog', createBlog);

router.get('/getAllBlogs', getAllBlogs);

router.get('/getBlogById/:id', getBlogById);

router.put('/updateBlog/:id', updateBlogById);

router.delete('/deleteBlog/:id', deleteBlogById);

export default router;
