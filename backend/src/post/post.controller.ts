import { Controller, Get, Res, Req, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete } from '@nestjs/common';
import { query, Request } from 'express';

import { PostService } from './post.service';
import { CreatePostDTO } from './create-post.dto';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';



@Controller('post')
export class PostController {

        constructor(private postService: PostService) { }


        @Get('index')
        async index(@Res() res,@Query() q) {

            const page = Number(q.page || 1),
                  perPage = Number(q.per_page || 10);

            const posts = await this.postService.index(page,perPage);

            return res.status(HttpStatus.OK).json(posts);
        }


        // Submit a post
        @Post('/store')
        async store(@Res() res, @Body() createPostDTO: CreatePostDTO) {

            const newPost = await this.postService.store(createPostDTO);

            return res.status(HttpStatus.OK).json({
                message: 'Post has been submitted successfully!',
                post: newPost,
            });

        }


        @Get('view/:postID')
        async view(@Res() res, @Param('postID', new ValidateObjectId()) postID) {

            const post = await this.postService.view(postID);

            if (!post) {
                throw new NotFoundException('Post does not exist!');
            }

            return res.status(HttpStatus.OK).json(post);
        }



}
