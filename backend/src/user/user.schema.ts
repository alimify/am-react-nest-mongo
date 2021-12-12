import * as mongoose from 'mongoose';
    
export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  profile_photo_url: String,
  created_at: String,
});