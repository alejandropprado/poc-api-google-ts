import axios from "axios";
import { IAddress } from "./../../entities/address.entity";
import { IGeocode } from "./../../entities/geocode.entity";

export class GeocodeService {
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.GOOGLE_MAPS_API_KEY!;
  }

  async geocode(address: string) {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address as string
    )}&key=${this.apiKey}`;

    const response = await axios.get<IGeocode>(apiUrl);

    if (response.data.status !== "OK" || !response.data.results.length) {
      throw new Error("Bad Request: Invalid address");
    }

    const [result] = response.data.results;
    const {
      location: { lat, lng },
      location_type: locationType,
    } = result.geometry;
    const { address_components: addressComponents } = result;

    if (locationType !== "ROOFTOP" && locationType !== "RANGE_INTERPOLATED") {
      throw new Error("Bad Request: Inaccurate location");
    }

    const addressData: IAddress = {
      address: result.formatted_address,
      commune: "",
      region: "",
      province: "",
      country: "",
      geolocation: { lat, lng },
      precision: locationType,
      number: "",
      zip_code: "",
    };

    addressComponents.forEach((component) => {
      if (component.types.includes("street_number")) {
        addressData.number = component.long_name;
      }
      if (component.types.includes("route")) {
        addressData.address = `${component.long_name} ${
          addressData.number || ""
        }`;
      }
      if (component.types.includes("administrative_area_level_2")) {
        addressData.province = component.long_name;
      }
      if (component.types.includes("administrative_area_level_1")) {
        addressData.region = component.long_name;
      }
      if (component.types.includes("locality")) {
        addressData.commune = component.long_name;
      }
      if (component.types.includes("country")) {
        addressData.country = component.long_name;
      }
      if (component.types.includes("country")) {
        addressData.country = component.long_name;
      }
      if (component.types.includes('postal_code')) {
        addressData.zip_code = component.long_name;
      }
    });

    return addressData;
  }
}
