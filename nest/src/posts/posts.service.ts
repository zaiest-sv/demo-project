import { AxiosResponse } from 'axios';
import { forkJoin, Observable } from 'rxjs';
import { Injectable, Param } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PostDto } from './dtos/post.dto';
import { CommentDto } from './dtos/comment.dto';
import { map, mergeMap } from 'rxjs/operators';
import { API_URL } from '../shared/consts';

@Injectable()
export class PostsService {
  constructor(private httpService: HttpService) {}

  getPostsAndCommentsByUserId(
    @Param('userId') userId: number,
  ): Observable<PostDto[]> {
    return this.getPostsByUserId(userId).pipe(
      mergeMap((postsResponse: AxiosResponse<PostDto[]>) => {
        const posts = postsResponse.data;
        const requests = posts.map((post) =>
          this.getCommentsByPostId(post.id).pipe(
            map((commentsResponse: AxiosResponse<CommentDto[]>) => {
              const comments = commentsResponse.data;
              const commentsCount = Math.floor(Math.random() * 10);
              return {
                ...post,
                comments: comments,
                commentsCount: commentsCount,
              };
            }),
          ),
        );
        return forkJoin(requests).pipe(
          map((postsWithComments: any[]) => {
            // Sort the posts based on the number of comments in descending order
            postsWithComments.sort((a, b) => b.commentsCount - a.commentsCount);
            return postsWithComments;
          }),
        );
      }),
    );
  }

  getPostsByUserId(userId: number): Observable<AxiosResponse<PostDto[]>> {
    return this.httpService.get<PostDto[]>(`${API_URL}/posts?userId=${userId}`);
  }

  getCommentsByPostId(postId: number): Observable<AxiosResponse<CommentDto[]>> {
    return this.httpService.get<CommentDto[]>(
      `${API_URL}/comments?postId=${postId}`,
    );
  }
}
