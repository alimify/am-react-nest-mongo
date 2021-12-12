import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comment.interface';
import { CreateCommentDTO } from './create-comment.dto';

@Injectable()
export class CommentService {

    constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) {

    }

    async store(createCommentDTO: CreateCommentDTO): Promise<Comment> {

        const comment = await new this.commentModel(createCommentDTO);

        return comment.save();
    }  
        
    async getByPost(postID,page : number = 1, perPage : number = 10) {


          const skip = (page - 1) * perPage;

          const total = await this.commentModel
                                  .countDocuments({})
                                  .exec();
  
          const comments = await this.commentModel
                                  .find({
                                      post_id: postID
                                  })
                                  .limit(perPage)
                                  .skip(skip)
                                  .sort({
                                    created_at:'desc'
                                  })
                                  .exec();
  
          return {
              page: page,
              total: total,
              comments: comments
          };
    }


    async getByComment(comment_id) {



        const comments = await this.commentModel
                                .find({
                                    comment_id: comment_id
                                })
                                .sort({
                                    created_at:'desc'
                                })
                                .exec();

        return comments;
  }


}
