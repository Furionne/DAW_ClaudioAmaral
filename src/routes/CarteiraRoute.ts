import { Router } from "express";
import CarteiraController from "../controllers/CarteiraController";

export default class CarteiraRoute {
  private controller: CarteiraController;

  constructor() {
    this.controller = new CarteiraController();
  }

  routes(app: Router) {

    app.post("/api/carteira", this.controller.post);
    app.put("/api/carteira/:id", this.controller.put);
    app.get("/api/carteira", this.controller.getAll);
    app.delete("/api/carteira/:id", this.controller.delete);
    app.get("/api/carteira/:id", this.controller.getById);
    app.get("/api/carteira/:id/surtos", this.controller.getAllSurtos);
  }
}

