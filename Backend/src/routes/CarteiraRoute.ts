import { Router } from "express";
import CarteiraController from "../controller/CarteiraController";

export default class CarteiraRoute {
  private controller: CarteiraController;

  constructor() {
    this.controller = new CarteiraController();
  }

  routes(app: Router) {

    app.post("/api/carteira", this.controller.post);
    app.get("/api/carteira", this.controller.get);
    app.get("/api/carteira/:id", this.controller.getByCod);
    app.put("/api/carteira/:id", this.controller.put);
    app.delete("/api/carteira/:id", this.controller.delete);
    
  }
}

