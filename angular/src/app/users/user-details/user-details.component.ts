import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/users/users.service';
import { PostsService } from '../../shared/posts/posts.service';
import { UserDto } from '../../shared/users/usersDtos';
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

  onUpload(event: any) {
    this.fileIcon = event;
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode' });
  }
}
