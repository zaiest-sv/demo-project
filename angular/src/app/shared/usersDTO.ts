
export class UserDTO {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone?: string;
  website?: string;
  posts?: PostDTO[];
}

export class PostDTO {
  id?: number;
  userId?: number;
  title?: string;
  body?: string;
  comments?: Comment[];
  user?: UserDTO;
}

export class CommentDTO {
  id?: number;
  postId?: number;
  name?: string;
  email?: string;
  body?: string;
}
