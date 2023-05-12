import { Controller, Get, Param } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PostsService } from './posts.service';
import { PostDto } from './dtos/post.dto';

@Controller('user/details')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get(':userId/posts')
  getPostsAndCommentsByUserId(
    @Param('userId') userId: number,
  ): Observable<PostDto[]> {
    return this.postsService.getPostsAndCommentsByUserId(userId);
  }
}
