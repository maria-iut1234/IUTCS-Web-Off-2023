import express from "express";
import { createBlog } from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/createBlog", createBlog);

export default router;
