import { Document } from 'mongoose';

export interface Post extends Document {
    readonly id: string;
    readonly name: string;
    readonly email: string;
    readonly profile_photo_url: String;
    readonly created_at: string;
}