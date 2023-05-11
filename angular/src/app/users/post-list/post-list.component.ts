import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { PostDto } from "../../shared/posts/postsDtos";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../shared/users/users.service";
import {PostsService} from "../../shared/posts/posts.service";
import {MessageService} from "primeng/api";
import {Observable} from "rxjs";
import {UserDto} from "../../shared/users/usersDtos";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnChanges {

  @Input('userId') userId: number | undefined = 0;

  @Input() valueFromParent$: Observable<UserDto> = new Observable<UserDto>();

  posts: PostDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['userId']?.firstChange) {
      this.postsService.getPostByUserId(this.userId).subscribe((posts: PostDto[]) => {
        this.posts = posts;
        console.log('this.posts ', this.posts)
      });
    }
  }
}
