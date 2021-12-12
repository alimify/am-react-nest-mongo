import { Injectable } from '@nestjs/common';
import { AnyArray, AnyObject, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.interface';
import { CreatePostDTO } from './create-post.dto';

@Injectable()
export class PostService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {

    }

    async index(page : number = 1, perPage : number = 10) {

        const skip = (page - 1) * perPage;

        const total = await this.postModel
                                .countDocuments({})
                                .exec();

        const posts = await this.postModel
                                .find()
                                .limit(perPage)
                                .skip(skip)
                                .sort({
                                    created_at:'desc'
                                })
                                .exec();

        return {
            page: page,
            total: total,
            posts: posts
        };
    }


    async store(createPostDTO: CreatePostDTO): Promise<Post> {

        const post = await new this.postModel(createPostDTO);
        return post.save();
    }  
        
    async view(postID): Promise<Post> {

        const post = await this.postModel
          .findById(postID)
          .exec();

        return post;
    }


}
