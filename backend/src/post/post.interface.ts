import { Document } from 'mongoose';

export interface Post extends Document {
    readonly user_id: string;
    readonly title: string;
    readonly content: string;
    readonly created_at: string;
}