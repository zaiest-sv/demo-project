import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PostDTO} from "./usersDTO";
import {apiUrl} from "./consts";

@Injectable()
export class PostsService {
  constructor(private readonly http: HttpClient) {}

  getPostByUserId(userId: number): Observable<PostDTO[]> {
    return this.http.get<PostDTO[]>(`${apiUrl}/posts?userId=${userId}`);
  }
}
