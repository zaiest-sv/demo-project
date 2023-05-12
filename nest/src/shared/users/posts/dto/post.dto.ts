export class PostDto {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
  comments?: CommentOfPostDTO[];
  commentsCount?: number;
}

export class CommentOfPostDTO {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
}
