export interface GoogleAutocompleteResponse {
  predictions: Prediction[];
  status: string;
}

interface Prediction {
  description: string;
  matched_substrings: Substring[];
  place_id: string;
  reference: string;
  structured_formatting: Formatting;
  terms: Term[];
  types: string[];
}

interface Substring {
  length: number;
  offset: number;
}

interface Formatting {
  main_text: string;
  main_text_matched_substrings: Substring[];
  secondary_text: string;
}

interface Term {
  offset: number;
  value: string;
}
