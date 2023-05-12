import { CommentDto } from './comment.dto';

export class PostDto {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
  comments?: CommentDto[];
  commentsCount?: number;
}
