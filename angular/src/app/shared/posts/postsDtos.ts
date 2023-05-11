export class PostDto {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
  comments?: CommentOfPostDTO[];
}

export class CommentOfPostDTO {
  postId?: number;
  id?: number;
  name?: string;
  email?: string;
  body?: string;
}

export interface Filter {
  label?: string;
  value?: string;
}
