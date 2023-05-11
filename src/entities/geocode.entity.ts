interface IAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface IGeometry {
  location: { lat: number; lng: number };
  location_type: string;
}

interface IGeocodeResult {
  formatted_address: string;
  geometry: IGeometry;
  address_components: IAddressComponent[];
}

export interface IGeocode {
  status: string;
  results: IGeocodeResult[];
}
