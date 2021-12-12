import * as mongoose from 'mongoose';
    
export const PostSchema = new mongoose.Schema({
  user_id: String,
  title: String,
  content: String,
  created_at: String,
});