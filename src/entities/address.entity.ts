interface ILocation {
  lat: number;
  lng: number;
}

export interface IAddress {
  geolocation: ILocation;
  address: string;
  number: string;
  commune: string;
  region: string;
  province: string;
  country: string;
  precision: string;
  zip_code: string;
}
