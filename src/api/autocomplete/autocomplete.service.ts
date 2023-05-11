import axios from "axios";
import { IAutocomplete } from "entities/autocomplete.entity";
import { GoogleAutocompleteResponse } from "entities/google-autocomplete.entity";

export class AutocompleteService {
  private readonly apiKey: string;

  constructor() {
    this.apiKey = process.env.GOOGLE_MAPS_API_KEY!;
  }

  async autocomplete(input: string): Promise<IAutocomplete[]> {
    const uri = "https://maps.googleapis.com/maps/api/place/autocomplete/json";
    const response = await axios.get<GoogleAutocompleteResponse>(uri, {
      params: {
        input,
        key: this.apiKey,
      },
    });

    const results: IAutocomplete[] = response.data.predictions.map(
      (result: any) => ({
        place_id: result.place_id,
        description: result.description,
      })
    );

    return results;
  }
}
