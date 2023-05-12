import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from "../consts";
import { CommentOfPostDTO, PostDto } from "./posts.dto";
import { Router } from "@angular/router";

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpClient, private router: Router) {}

  getPostsAndCommentsByUserId(userId: number | null | undefined): Observable<PostDto[]> {
    if (!userId) {
      return new Observable<PostDto[]>();
    }
    return this.http.get<PostDto[]>(`${API_URL}${this.router.url}/posts`);
  }

  getPostByUserId(userId: number | null | undefined): Observable<PostDto[]> {
    if (!userId) {
      return new Observable<PostDto[]>();
    }
    return this.http.get<PostDto[]>(API_URL + this.router.url);
  }

  getCommentsByPostId(postId: number | null | undefined): Observable<CommentOfPostDTO[]> {
    if (!postId) {
      return new Observable<CommentOfPostDTO[]>();
    }
    return this.http.get<PostDto[]>(API_URL + this.router.url);
  }
}
