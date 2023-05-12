import { GeoDto } from "./geo.dto";

export class AddressDto {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: GeoDto;
}
