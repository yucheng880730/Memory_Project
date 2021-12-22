//
// in this file all we have to do is import function from controller/post.js
//

import express from "express";

import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// http://localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
// use for updating existing documents
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
