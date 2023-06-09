import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { PostsService } from './post-list/posts.service';
import { UserDto } from '../dtos/users.dto';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: UserDto | undefined = new UserDto();
  fileIcon = 'assets/layout/avatar/avatar-igor.jpg';

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private postsService: PostsService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(id).subscribe((user: UserDto) => {
      this.user = user;
    });
  }

  onUpload(event: Event) {
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
