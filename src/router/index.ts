import express, { Router } from "express";
import { GeocodeController } from "../api/geocode/geocode.controller";
import { AutocompleteController } from "../api/autocomplete/autocomplete.controller";

export class RouterApp {
  private readonly routes: Router;
  constructor() {
    this.routes = express.Router();
    const geocodeController = new GeocodeController();
    const autocompleteController = new AutocompleteController();
    const geocodeRoutes = geocodeController.routes;
    const autocompleteRoutes = autocompleteController.routes;

    this.routes.use("/api/v1/geocode", geocodeRoutes);
    this.routes.use("/api/v1/autocomplete", autocompleteRoutes);
  }

  get router(): Router {
    return this.routes;
  }
}
