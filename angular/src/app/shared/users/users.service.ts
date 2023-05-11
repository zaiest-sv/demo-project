import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from "./usersDtos";
import { apiUrl } from "../consts";

@Injectable()
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(`${apiUrl}/users`);
  }

  getUserById(id: string | null): Observable<UserDto> {
    return this.http.get<UserDto>(`${apiUrl}/users/${id}`);
  }
}
