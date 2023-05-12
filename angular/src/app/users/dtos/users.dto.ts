import { AddressDto } from "./address.dto";
import { CompanyDto } from "./company.dto";

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
