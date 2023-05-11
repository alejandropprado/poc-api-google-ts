import express, { Request, Response, Router } from "express";
import { GeocodeService } from "./geocode.service";

export class GeocodeController {
  private readonly router: Router;
  private readonly geocodeService: GeocodeService;

  constructor() {
    this.router = express.Router();
    this.geocodeService = new GeocodeService();
  }

  async geocode(req: Request, res: Response) {
    try {
      const { address } = req.params;
      const addressResponse = await this.geocodeService.geocode(address);
      return res.status(200).send(addressResponse);
    } catch (error: any) {
      console.log(error);
      return res.status(400).send(error?.message ?? "");
    }
  }

  get routes(): Router {
    this.router.get("/address/:address", this.geocode.bind(this));

    return this.router;
  }
}
