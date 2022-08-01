import { Application, Router } from "express";
import {} from "../controller/IUtilizadorController";
import { UtilizadorController } from "../controller/UtilizadorController";
export class UtilizadorRoutes {
  private router: Router = Router();

  constructor(private controller = new UtilizadorController()) {
    this.addRoutes();
  }

  public routes(app: Application) {
    app.use("/api/utilizador", this.router);
  }

  private addRoutes = () => {
    this.router.post(
      "/register",

      this.controller.register
    );

    this.router.post(
      "/login",

      this.controller.login
    );

    this.router.get("/", this.controller.getAll);
  };
}
