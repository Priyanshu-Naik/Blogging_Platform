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
