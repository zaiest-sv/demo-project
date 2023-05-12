import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_URL } from "../../../shared/consts";
import { PostDto } from "./dtos/posts.dto";
import { Router } from "@angular/router";
import { CommentDTO } from "./dtos/comment.dto";

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

  getCommentsByPostId(postId: number | null | undefined): Observable<CommentDTO[]> {
    if (!postId) {
      return new Observable<CommentDTO[]>();
    }
    return this.http.get<PostDto[]>(API_URL + this.router.url);
  }
}
