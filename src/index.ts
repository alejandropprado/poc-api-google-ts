import express, { Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { RouterApp } from "./router";

config();

const { PORT: port = 3000 } = process.env;
const app = express();
const routerApp = new RouterApp();

app.use(cors());
app.use(routerApp.router);

app.listen(port, () => {
  console.log(`API de direcciones corriendo en http://localhost:${port}`);
});
