import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { UserDto } from './dto/users.dto';
import { API_URL } from '../consts';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  getUsers(): Observable<AxiosResponse<UserDto[]>> {
    return this.httpService.get<UserDto[]>(`${API_URL}/users`);
  }

  getUserById(id: number): Observable<AxiosResponse<UserDto>> {
    return this.httpService.get<UserDto>(`${API_URL}/users/${id}`);
  }
}
