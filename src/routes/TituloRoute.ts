import { Router } from "express";
import TituloController from "../controllers/TituloController";

export default class TituloRoute {
  private controller: TituloController;

  constructor() {
    this.controller = new TituloController();
  }

  routes(app: Router) {

    app.post("/api/titulo", this.controller.post);
    app.put("/api/titulo/:id", this.controller.put);
    app.get("/api/titulo", this.controller.getAll);
    app.delete("/api/titulo/:id", this.controller.delete);
    app.get("/api/titulo/:id", this.controller.getById);
    app.get("/api/titulo/:id/surtos", this.controller.getAllSurtos);
  }
}

