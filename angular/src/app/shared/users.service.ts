import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UserDTO } from "./usersDTO";
import { apiUrl } from "./consts";

@Injectable()
export class UsersService {
  constructor(private readonly http: HttpClient) {}

  getUsers(): Observable<UserDTO[]> {
    return this.http.get<UserDTO[]>(`${apiUrl}/users`);
  }

  getUserById(id: string | null): Observable<UserDTO> {
    return this.http.get<UserDTO>(`${apiUrl}/users/${id}`);
  }
}
