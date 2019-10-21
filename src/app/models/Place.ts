import { Location } from "./Location";

export interface Place {
  placeId: string;
  name: string;
  description: string;
  location: Location;
  placeType: string;
  arrival: Date;
  departure: Date;
}
