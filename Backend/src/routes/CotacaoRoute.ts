import { Router } from "express";
import CotacaoController from "../controller/CotacaoController";

export default class CotacaoRoute {
  private controller: CotacaoController;

  constructor() {
    this.controller = new CotacaoController();
  }

  routes(app: Router) {

    app.post("/api/cotacao", this.controller.post);
    app.get("/api/cotacao", this.controller.get);
    app.get("/api/cotacao/:id", this.controller.getByCod);
    app.put("/api/cotacao/:id", this.controller.put);
  }
}

