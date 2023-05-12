export class UserDto {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: AddressDto;
  phone?: string;
  website?: string;
  company?: CompanyDto;
}

export class AddressDto {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: GeoDto;
}

export class GeoDto {
  lat?: string;
  lng?: string;
}

export class CompanyDto {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

export class CommentDTO {
  id?: number;
  postId?: number;
  name?: string;
  email?: string;
  body?: string;
}
