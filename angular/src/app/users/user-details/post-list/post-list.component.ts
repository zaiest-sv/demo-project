import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PostDto } from "../../../shared/posts/posts.dto";
import { ActivatedRoute } from "@angular/router";
import { PostsService } from "../../../shared/posts/posts.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnChanges {

  @Input('userId') userId: number | undefined = 0;

  posts: PostDto[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['userId']?.firstChange) {
      this.postsService.getPostsAndCommentsByUserId(this.userId).subscribe(
        (data) => {
          this.posts = data;
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
