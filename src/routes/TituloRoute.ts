import { Router } from "express";
import TituloController from "../controller/TituloController";

export default class TituloRoute {
  private controller: TituloController;

  constructor() {
    this.controller = new TituloController();
  }

  routes(app: Router) {

    app.post("/api/titulo", this.controller.post);
    app.get("/api/titulo", this.controller.get);
    app.get("/api/titulo/:id", this.controller.getByName);
    app.put("/api/titulo/:id", this.controller.put);
  }
}

