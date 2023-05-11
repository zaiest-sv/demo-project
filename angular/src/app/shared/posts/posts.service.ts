import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl } from "../consts";
import { CommentOfPostDTO, PostDto } from "./postsDtos";

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpClient) {}

  getPostByUserId(userId: number | null | undefined): Observable<PostDto[]> {
    if (!userId) {
      return new Observable<PostDto[]>();
    }
    return this.http.get<PostDto[]>(`${apiUrl}/posts?userId=${userId}`);
  }

  getCommentsByPostId(postId: number | null | undefined): Observable<CommentOfPostDTO[]> {
    if (!postId) {
      return new Observable<CommentOfPostDTO[]>();
    }
    return this.http.get<PostDto[]>(`${apiUrl}/comments?postId=${postId}`);
  }
}
