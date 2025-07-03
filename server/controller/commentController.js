import Comment from "../model/comments.js";

export const addComment = async (req, res) => {
    try {
        const { postId, text, username } = req.body;

        if (!postId || !text || !username) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const comment = new Comment({ postId, text, username });
        await comment.save();

        res.status(200).json({ message: 'Comment added successfully', comment });
    } catch (error) {
        console.error('Error while adding comment:', error);
        res.status(500).json({ message: 'Error adding comment' });
    }
};

export const getCommentsByPostId = async (req, res) => {
    try {
        const { postId } = req.params;

        const comments = await Comment.find({ postId }).sort({ createdAt: -1 });

        res.status(200).json(comments);
    } catch (error) {
        console.error('Error while fetching comments:', error);
        res.status(500).json({ message: 'Error fetching comments' });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;

        // Optional: validate if it's a valid MongoDB ObjectId
        if (!id || id.length !== 24) {
            return res.status(400).json({ message: 'Invalid comment ID' });
        }

        const deleted = await Comment.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({ message: 'Comment deleted successfully' });
    } catch (error) {
        console.error('Error deleting comment:', error.message);
        res.status(500).json({ message: 'Error deleting comment', error: error.message });
    }
};

export const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: 'Comment text is required' });
        }

        const updated = await Comment.findByIdAndUpdate(
            id,
            { text },
            { new: true }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Comment not found' });
        }

        res.status(200).json({ message: 'Comment updated successfully', comment: updated });

    } catch (error) {
        console.error("Error updating comment:", error.message, error.stack);
        res.status(500).json({ message: 'Error updating comment', error: error.message });
    }
};