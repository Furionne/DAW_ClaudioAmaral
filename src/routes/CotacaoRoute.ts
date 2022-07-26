import { Router } from "express";
import CotacaoController from "../controllers/CotacaoController";

export default class CotacaoRoute {
  private controller: CotacaoController;

  constructor() {
    this.controller = new CotacaoController();
  }

  routes(app: Router) {

    app.post("/api/cotacao", this.controller.post);
    app.put("/api/cotacao/:id", this.controller.put);
    app.get("/api/cotacao", this.controller.getAll);
    app.delete("/api/cotacao/:id", this.controller.delete);
    app.get("/api/cotacao/:id", this.controller.getById);
    app.get("/api/cotacao/:id/surtos", this.controller.getAllSurtos);
  }
}

