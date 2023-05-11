import express, { Request, Response, Router } from "express";
import { AutocompleteService } from "./autocomplete.service";

export class AutocompleteController {
  private readonly router: Router;
  private readonly autocompleteService: AutocompleteService;

  constructor() {
    this.router = express.Router();
    this.autocompleteService = new AutocompleteService();
  }

  async search(req: Request, res: Response) {
    try {
      const { input } = req.params;
      const autocomplete = await this.autocompleteService.autocomplete(input);

      return res.status(200).send(autocomplete);
    } catch (error: any) {
      return res.status(500).json(error?.message);
    }
  }

  get routes(): Router {
    this.router.get("/:input", this.search.bind(this));

    return this.router;
  }
}
