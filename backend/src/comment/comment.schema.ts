import * as mongoose from 'mongoose';
    
export const CommentSchema = new mongoose.Schema({
  username: String,
  post_id: String,
  comment_id: String,
  comment_count: String,
  content: String,
  created_at: String,
});