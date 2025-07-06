import express from 'express';

import { user_controller, login_User } from '../controller/user-controller.js';
import { uploadFile } from '../controller/uploadController.js';
import { getImage } from '../controller/image-controller.js';
import { createPost, getAllPosts, getPostById, deletePost, updatePost } from '../controller/postController.js';
import { addComment, getCommentsByPostId, deleteComment, updateComment } from '../controller/commentController.js';
import { authenticateToken } from '../controller/jwtController.js';

const router = express.Router();

try {
  router.post('/signup', user_controller);
  router.post('/login', login_User);

  router.post('/file/upload', uploadFile);
  router.get('/file/:filename', getImage);

  router.post('/create', authenticateToken, createPost);
  router.get('/posts', authenticateToken, getAllPosts);
  router.get('/post/:id', authenticateToken, getPostById);
  router.delete('/post/:id', authenticateToken, deletePost);
  router.put('/post/:id', authenticateToken, updatePost);

  router.post('/comment', addComment);
  router.get('/comments/:postId', getCommentsByPostId);
  router.delete('/comment/:id', deleteComment);
  router.put('/comment/:id', updateComment);

  console.log("✅ All routes loaded successfully.");

} catch (err) {
  console.error("❌ Error in defining routes:", err.message);
  throw err; // Make sure app fails early if this happens
}


export default router;