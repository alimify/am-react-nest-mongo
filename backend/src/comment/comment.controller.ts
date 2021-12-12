import { Controller, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateCommentDTO } from './create-comment.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';



@Controller('comment')
export class CommentController {

        constructor(private commentService: CommentService) { }


        // Submit a post
        @Post('/store')
        async store(@Res() res, @Body() createCommentDTO: CreateCommentDTO) {


        const comment = await this.commentService.store(createCommentDTO);

            return res.status(HttpStatus.OK).json({
                message: 'Comment has been submitted successfully!',
                comment: comment,
            });

        }


        @Get('get-by-post/:postID')
        async getByPost(@Res() res, @Param('postID', new ValidateObjectId()) postID, @Query() q) {


            const page = Number(q.page || 1),
                  perPage = Number(q.per_page || 10);

            const comments = await this.commentService.getByPost(postID, page,perPage);

            if (!comments) {
                throw new NotFoundException('Post does not exist!');
            }

            return res.status(HttpStatus.OK).json(comments);
        }

        @Get('get-by-comment/:comment_id')
        async getByComment(@Res() res, @Param('comment_id', new ValidateObjectId()) comment_id) {


            const comments = await this.commentService.getByComment(comment_id);

            if (!comments) {
                throw new NotFoundException('Post does not exist!');
            }

            return res.status(HttpStatus.OK).json(comments);
        }

}
