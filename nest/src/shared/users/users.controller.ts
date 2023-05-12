import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/users.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller('user')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('list')
  getUsers(): Observable<UserDto[]> {
    return this.usersService.getUsers().pipe(
      map((usersResponse) => {
        return usersResponse.data;
      }),
    );
  }

  @Get('details/:id')
  getUserById(@Param('id') id: number): Observable<UserDto> {
    return this.usersService.getUserById(id).pipe(
      map((usersResponse) => {
        return usersResponse.data;
      }),
    );
  }
}
