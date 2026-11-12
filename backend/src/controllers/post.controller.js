import { Post } from "../models/post.model.js";

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        if (!title || !content || !author) {
            return res.status(400).json({ message: "Title, content, and author are required" });
        }

        const post = await Post.create({
            title,
            content,
            author,
        });

        return res.status(201).json({
            message: "Post created successfully",
            post,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get all posts (Read)
export const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "username email");
        return res.status(200).json({ posts });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Get post by ID (Read single)
export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id).populate("author", "username email");

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({ post });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Update post by ID (Update)
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, content } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            id,
            {
                $set: {
                    title,
                    content,
                },
            },
            { new: true }
        );

        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({
            message: "Post updated successfully",
            post: updatedPost,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

// Delete post by ID (Delete)
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedPost = await Post.findByIdAndDelete(id);

        if (!deletedPost) {
            return res.status(404).json({ message: "Post not found" });
        }

        return res.status(200).json({
            message: "Post deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
