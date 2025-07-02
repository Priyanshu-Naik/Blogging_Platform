import { response } from "express";
import Post from "../model/post.js";

export const createPost = async (request, response) => {
   
     try {
        const post = await new Post(request.body);
        post.save();

        return response.status(200).json({msg: 'post saved successfullly'})
     } catch (error) {
        return response.status(500).json(error);
     }
}

export const getAllPosts = async (req,res) => {
   try {
      let posts = await Post.find({});

      return res.status(200).json(posts);
   } catch (error) {
      return res.status(500).json({ msg: error.message })
   }
}

export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ msg: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ msg: 'Error retrieving post' });
    }
}

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post' });
    }
};
