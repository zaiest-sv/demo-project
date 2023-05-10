import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../shared/users.service';
import { PostsService } from '../../shared/posts.service';
import { PostDTO, UserDTO } from '../../shared/usersDTO';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  user: UserDTO | undefined = new UserDTO();
  posts: PostDTO[] | undefined = [];

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getUserById(id).subscribe((user: any) => {
      this.user = user;
      this.postsService.getPostByUserId(user.id).subscribe((posts: any) => {
        this.posts = posts;
        const maxCommentsPost = this.getMaxCommentsPost(posts);
        this.posts = this.moveMaxCommentsPostToTop(posts, maxCommentsPost);
      });
    });
  }

  getMaxCommentsPost(posts: any) {
    let maxComments = 0;
    let maxCommentsPost;
    for (const post of posts) {
      if (post.comments.length > maxComments) {
        maxComments = post.comments.length;
        maxCommentsPost = post;
      }
    }
    return maxCommentsPost;
  }

  moveMaxCommentsPostToTop(posts: any[], maxCommentsPost: any) {
    posts.splice(posts.indexOf(maxCommentsPost), 1);
    posts.unshift(maxCommentsPost);
    return posts;
  }
}
