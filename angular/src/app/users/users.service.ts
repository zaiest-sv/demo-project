import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserDto } from "./dtos/users.dto";
import { API_URL } from "../shared/consts";
import { Router } from "@angular/router";

@Injectable()
export class UsersService {
  constructor(private readonly http: HttpClient, private router: Router) {}

  getUsers(): Observable<UserDto[]> {
    return this.http.get<UserDto[]>(API_URL + this.router?.url);
  }

  getUserById(id: string | null): Observable<UserDto> {
    return this.http.get<UserDto>(API_URL + this.router?.url);
  }
}
