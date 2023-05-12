import { CommentDTO } from "./comment.dto";

export class PostDto {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
  comments?: CommentDTO[];
  commentsCount?: number;
}
